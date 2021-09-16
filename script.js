/* const ul=document.querySelector("ul");
    const liList=document.querySelectorAll("li"); 
        for(let i of liList){ 
            i.addEventListener('click',event =>{
                console.log("currenttarget");
        console.log(event.currentTarget.tagName);
        if(event.currentTarget===i){
            console.log(event.currentTarget.tagName);
            event.currentTarget.classList.toggle("checked");
        } else{
            return false;
        }
    });
        } */

        
    
      function  newElement(){
        const inputValue=document.querySelector("#myInput");
        console.log("inputValue");
        console.log(inputValue.value);
        for(let i of liList){
            if(i.textContent===inputValue.value){
                alert("Task already Exists!");
                return false;
            }
        }
if(inputValue.value.trim()===''){
    alert("Please write something!");
    return false;
  } else {
    const list = document.querySelector("ul");
    const newLi=document.createElement("li");
    console.log("adding to list");
    newLi.textContent=inputValue.value;
    list.insertBefore(newLi,list[0]);
    console.log("added to list");
    console.log(newLi.textContent);
  }
          
  document.querySelector("#myInput").value='';  
      }

// Create a "close" button and append it to each list item
const myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

//removing the item if pressed on delete button
const close=document.querySelectorAll(".close");
for(let i of close){
    i.addEventListener('click',event=>{
if(event.currentTarget===i){
    i.parentElement.style.display="none";
}
    })
}