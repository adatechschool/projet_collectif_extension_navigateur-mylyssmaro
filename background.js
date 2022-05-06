// let url = "https://how-do-it.com/wp-content/uploads/2018/03/Grumpy-Cat-9.jpg";

//tentative 1

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ url });
//   console.log(`the url is ${url}`);
// });

console.log("background running");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked() {
  console.log("button clicked");
}


