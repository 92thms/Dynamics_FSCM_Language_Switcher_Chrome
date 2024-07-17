function setIconBasedOnURL(tabId, url) {
    if (url.includes(".dynamics.com")) {
        if (url.includes("&lng=en-us")) {
            chrome.action.setIcon({
                path: "icons/default.png",
                tabId: tabId
            });
        } else {
            chrome.action.setIcon({
                path: "icons/american_flag.png",
                tabId: tabId
            });
        }
    } else {
        chrome.action.setIcon({
            path: "icons/default_grey.png",
                tabId: tabId
            });
        }
    }

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
        setIconBasedOnURL(tabId, tab.url);
    }
});

chrome.action.onClicked.addListener((tab) => {
    if (tab.url.includes(".dynamics.com")) {
        if (tab.url.includes("&lng=en-us")) {
            let newUrl = tab.url.replace("&lng=en-us", "");
            chrome.tabs.update(tab.id, { url: newUrl }, () => {
                setIconBasedOnURL(tab.id, newUrl);
            });
        } else {
            let newUrl = tab.url + "&lng=en-us";
            chrome.tabs.update(tab.id, { url: newUrl }, () => {
                setIconBasedOnURL(tab.id, newUrl);
            });
        }
    }
});
