const button = document.querySelector("button");
const body = document.body;
const currentColor = document.querySelector(".current-color");
console.log(currentColor)
function randomGernerator(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const gerneratColor = `rgb(${red},${green},${blue})`;
    return gerneratColor;
}
button.addEventListener("click",()=>{
    const randomNumber= randomGernerator();
    body.style.backgroundColor = randomNumber;
    currentColor.textContent = randomNumber;
    // console.log(randomNumber)
})

// button.addEventListener("click",function(){
//     console.log("you click me");
// })