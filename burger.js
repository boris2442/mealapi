const navigation=document.querySelector("header ul")
const menu=document.querySelector(".fa-bars");
menu.addEventListener("click",()=>{
navigation.classList.toggle("translate")
})

window.addEventListener("scroll", ()=>{
    navigation.classList.remove("translate")
})

