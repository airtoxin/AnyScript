chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({
    url: "popup.html"
  });
});

let i = 0;
setInterval(() => {
  i++;
  chrome.storage.sync.set({
    scripts: `i=${i}`,
  });
}, 1000);
