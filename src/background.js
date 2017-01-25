const execScript = ({ type, value }) => {
  switch (type) {
    case 'code': {
      chrome.tabs.executeScript({ code: value });
      break;
    }
    case 'url': {
      chrome.tabs.executeScript({ code: `
        (function() {
          const script = document.createElement('script');
          script.src = '${value}';
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

chrome.runtime.onMessage.addListener(({ pageOpened, url }) => {
  if (!pageOpened) return;

  chrome.storage.sync.get('state', ({ state }) => {
    if (!state) return;

    state.scripts.forEach(script => {
      if (new RegExp(script.regexp).test(url)) execScript(script);
    });
  });
})
