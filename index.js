document.querySelector("button.w.drum").addEventListener("click",handleclick);
document.querySelector("button.a.drum").addEventListener("click",handleclick);
document.querySelector("button.s.drum").addEventListener("click",handleclick);
document.querySelector("button.d.drum").addEventListener("click",handleclick);
document.querySelector("button.j.drum").addEventListener("click",handleclick);
document.querySelector("button.k.drum").addEventListener("click",handleclick);
document.querySelector("button.l.drum").addEventListener("click",handleclick);
function handleclick(){
    var buttonInnerHTML=this.innerHTML;
    makesound(buttonInnerHTML);
    buttonanimation(buttonInnerHTML);
}

document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonanimation(event.key);
});

function makesound(key){
    switch(key){
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
        break;

        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case "l":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;

        default: console.log(buttonInnerHTML); 

    }
}
function buttonanimation(currentkey){
    var activebutton=document.querySelector("."+currentkey);
    activebutton.classList.add("pressed");

    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100);

}