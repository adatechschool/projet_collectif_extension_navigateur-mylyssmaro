//Solution OK !!!!
// const bouton = document.getElementById('button_image');
// chrome.storage.sync.get("url", ({ url }) => {
//   bouton.style.backgroundImage = "url(" + url + ")";
// })

// const submit_button = document.querySelector('#submit_button');

// submit_button.addEventListener('click', () => {
//   let url_input = document.getElementById('url_input').value;
//   bouton.style.backgroundImage = "url(" + url_input + ")";
//   console.log(url_input);
// })

// bouton.addEventListener('click', () => {
//   console.log("Bouton 2")
// })




const bouton = document.getElementById('button_image');
chrome.storage.sync.get("url", ({ url }) => {
  bouton.style.backgroundImage = "url(" + url + ")";
})

const submit_button = document.querySelector('#submit_button');

submit_button.addEventListener('click', () => {
  let url_input = document.getElementById('url_input').value;
  bouton.style.backgroundImage = "url(" + url_input + ")";
  console.log(url_input);
})

bouton.addEventListener('click', () => {
  console.log("Bouton 2")
})


