let url = "https://how-do-it.com/wp-content/uploads/2018/03/Grumpy-Cat-9.jpg";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ url });
  console.log(`the url is ${url}`);
});




// chrome.action.onClicked.addListener(async (tab) => {
//   chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       files: ['content.js']
//   });
// });