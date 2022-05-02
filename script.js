let formulaire = document.getElementById("form"); 

formulaire.addEventListener("submit", function() {
    let url = document.getElementById("inputuser").value; 
    document.getElementById('image').setAttribute("src", url);
    // console.log(url); 
    // let photo = document.querySelectorAll('img'); 
    // console.log(photo)
    // photo.src = url; 
    // console.log(photo.src); 
}) 

