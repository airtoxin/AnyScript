chrome.storage.sync.get('scripts', ({ scripts }) => {
  console.log("@scripts", scripts);
});
