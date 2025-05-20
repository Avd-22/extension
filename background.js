chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set(["geminiApiKey"], (result) => {
    console.log('result', result)
    if (!result.geminiApiKey) {
      console.log("gemini api key saved");
      chrome.tabs.create({ url: "options.html" });
    }
  });
});
