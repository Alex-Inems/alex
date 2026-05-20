#!/usr/bin/env python3
"""
Unit Tests for AI Workflow Builder CLI
Author: Alex Thompson

Verifies configuration loading, fallback heuristics, error pathways, 
and local file generation outputs using the Python standard 'unittest' package.
"""

import os
import unittest
import tempfile
from unittest.mock import patch, mock_open
from ai_workflow_builder import (
    load_environment_file,
    generate_local_fallback,
    ConfigurationError,
    get_gemini_api_key
)


class TestAIWorkflowBuilder(unittest.TestCase):

    def setUp(self):
        # Store original environment variables
        self.original_env = dict(os.environ)

    def tearDown(self):
        # Restore environment variables to prevent test cross-contamination
        os.environ.clear()
        os.environ.update(self.original_env)

    def test_load_environment_file_parses_valid_keys(self):
        """Verifies that Next.js environment configurations are read and synchronized successfully."""
        mock_file_content = (
            "# This is a comment\n"
            "GEMINI_API_KEY=test_api_key_123\n"
            "ANOTHER_SECRET='wrapped_secret_value'\n"
            "SPACED_SECRET = padded_value \n"
        )
        
        with patch("builtins.open", mock_open(read_data=mock_file_content)):
            with patch("os.path.exists", return_value=True):
                load_environment_file(".env.local")
                
                self.assertEqual(os.environ.get("GEMINI_API_KEY"), "test_api_key_123")
                self.assertEqual(os.environ.get("ANOTHER_SECRET"), "wrapped_secret_value")
                self.assertEqual(os.environ.get("SPACED_SECRET"), "padded_value")

    def test_get_gemini_api_key_retrieves_active_key(self):
        """Checks that active keys in os.environ are retrieved with highest priority."""
        os.environ["GEMINI_API_KEY"] = "active_session_token"
        
        retrieved_key = get_gemini_api_key()
        self.assertEqual(retrieved_key, "active_session_token")

    def test_get_gemini_api_key_raises_error_when_missing(self):
        """Verifies that an appropriate ConfigurationError is raised if no key is configured."""
        if "GEMINI_API_KEY" in os.environ:
            del os.environ["GEMINI_API_KEY"]
            
        with patch("os.path.exists", return_value=False):
            with self.assertRaises(ConfigurationError):
                get_gemini_api_key()

    def test_generate_local_fallback_outputs_structured_blueprint(self):
        """Verifies that local mock generation outputs a dictionary with all mandatory project keys."""
        sample_prompt = "Trigger automated report compilation weekly"
        result = generate_local_fallback(sample_prompt)
        
        # Verify schema integrity
        self.assertIn("title", result)
        self.assertIn("libraries", result)
        self.assertIn("description", result)
        self.assertIn("code", result)
        
        # Verify content relevance
        self.assertTrue(len(result["libraries"]) > 0)
        self.assertIn("CustomPipeline", result["code"])


if __name__ == "__main__":
    unittest.main()
