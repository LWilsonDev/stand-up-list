chrome.action.onClicked.addListener(tab => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['script.js'],
  });
  chrome.scripting.insertCSS(
    {
      target: { tabId: tab.id },
      files: ['main.css'],
    },
    () => {}
  );
});
