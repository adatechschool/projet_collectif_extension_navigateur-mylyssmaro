let url = ""
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.get({ url }); 
  });

let images = document.querySelectorAll("img");
images.addEventListener("click", function(){
    images.src = url;
})