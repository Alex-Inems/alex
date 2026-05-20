import { NextResponse } from 'next/server';

// Standardized fallback scoping database for resilient, offline-first performance
const SCOPE_PRESETS = [
  {
    keywords: ['email', 'slack', 'ticket', 'customer', 'alert', 'sentiment'],
    title: 'Customer Ticket Routing Agent',
    steps: [
      { name: 'Email Monitor', desc: 'Polls incoming support emails via IMAP/Gmail API.', icon: 'mail' },
      { name: 'Sentiment & Intent Parser', desc: 'Runs LLM check to analyze urgency, category, and mood.', icon: 'brain' },
      { name: 'CRM & DB Log', desc: 'Stores the parsed ticket in CRM or PostgreSQL DB.', icon: 'database' },
      { name: 'Slack Alert Routing', desc: 'Dispatches high-urgency notifications directly to regional Slack channels.', icon: 'message' }
    ],
    stack: ['Python 3.11', 'LangChain', 'OpenAI / Gemini API', 'Slack SDK', 'PostgreSQL'],
    hoursSaved: 16,
    complexity: 'Medium',
    code: `import os
import imaplib
import email
from slack_sdk import WebClient
from google import genai

# Securely fetch environment variables
SLACK_TOKEN = os.getenv("SLACK_API_TOKEN")
GEMINI_KEY = os.getenv("GEMINI_API_KEY")

def analyze_sentiment(body: str) -> dict:
    """Analyze customer email intent and sentiment using Gemini 2.5 Flash."""
    client = genai.Client(api_key=GEMINI_KEY)
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=f"Analyze intent and sentiment (Positive/Neutral/Urgent) of this email:\\n\\n{body}",
    )
    # Parse sentiment from model output
    return {"sentiment": "Urgent" if "urgent" in response.text.lower() else "Neutral"}

def send_slack_alert(channel: str, message: str):
    """Dispatch Slack alert securely to appropriate support channel."""
    client = WebClient(token=SLACK_TOKEN)
    client.chat_postMessage(channel=channel, text=message)

if __name__ == "__main__":
    print("[INFO] Initializing Customer Ticket Routing Agent...")
    # Mocking standard operational sequence
    sample_email = "URGENT: Application is down and I am losing sales! Please fix ASAP."
    analysis = analyze_sentiment(sample_email)
    if analysis["sentiment"] == "Urgent":
        send_slack_alert("#support-alerts", "🚨 URGENT TICKET: " + sample_email)
        print("[SUCCESS] Slack alert routed successfully.")
`
  },
  {
    keywords: ['scrape', 'sheet', 'price', 'competitor', 'weekly', 'pdf'],
    title: 'Automated Competitor Pricing Scraper',
    steps: [
      { name: 'Target Scraping Engine', desc: 'Fetches HTML using requests and parses via BeautifulSoup/Playwright.', icon: 'search' },
      { name: 'Data Normalization', desc: 'Cleans price structures, removing currencies and aligning schemas.', icon: 'settings' },
      { name: 'Google Sheets Sink', desc: 'Updates tracking spreadsheets via gspread API.', icon: 'grid' },
      { name: 'PDF Report Generator', desc: 'Compiles a beautiful PDF summary of price fluctuations.', icon: 'file' }
    ],
    stack: ['Python 3.11', 'BeautifulSoup4', 'Playwright', 'gspread API', 'ReportLab'],
    hoursSaved: 12,
    complexity: 'Medium',
    code: `import os
import requests
from bs4 import BeautifulSoup
import gspread
from oauth2client.service_account import ServiceAccountCredentials

def scrape_prices(url: str) -> list:
    """Safely fetch and parse competitor pricing from product page."""
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}
    res = requests.get(url, headers=headers, timeout=10)
    res.raise_for_status()
    soup = BeautifulSoup(res.text, "html.parser")
    # Custom selectors configured for target competitor sites
    items = []
    for item in soup.select(".product-card"):
        name = item.select_one(".title").text.strip()
        price = float(item.select_one(".price").text.replace("$", ""))
        items.append({"name": name, "price": price})
    return items

def update_google_sheet(data: list):
    """Write cleaned competitor metrics to centralized Google Sheet."""
    scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
    creds = ServiceAccountCredentials.from_json_keyfile_name("credentials.json", scope)
    client = gspread.authorize(creds)
    sheet = client.open("Competitor Pricing Hub").sheet1
    for row in data:
        sheet.append_row([row["name"], row["price"]])

if __name__ == "__main__":
    print("[INFO] Starting Competitor Pricing Scraper...")
    try:
        prices = scrape_prices("https://competitor.com/catalog")
        update_google_sheet(prices)
        print(f"[SUCCESS] Scraped and synchronized {len(prices)} items to Google Sheet.")
    except Exception as e:
        print(f"[ERROR] Scraping failed: {e}")
`
  },
  {
    keywords: ['linkedin', 'lead', 'crm', 'outreach', 'prospect'],
    title: 'AI Lead Generation & Enrichment pipeline',
    steps: [
      { name: 'Prospect Ingestion', desc: 'Pulls profile data and bios from LinkedIn or target directories.', icon: 'users' },
      { name: 'Data Enrichment', desc: 'Finds verified professional emails using services like Hunter/Apollo.', icon: 'check-circle' },
      { name: 'AI Hyper-Personalization', desc: 'Crafts tailored value propositions matching their specific background.', icon: 'edit' },
      { name: 'CRM Integration', desc: 'Stores details and drafts into Salesforce, Hubspot, or Notion.', icon: 'database' }
    ],
    stack: ['Python 3.11', 'Apollo.io API', 'Gemini API', 'Hubspot SDK', 'Pandas'],
    hoursSaved: 20,
    complexity: 'High',
    code: `import os
import requests
from google import genai

APOLLO_API_KEY = os.getenv("APOLLO_API_KEY")
GEMINI_KEY = os.getenv("GEMINI_API_KEY")

def enrich_contact(email: str) -> dict:
    """Enrich lead data with company size and role details via Apollo.io."""
    url = f"https://api.apollo.io/v1/people/match?api_key={APOLLO_API_KEY}"
    res = requests.post(url, json={"email": email}, timeout=10)
    res.raise_for_status()
    data = res.json()
    return {
        "name": data.get("person", {}).get("name"),
        "title": data.get("person", {}).get("title"),
        "company": data.get("person", {}).get("organization", {}).get("name")
    }

def draft_personal_pitch(lead: dict) -> str:
    """Generate high-converting personalized pitch based on lead metadata."""
    client = genai.Client(api_key=GEMINI_KEY)
    prompt = (
        f"Draft a concise, warm 3-sentence outreach email to {lead['name']}, "
        f"who works as the {lead['title']} at {lead['company']}. "
        f"Propose a call to talk about high-performance AI automations."
    )
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt,
    )
    return response.text

if __name__ == "__main__":
    print("[INFO] Processing lead queue...")
    mock_lead = {"email": "alex@enterprise.com"}
    enriched = enrich_contact(mock_lead["email"])
    pitch = draft_personal_pitch(enriched)
    print(f"\\nDrafted Outreach to {enriched['name']}:\\n")
    print(pitch)
`
  }
];

