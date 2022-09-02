var numOfkeys= document.querySelectorAll(".drum").length;

// when press from the screen
for(var i=0; i<numOfkeys; i++){
    document.querySelectorAll(".drum")[i].addEventListener('click', function () {
        var buttonInnerHTML = this.innerHTML;
        handleClick(buttonInnerHTML);

        //calling the animation function
        buttonAnimation(buttonInnerHTML)
    });
    
}

// When press from the keyboard
document.addEventListener("keypress", function(event) {
    handleClick(event.key);

    //Calling the animation function
    buttonAnimation(event.key);
})

// to play the sound of every key
function handleClick(buttonClick) {
    switch (buttonClick) {
        case "w":
            const tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            const tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            const tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            const tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            const snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            const crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            const kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            alert("No sound attach to key");
            break;
    }
}

// for animation when button is been pressed
function buttonAnimation(currentKey) {
    var animationBtn = document.querySelector("."+currentKey);
    animationBtn.classList.add("pressed");

    setTimeout(() => {
        animationBtn.classList.remove("pressed");
    }, 100);
}