
const bouton = document.getElementById('example');
chrome.storage.sync.get("url", ({ url }) => {
  bouton.style.backgroundImage = "url(" + url + ")";
})


console.log(document);
console.log(window);

bouton.addEventListener('click', () => {
  console.log('click somewhere');
  const images = document.getElementsByTagName('img');
  console.log(images);
  change();
})

async function change() {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  // console.log(images);
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: changeImage,
  }).catch((error) => {
    console.log("error");
  })
};

function changeImage(url) {
  chrome.storage.sync.get("url", ({ url }) => {
    for (image in images) {
      image.setAttribute("data-srcset", url);
      image.setAttribute("src", url);
      image.setAttribute("srcset", url);
    }
  });
}
