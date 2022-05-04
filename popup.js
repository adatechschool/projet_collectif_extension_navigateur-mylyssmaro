let btn = document.getElementById("thebutton");

btn.addEventListener('click', () => {
    let url = document.getElementById("inputuser").value;
    document.getElementById('image').setAttribute("src", url);
})

// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

// When the button is clicked, inject setPageBackgroundColor into current page
// btn.addEventListener("submit", async () => {
//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//     let url = document.getElementById("inputuser").value;
//     chrome.storage.sync.set({ url })

//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         function: changeImageWithInput,
//     });
// });

// // The body of this function will be executed as a content script inside the
// // current page
// function changeImageWithInput() {
//     chrome.storage.sync.get("url", ({ url }) => {
//         let images = document.querySelectorAll('img');
//         images.src = url;
//     });
// }