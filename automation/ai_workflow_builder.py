#!/usr/bin/env python3
"""
AI Workflow Builder - Developer CLI Utility
Author: Alex Thompson (AI Automation Architect)

This utility takes a business automation description and leverages the Gemini API to 
generate modular, production-ready Python automation scripts. It is structured with 
robust logging, exception handling, strict typing, and zero external dependencies.
"""

import os
import sys
import json
import logging
import argparse
from typing import Dict, Any, List, Optional
from urllib.request import Request, urlopen
from urllib.error import URLError, HTTPError

# Set up clean structured logger
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.StreamHandler(sys.stdout)
    ]
)
logger = logging.getLogger("AIWorkflowBuilder")


class ConfigurationError(Exception):
    """Raised when environment variables or parameters are misconfigured."""
    pass


class APIConnectionError(Exception):
    """Raised when communication with external LLM API fails."""
    pass


def load_environment_file(filepath: str) -> None:
    """
    Parses Next.js standard environment files (.env or .env.local) 
    and loads key-value pairs into os.environ.
    """
    if not os.path.exists(filepath):
        return
    
    logger.info(f"Synchronizing configuration from environment file: {filepath}")
    with open(filepath, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            if "=" in line:
                key, val = line.split("=", 1)
                # Strip spaces and optional wrapping quotes
                key = key.strip()
                val = val.strip().strip("'\"")
                os.environ[key] = val


def get_gemini_api_key() -> str:
    """
    Retrieves the Gemini API Key from active environment variables or Next.js configurations.
    """
    # Check current env
    api_key = os.environ.get("GEMINI_API_KEY")
    if api_key:
        return api_key

    # Try loading from common Next.js environment files
    workspace_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    env_paths = [
        os.path.join(workspace_root, ".env.local"),
        os.path.join(workspace_root, ".env"),
    ]
    
    for path in env_paths:
        load_environment_file(path)
        api_key = os.environ.get("GEMINI_API_KEY")
        if api_key:
            return api_key

    raise ConfigurationError(
        "GEMINI_API_KEY not found in active variables, .env, or .env.local.\n"
        "Please specify your key in the environment or create a local environment file."
    )


def query_gemini_llm(prompt: str, api_key: str) -> Dict[str, Any]:
    """
    Queries Gemini API using Python standard library's urllib for zero-dependency execution.
    Sends structured scoping guidelines and parses the JSON response.
    """
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={api_key}"
    
    system_instructions = (
        "You are 'Alex's AI Automation CLI', an elite systems architect. "
        "Your task is to analyze the requested automation and construct a complete modular Python solution. "
        "Return a strictly valid JSON response with the following keys:\n"
        "- 'title': A professional project name\n"
        "- 'libraries': A list of standard or third-party libraries needed\n"
        "- 'description': Short summary of the system pipeline\n"
        "- 'code': The complete, valid Python script implementing the logic. "
        "Ensure the script has structured logging, type hints, proper exception handling, "
        "and a fully functional demo flow in 'if __name__ == \"__main__\"'.\n"
        "Do not wrap your output in markdown JSON quotes. Return ONLY the raw JSON string."
    )

    payload = {
        "contents": [
            {
                "role": "user",
                "parts": [{"text": f"Prompt: {prompt}\n\nGuidelines:\n{system_instructions}"}]
            }
        ],
        "generationConfig": {
            "responseMimeType": "application/json",
            "temperature": 0.15
        }
    }

    req_data = json.dumps(payload).encode("utf-8")
    req = Request(
        url,
        data=req_data,
        headers={"Content-Type": "application/json"},
        method="POST"
    )

    logger.info("Connecting securely to Gemini API...")
    try:
        with urlopen(req, timeout=30) as response:
            res_body = response.read().decode("utf-8")
            res_json = json.loads(res_body)
            
            raw_text = res_json["candidates"][0]["content"]["parts"][0]["text"]
            return json.loads(raw_text.strip())

    except HTTPError as e:
        error_msg = e.read().decode("utf-8")
        logger.error(f"API Error Response: {error_msg}")
        raise APIConnectionError(f"Gemini API returned status code {e.code}: {e.reason}")
    except URLError as e:
        raise APIConnectionError(f"Failed to reach Gemini API endpoint: {e.reason}")
    except json.JSONDecodeError as e:
        raise APIConnectionError(f"Response failed to parse as valid JSON structure: {e}")
    except Exception as e:
        raise APIConnectionError(f"Unexpected connection failure: {e}")


def write_boilerplate_script(filepath: str, code: str) -> None:
    """
    Saves the generated python script securely to the local file system.
    """
    logger.info(f"Writing generated workflow code block to {filepath}...")
    try:
        # Create parent directories if they don't exist
        os.makedirs(os.path.dirname(os.path.abspath(filepath)), exist_ok=True)
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(code)
        logger.info("[SUCCESS] Pipeline file constructed successfully.")
    except IOError as e:
        logger.error(f"Failed to save file: {e}")
        sys.exit(1)


def generate_local_fallback(prompt: str) -> Dict[str, Any]:
    """
    Generates a high-quality local fallback project outline if API access is disabled.
    """
    logger.warning("Using local heuristic fallback builder to construct script...")
    return {
        "title": "Local Automated Integration Service",
        "libraries": ["requests", "json", "logging", "os"],
        "description": f"Custom pipeline developed from blueprint: {prompt}",
        "code": f'# Production-Ready Custom Blueprint\\n# Generated for: {prompt}\\n\\n'
                'import os\\nimport sys\\nimport logging\\nfrom typing import Dict, Any\\n\\n'
                'logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")\\n'
                'logger = logging.getLogger("CustomPipeline")\\n\\n'
                'def run_pipeline() -> Dict[str, Any]:\\n'
                '    logger.info("Initializing custom scoped automation sequence...")\\n'
                '    # Secure configuration\\n'
                '    api_token = os.getenv("INTEGRATION_API_TOKEN", "default_placeholder")\\n'
                '    logger.info("Synchronizing data pipelines with third-party endpoints...")\\n'
                '    return {"status": "success", "processed_records": 12}\\n\\n'
                'if __name__ == "__main__":\\n'
                '    logger.info("Executing pipeline demonstration...")\\n'
                '    res = run_pipeline()\\n'
                '    logger.info(f"Execution complete: {res}")\\n'
    }


def main() -> None:
    """Main operational entrypoint."""
    parser = argparse.ArgumentParser(
        description="Alex Thompson's AI Automation Builder CLI",
        formatter_class=argparse.RawDescriptionHelpFormatter
    )
    parser.add_argument(
        "requirement",
        type=str,
        help="Textual description of the automation task (e.g. 'Scrape product prices to Google Sheets')"
    )
    parser.add_argument(
        "-o", "--output",
        type=str,
        default="scoped_automation.py",
        help="Destination path for generated pipeline script (default: scoped_automation.py)"
    )
    parser.add_argument(
        "--local",
        action="store_true",
        help="Skip LLM call and generate local heuristics-based boilerplate skeleton"
    )

    args = parser.parse_args()

    logger.info("=" * 60)
    logger.info("  ALEX THOMPSON - AI AUTOMATION & PYTHON DEVELOPER WORKBENCH")
    logger.info("=" * 60)

    try:
        if args.local:
            project_data = generate_local_fallback(args.requirement)
        else:
            try:
                api_key = get_gemini_api_key()
                project_data = query_gemini_llm(args.requirement, api_key)
            except (ConfigurationError, APIConnectionError) as api_err:
                logger.warning(f"AI API Connection failed: {api_err}")
                logger.warning("Launching local blueprint generator fallback...")
                project_data = generate_local_fallback(args.requirement)

        # Print structured metrics
        print("\n" + "-" * 50)
        print(f"Project Title: {project_data.get('title')}")
        print(f"Description:   {project_data.get('description')}")
        print(f"Tech Stack:    {', '.join(project_data.get('libraries', []))}")
        print("-" * 50 + "\n")

        # Write script
        code_content = project_data.get("code", "")
        # Correct escaped characters if parsing raw JSON issues
        code_content = code_content.replace("\\n", "\n").replace("\\t", "\t")
        
        write_boilerplate_script(args.output, code_content)
        
        logger.info(f"[SUCCESS] Complete details stored inside: {args.output}")
        logger.info("Run `python " + args.output + "` to execute the mock demonstration.")
        
    except Exception as err:
        logger.fatal(f"Automation scoper failed: {err}")
        sys.exit(1)


if __name__ == "__main__":
    main()
