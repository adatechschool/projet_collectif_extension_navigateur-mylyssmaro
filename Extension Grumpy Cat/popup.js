
chrome.storage.sync.get("url", ({ url }) => {
  document.getElementById("example").style.backgroundImage = "url(" + url + ")";
})



async function changeImage () {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const images = document.getElementsByTagName('img');
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: changeImage,
  });
};


function changeImage(url) {
  chrome.storage.sync.get("url", ({ url }) => {
  for (image of images) {
    image.setAttribute("data-srcset", url);
    image.setAttribute("src", url);
    image.setAttribute("srcset", url);
  }
  });
}