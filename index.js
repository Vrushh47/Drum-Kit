//Button click event
document.querySelectorAll(".drum").forEach(b=>b.addEventListener("click",HandleClick));

function HandleClick(){
playAudio(this.textContent);
buttonActivation(this.textContent);
}

//Key press event
document.addEventListener("keypress",function(event){
  playAudio(event.key);
  buttonActivation(event.key);
});


function playAudio(keyValue){
  var audioURL="";
    switch(keyValue){
        case "w":audioURL="crash.mp3";break;
        case "a":audioURL="kick-bass.mp3";break;
        case "s":audioURL="snare.mp3";break;
        case "d":audioURL="tom-1.mp3";break;
        case "j":audioURL="tom-2.mp3";break;
        case "k":audioURL="tom-3.mp3";break;
        case "l":audioURL="tom-4.mp3";break;
        default:break;
    }
     var audio = new Audio("sounds/"+audioURL);
     audio.play();

}
function buttonActivation(currentKey){
  var activeBtn=document.querySelector("."+currentKey);
  activeBtn.classList.add("pressed");
  setTimeout(function(){
    activeBtn.classList.remove("pressed");
  },100);
}
