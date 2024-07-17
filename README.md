# D365FSCM Language Switcher

D365FSCM Language Switcher is a Chrome extension that allows you to quickly toggle the `&lng=en-us` parameter on any `dynamics.com` URL.

This can also be found in the Chrome Web Store 
https://chromewebstore.google.com/detail/d365fscm-language-switche/jkjdgbickbgfkfnoblbgaaonmkililob

## Features

- Automatically sets the extension icon based on the presence of the `&lng=en-us` parameter in the URL.
- Allows toggling of the `&lng=en-us` parameter by clicking the extension icon.
- Supports all `dynamics.com` subdomains.

## Installation

1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the directory where you cloned/downloaded this repository.

## Usage

1. Navigate to any `dynamics.com` website.
2. Click the extension icon to toggle the `&lng=en-us` parameter in the URL.
3. The icon will change based on the presence of the `&lng=en-us` parameter:
    - Default icon (`default.png`) if the parameter is present.
    - American flag icon (`american_flag.png`) if the parameter is not present.
    - Greyed-out icon (`default_grey.png`) if not on a `dynamics.com` website.