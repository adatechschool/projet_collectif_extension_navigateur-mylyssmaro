let btn = document.getElementById("thebutton"); 

btn.addEventListener("click", function() {
    let url = document.getElementById("inputuser").value; 
    chrome.storage.sync.set({ url }) 
}) 



