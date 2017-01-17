chrome.runtime.sendMessage({
  pageOpened: true,
  url: window.location.href,
});
