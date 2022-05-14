const images=[
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg"]

const image=images[Math.floor(Math.random()*images.length)];
const quoteDiv=document.querySelector("#quote");
const a=document.createElement("img");
a.setAttribute('src',image); //추가
a.classList.add("background");
loginForm.after(a);