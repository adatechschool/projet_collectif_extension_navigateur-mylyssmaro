
const bouton = document.getElementById('button_image');
chrome.storage.sync.get("url", ({ url }) => {
  bouton.style.backgroundImage = "url(" + url + ")";
})

const submit_button = document.querySelector('#submit_button');

submit_button.addEventListener('click', () => {
  let url_input = document.getElementById('url_input').value;
  console.log(url_input);
  bouton.style.backgroundImage = "url(" + url_input + ")";
  // chrome.storage.sync.set("url", ({ url }) => {
  // })
})

// bouton.addEventListener('click', () => {
//   console.log('click somewhere');
//   chrome.scripting.executeScript({
//     files: ['change-image.js']
//   });
// })