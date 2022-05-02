// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
let Search = async (query)=>{
    try{
        if(query===0)
        {
            let url =`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`;
        let res = await fetch(url);
        let data = await res.json();
        //console.log(data.articles)
        append(data.articles)
        }
        else{
            let url =`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${query}`;
        let res = await fetch(url);
        let data = await res.json();
        //console.log(data.articles)
        append(data.articles)
        }
    }
    catch(err){
        console.log("err :",err);
    }
}
Search(0)
let append = (data)=>{
    
  document.getElementById("results").innerHTML =null;
   data.forEach((el) => {
    let box = document.createElement("div");
    let div = document.createElement("div");
    let divimg = document.createElement("div");
    box.setAttribute("class","news")
    let img = document.createElement("img");
    img.src= el.urlToImage;
   let name= document.createElement("h3")
   let des = document.createElement("p")
   name.innerText =el.title;
   des.innerText = el.description;
   divimg.append(img);
   div.append(name,des);
   box.append(divimg,div);

  document.getElementById("results").append(box)
   box.addEventListener("click",function(){
       detailedNews(el);
   })
   });

}

let detailedNews = (el)=>{
  localStorage.setItem("news", JSON.stringify(el))
  window.location.href ="news.html"
}



let searchNews = async () =>{
   try{
   let query = document.getElementById("search_input").value;
    if(query==="tesla" || query==="twitter"){
    let url = `https://masai-mock-api.herokuapp.com/news?q=${query}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.articles)
   }
  
   }
   catch(err){
       console.log("err :",err);
   }
}

let appendData = ()=>{
    document.getElementById("results").innerHTML =null;
    data.forEach((el) => {
     let box = document.createElement("div");
     let div = document.createElement("div");
     let divimg = document.createElement("div");
     box.setAttribute("class","news")
     let img = document.createElement("img");
     img.src= el.urlToImage;
    let name= document.createElement("h3")
    let des = document.createElement("p")
    name.innerText =el.title;
    des.innerText = el.description;
    divimg.append(img);
    div.append(name,des);
    box.append(divimg,div);
 
   document.getElementById("results").append(box)
   
    });
}