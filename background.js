chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        "id": "searchTopPreise",
        "title": "Search on Toppreise.ch",
        "contexts": ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "searchTopPreise" && info.selectionText) {
        const query = encodeURIComponent(info.selectionText);
        const url = `https://www.toppreise.ch/produktsuche?q=${query}`;
        chrome.tabs.create({ url: url });
    }
});
