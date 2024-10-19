


//Variables
let home = document.getElementById("container");
let btn = document.createElement("button");
let navBar = document.createElement("nav");
let ul  = document.createElement("ul");
let list = document.createElement("li");


//Nav 
home.append(navBar);
navBar.style.backgroundColor = "red";
navBar.style.height = "40px";


//List



//button
home.append(btn);
btn.addEventListener("click", (e) => {
    console.log(e);
})

//backgroundImage
