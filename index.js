//Variables
let home = document.getElementById("container");
let btn = document.createElement("button");
let navBar = document.createElement("nav");
let headLine = document.createElement("h1");
let form = document.createElement("form");



//Nav 
navBar.style.backgroundColor = "lightgrey";
navBar.style.height = "60px";
navBar.style.width = "100%"
navBar.style.top = 0;
navBar.style.position = "absolute"
home.append(navBar);

//Button
btn.textContent = "Click for our new updates!"
btn.addEventListener("click", (e) => {
window.alert("Get retro collection of video games..including Resident Evil 2, NBA Live 98 and Gran Turismo");})
document.body.append(btn);


//header 
headLine.innerText = "Retro Games"
headLine.style.height = "100px"
home.append(headLine);


//List
let links = [
    {text: "home", href:"/home"},
    {text: "about", href: "/about"},
    {text: "faq", href: "/faq"}
]; 



