chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          //leetcode
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostContains: 'leetcode.com', pathContains: '/problems/' },
          }),
        ],
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});
