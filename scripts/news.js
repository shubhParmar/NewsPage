// Ude Import export (MANDATORY)
import navbar from "../components/navbar.js"
document.querySelector("#navbar").innerHTML = navbar();

let getNews = JSON.parse(localStorage.getItem("news"));
console.log(getNews)
let box = document.createElement("div");
let name  = document.createElement("h3")  ; 
let des  = document.createElement("p")  ; 
let  content  = document.createElement("p")  ; 
let img  = document.createElement("img")  ;  
img.src = getNews.urlToImage;
name.innerText = `Title : ${getNews.title}`;
des.innerText = `Descrition : ${getNews.description}`;
content.innerText = `Content : ${getNews.content}`;
box.append(img,name,content,des);
document.getElementById("detailed_news").append(box)