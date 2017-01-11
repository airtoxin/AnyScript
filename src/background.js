chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({
    url: "popup.html"
  });
});

chrome.runtime.onMessage.addListener(({ pageOpened }) => {
  if (!pageOpened) return;

  chrome.storage.sync.get('state', ({ state }) => {
    if (!state) return;

    state.script.scripts.forEach(script => {
      chrome.tabs.executeScript({
        code: script.code,
      });
    });
  });
})
