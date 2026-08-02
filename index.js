const gayButtons = document.querySelectorAll(".gayButton")

gayButtons.forEach(element => {
    element.addEventListener("mouseenter", ()=>{element.style.backgroundColor = "rgb(45, 45, 45)"; element.style.cursor = "pointer"});
    element.addEventListener("mouseleave", ()=>{element.style.backgroundColor = "rgb(27, 27, 27)"; element.style.cursor = "arrow"});
});

const transButtons = document.querySelectorAll(".transButton")

transButtons.forEach(element => {
    element.addEventListener("mouseenter", ()=>{element.style.backgroundColor = "rgb(35, 35, 35)"; element.style.cursor = "pointer"});
    element.addEventListener("mouseleave", ()=>{element.style.backgroundColor = "rgb(27, 27, 27)"; element.style.cursor = "arrow"});
});


const shareClose = document.getElementById("shareClose")
    shareClose.addEventListener("mouseenter", ()=>{shareClose.style.backgroundColor = "rgb(220, 230, 245)"; shareClose.style.cursor = "pointer"});
    shareClose.addEventListener("mouseleave", ()=>{shareClose.style.backgroundColor = "aliceblue"; shareClose.style.cursor = "arrow"});


const popup = document.getElementById("popup")
let shareOpened = false;

function share(){
    if(!shareOpened){
        console.log("Tried opening the share");
        popup.style.display = "flex";
        shareOpened = true;
    }
    else if(shareOpened){
        console.log("Tried closing the share");
        popup.style.display = "none";
        shareOpened = false;
    }

}


const copiedAlert = document.getElementById("copiedAlert")
const copyButton = document.getElementById("copyButton") 
copyButton.addEventListener("click", () => {copiedAlert.style.display = "block"; callback()});
function callback(){
    setTimeout(()=>copiedAlert.style.display = "none", 1500)
}


const copyText = "https://bayon7x.vercel.app/"
function copyLink(){
    navigator.clipboard.writeText(copyText);
}