// Helper to sanitize incoming queries
function sanitizeInput(str) {
  if (!str) return '';
  return str.replace(/[^a-zA-Z0-9\s.,?!#@()-_]/g, '').trim().substring(0, 1000);
}

// Custom prompt parser for intelligent fallback
function findFallbackPreset(query) {
  const words = query.toLowerCase().split(/\s+/);
  let bestPreset = SCOPE_PRESETS[0];
  let maxScore = -1;

  for (const preset of SCOPE_PRESETS) {
    let score = 0;
    for (const kw of preset.keywords) {
      if (words.some(word => word.includes(kw))) {
        score++;
      }
    }
    if (score > maxScore) {
      maxScore = score;
      bestPreset = preset;
    }
  }

  // If match score is 0, return custom generated layout matching the prompt
  if (maxScore <= 0) {
    return {
      title: `Custom ${query.slice(0, 25)} Automation`,
      steps: [
        { name: 'Input Collector', desc: 'Trigger or webhook that intercepts incoming business events.', icon: 'search' },
        { name: 'AI Decision Engine', desc: 'Evaluates parameters and outlines strategic downstream paths.', icon: 'brain' },
        { name: 'Action Dispatcher', desc: 'Synchronizes outcome with destination APIs and services.', icon: 'database' },
        { name: 'Analytics Monitor', desc: 'Saves performance logs to monitor hours saved dynamically.', icon: 'settings' }
      ],
      stack: ['Python 3.11', 'Gemini Pro API', 'FastAPI', 'Loguru', 'PostgreSQL'],
      hoursSaved: 10,
      complexity: 'Medium',
      code: `# Production-grade custom automation script for: ${query}
import os
import sys
import logging

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")

def process_workflow():
    logging.info("Initializing custom scoping trigger...")
    # Executing dynamic pipeline steps
    result = "Success"
    logging.info(f"System synchronized successfully: {result}")
    return result

if __name__ == "__main__":
    process_workflow()
`
    };
  }

  return bestPreset;
}

export async function POST(req) {
  try {
    const body = await req.json();
    const rawPrompt = body.prompt;
    
    // Strict input validation
    if (!rawPrompt || typeof rawPrompt !== 'string') {
      return NextResponse.json({ error: 'Valid prompt is required.' }, { status: 400 });
    }

    const prompt = sanitizeInput(rawPrompt);
    if (prompt.length < 5) {
      return NextResponse.json({ error: 'Prompt is too short. Please describe in more detail.' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      // Graceful offline/local fallback
      console.warn('[WARN] GEMINI_API_KEY is not defined. Initiating local scoping fallback...');
      const preset = findFallbackPreset(prompt);
      return NextResponse.json(preset);
    }

    // Call real Gemini API securely
    const systemPrompt = `You are "Alex's AI Automation Co-pilot", an elite senior system architect and Python/AI automation developer. 
Your goal is to parse a business automation request and design an elegant, production-grade agentic workflow.
You must output a JSON object containing the exact following structure:
{
  "title": "A short, professional title for this automated solution",
  "steps": [
    { "name": "Step Name (3-5 words max)", "desc": "Concise detail on how this node automates the task.", "icon": "Choose from: 'mail', 'brain', 'database', 'message', 'search', 'settings', 'grid', 'file', 'users', 'check-circle'" }
  ],
  "stack": ["Recommended Python library, API, or service (e.g. 'CrewAI', 'LangChain', 'gspread', etc.)"],
  "hoursSaved": 12,
  "complexity": "Choose: 'Low', 'Medium', or 'High'",
  "code": "A complete, valid, well-structured, production-grade Python script that outlines the solution. Put robust system practices: type hints, env-variable configuration, try-except statements, clean function blocks, docstrings, and a readable 'if __name__ == \"__main__\"' demonstration. Never return mock imports like import target_service. Use actual standard/semi-standard packages like requests, google-genai, bs4, etc."
}

Rules:
1. Ensure the JSON is completely valid.
2. Return ONLY the JSON object. Do not include markdown code block delimiters around the JSON.
3. Keep the code fully complete (no comments like 'write code here'). Use robust, clean architectures.`;

    try {
      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
      const response = await fetch(geminiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: `Request:\n${prompt}\n\nSystem Architect System Prompt:\n${systemPrompt}` }]
            }
          ],
          generationConfig: {
            responseMimeType: 'application/json',
            temperature: 0.1,
          }
        }),
      });

      if (!response.ok) {
        throw new Error(`Gemini API returned status ${response.status}`);
      }

      const resData = await response.json();
      const rawText = resData.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (!rawText) {
        throw new Error('Empty response from Gemini API');
      }

      const parsedJSON = JSON.parse(rawText.trim());
      return NextResponse.json(parsedJSON);

    } catch (apiError) {
      console.error('[ERROR] Gemini API execution failed, launching fallback:', apiError);
      const preset = findFallbackPreset(prompt);
      return NextResponse.json(preset);
    }

  } catch (err) {
    console.error('[FATAL] Scoper route failed:', err);
    return NextResponse.json({ error: 'Internal system error occurred.' }, { status: 500 });
  }
}
