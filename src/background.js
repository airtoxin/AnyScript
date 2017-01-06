chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({
    url: "popup.html"
  });
});

let i = 0;
setInterval(() => {
  i++;
  // chrome.storage.sync.set({
  //   scripts: `i=${i}`,
  // });
}, 1000);

chrome.runtime.onMessage.addListener(({ pageOpened }) => {
  if (!pageOpened) return;

  chrome.tabs.executeScript({
    code: `console.log('current i=${i}');`
  });
})
