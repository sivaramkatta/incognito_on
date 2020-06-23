chrome.browserAction.onClicked.addListener(sendfunc);
function sendfunc(tab) {
  chrome.windows.create({ url: tab.url, incognito: true });
}
