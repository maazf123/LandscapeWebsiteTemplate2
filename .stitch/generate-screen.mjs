// Direct Stitch API caller for Greenway Landscaping — handles SSE responses
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ID = "4032065221276871367";
const API_KEY = fs.readFileSync(path.join(process.env.USERPROFILE, '.env'), 'utf8')
  .split('\n').find(l => l.startsWith('STITCH_API_KEY='))?.split('=')[1]?.trim();

if (!API_KEY) { console.error("No STITCH_API_KEY in ~/.env"); process.exit(1); }

async function callStitchMCP(method, params) {
  const mcpRequest = {
    jsonrpc: "2.0",
    id: 1,
    method: "tools/call",
    params: { name: method, arguments: params },
  };

  console.log(`[${new Date().toISOString()}] Sending request...`);

  const res = await fetch("https://stitch.googleapis.com/mcp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json, text/event-stream",
      "X-Goog-Api-Key": API_KEY,
    },
    body: JSON.stringify(mcpRequest),
    signal: AbortSignal.timeout(300000),
  });

  const contentType = res.headers.get("content-type") || "";
  console.log(`[${new Date().toISOString()}] Status: ${res.status}, Content-Type: ${contentType}`);

  if (contentType.includes("text/event-stream")) {
    console.log(`[${new Date().toISOString()}] Reading SSE stream...`);
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let results = [];

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const events = buffer.split("\n\n");
      buffer = events.pop();

      for (const event of events) {
        if (!event.trim()) continue;
        const lines = event.split("\n");
        let eventType = "";
        let data = "";
        for (const line of lines) {
          if (line.startsWith("event: ")) eventType = line.slice(7);
          if (line.startsWith("data: ")) data += line.slice(6);
        }
        if (data) {
          try {
            const parsed = JSON.parse(data);
            console.log(`[${new Date().toISOString()}] Event: ${eventType || "message"}`);
            results.push(parsed);
            if (parsed.result?.content || parsed.error) {
              console.log(JSON.stringify(parsed, null, 2));
            }
          } catch {
            console.log(`[${new Date().toISOString()}] Raw event: ${data.substring(0, 200)}`);
          }
        }
      }
    }

    if (buffer.trim()) {
      const lines = buffer.split("\n");
      let data = "";
      for (const line of lines) {
        if (line.startsWith("data: ")) data += line.slice(6);
      }
      if (data) {
        try {
          const parsed = JSON.parse(data);
          results.push(parsed);
          console.log(JSON.stringify(parsed, null, 2));
        } catch {
          console.log(`[${new Date().toISOString()}] Remaining: ${data.substring(0, 200)}`);
        }
      }
    }

    return results;
  } else {
    const text = await res.text();
    console.log(`[${new Date().toISOString()}] JSON response (${text.length} chars)`);
    try {
      const parsed = JSON.parse(text);
      console.log(JSON.stringify(parsed, null, 2));
      return parsed;
    } catch {
      console.log(text.substring(0, 1000));
      return text;
    }
  }
}

async function main() {
  const prompt = process.argv[2] || "Landscaping homepage";
  const screenName = process.argv[3] || "screen";

  console.log(`[${new Date().toISOString()}] Generating "${screenName}" for project ${PROJECT_ID}...`);

  const result = await callStitchMCP("generate_screen_from_text", {
    projectId: PROJECT_ID,
    prompt: prompt,
    deviceType: "DESKTOP",
    modelId: "GEMINI_3_1_PRO",
  });

  // Save result
  const resultPath = path.join(__dirname, `${screenName}-result.json`);
  fs.writeFileSync(resultPath, JSON.stringify(result, null, 2));
  console.log(`[${new Date().toISOString()}] Result saved to ${resultPath}`);
}

main().catch(e => {
  console.error(`[${new Date().toISOString()}] Error:`, e.message);
  process.exit(1);
});
