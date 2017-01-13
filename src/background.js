const execScript = ({ type, url, code }) => {
  switch (type) {
    case 'code': {
      chrome.tabs.executeScript({ code });
      break;
    }
    case 'url': {
      chrome.tabs.executeScript({ code: `
        (function() {
          const script = document.createElement('script');
          script.src = '${url}';
          document.body.appendChild(script);
        })();`
      });
      break;
    }
  }
};

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({
    url: "popup.html"
  });
});

chrome.runtime.onMessage.addListener(({ pageOpened }) => {
  if (!pageOpened) return;

  chrome.storage.sync.get('state', ({ state }) => {
    if (!state) return;

    state.scripts.forEach(execScript);
  });
})
