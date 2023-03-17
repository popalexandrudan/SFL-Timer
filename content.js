chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.color === "timer_complete") {
    document.body.style.backgroundColor = "green";
    console.log("yuhuuuu");
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );
  console.log(request);
});

// recieve information from background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("from background script: " + message);
});

console.log("1111");
