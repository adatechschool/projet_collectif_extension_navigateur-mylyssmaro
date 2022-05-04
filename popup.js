let btn = document.getElementById("thebutton");

chrome.storage.sync.get("url", ({ url }) => {
    let image = document.getElementById('image');
    image.setAttribute("src", url);
})

btn.addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tabId, allFrames: true },
        function: injectURL,
    });
})

async function injectURL() {
    chrome.storage.sync.get("url", ({ url }) => {
        url = document.getElementById("inputuser").value;
        console.log(url);
        document.getElementByTag('img').setAttribute("src", url);
    });
}
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
