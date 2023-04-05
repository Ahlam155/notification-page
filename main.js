let marks = document.querySelector("h3");
let notifications = document.getElementsByClassName("notification");
let small = document.querySelectorAll("small");
let num = document.getElementById("num");

marks.addEventListener("click",()=>{
    [...notifications].map((notification)=>notification.classList.remove("active"));
    [...small].map((e)=>e.style.display="none");
    num.innerHTML=0
})



