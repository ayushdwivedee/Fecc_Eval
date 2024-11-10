let fetchedPosts = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => myData(data));
};
fetchedPosts();


let mainDiv = document.getElementById("main");
let myData = (data) => {

data.map((el)=>{
    let div=document.createElement("div")
    let id = document.createElement("p")
id.innerText = `ID:- ${el.id}`
id.style.fontSize="24px"
let h2 = document.createElement("p");
h2.innerHTML = `Title:- ${el.title}`;
h2.style.color="red"
let para = document.createElement("p");
para.innerHTML = `para:- ${el.body}`;
div.append(id, h2, para);
mainDiv.append(div)
 
 
})
  
  
  
  
  
  

  
};
