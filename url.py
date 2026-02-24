#!/usr/bin/env python3
"""
Wedding Website URL Generator
Loads data from data.json and opens local + production URLs
"""

import json
import base64
import webbrowser

LOCAL_URL = "http://127.0.0.1:5500/index.html"
PROD_URL = "https://vincenthays.github.io/wedding/"

with open("data.json", "r", encoding="utf-8") as f:
    data = json.load(f)

encoded = base64.b64encode(json.dumps(data).encode("utf-8")).decode("utf-8")
webbrowser.open(f'{LOCAL_URL}?{encoded}')
webbrowser.open(f'{PROD_URL}?{encoded}')
