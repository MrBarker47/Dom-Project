//Variables
let home = document.getElementById("container");
let btn = document.createElement("button");
let navBar = document.createElement("nav");
let headLine = document.createElement("h1");
let img = document.createElement("img");
let btn2 = document.createElement("button");
let button = btn2.classList;
let footer = document.createElement("footer");
let form = document.getElementById("newForm");
let userName = document.getElementById("input1");
let paragraph = document.createElement("p");
let newParagraph = document.querySelector("input");

//Nav 
navBar.style.backgroundColor = "black";
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

btn2.textContent = "Click if you dare!"
btn2.addEventListener("click", (e) => {
 window.alert("This was suppose to be a gif of Resident Evil 2, but it wasn't working");
});
document.body.append(btn2);
button.add("newButton");

//header 
headLine.innerText = "Welcome To Retro Games"
headLine.style.height = "100px"
home.append(headLine);


//List
let newNav = [
    {text: "Home", href:"/home"},
    {text: "About", href: "/about"},
    {text: "Contact", href: "/Contact"}
]; 


newNav.forEach((link) => {
    let items = document.createElement("a");
    items.setAttribute("href" , "newNav");
    items.textContent = link.text;
    navBar.append(items);

})

// img
img.src = "https://64.media.tumblr.com/3d2871969f176e433a983630ef35e1cb/tumblr_pxfvcvGctk1tdkro1o2_540.gif"
img.style.height = "120px"
img.style.marginLeft = "720px"
document.body.appendChild(img);


//form 
form.addEventListener("click", (e) =>{
  let message = [];
  if(userName.value === '' || name.value == null) {
    
  }
})

//Paragraph
paragraph.textContent = "A website, for gamers. "
paragraph.style.color = "white";
paragraph.style.backgroundColor = "blue";
paragraph.style.width = "120px"
paragraph.style.height = "40px"
home.append(paragraph);
newParagraph.style.backgroundColor = "grey";



//footer }
footer.style.backgroundColor = "black";
footer.style.height = "40px"
footer.style.marginTop = "120px"
document.body.append(footer);