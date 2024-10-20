//Variables
let home = document.getElementById("container");
let btn = document.createElement("button");
let navBar = document.createElement("nav");
let headLine = document.createElement("h1");
let form = document.createElement("form");
let img = document.createElement("img");
let btn2 = document.createElement("button");



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

// btn2.textContent = "Click if you dare!"
// btn2.addEventListener("click", (e) => {
//     img.src = "https://64.media.tumblr.com/3d2871969f176e433a983630ef35e1cb/tumblr_pxfvcvGctk1tdkro1o2_540.gif"
// });
// document.body.append(btn2);

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

//img 
img.src = "https://media.tenor.com/CI2R7ANbcT4AAAAM/playing-video-games.gif";
document.body.append(img);


//form 

