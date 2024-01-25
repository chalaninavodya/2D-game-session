var boy = document.getElementById("boy");
IdleImageNumber = 1;
idleAnimationNumber = 0;
function IdleAnimation(){

    IdleImageNumber = IdleImageNumber + 1;

    if(IdleImageNumber == 11){
        IdleImageNumber = 1;
    }
    boy.src = "resources/idle ("+IdleImageNumber+").png";
}
function IdleAnimationStart(){

        IdleAnimationNumber = setInterval(IdleAnimation, 200);
}
runImageNumber = 1;
runAnimationNumber = 0;

function runAnimation(){
    runImageNumber = runImageNumber + 1;

    if(runImageNumber == 11){
        runImageNumber = 1;
    }
    boy.src = "resources/run ("+runImageNumber+").png";
}
function runAnimationStart(){

    runAnimationNumber = setInterval(runAnimation, 100);
    clearInterval(IdleAnimationNumber);
}
JumpImageNumber = 1;
JumpAnimationNumber = 0;
boyMarginTop = 347;


function JumpAnimation(){
    JumpImageNumber = JumpImageNumber + 1;

    if(JumpImageNumber <= 6){
        boyMarginTop = boyMarginTop - 35;
        boy.style.marginTop = boyMarginTop + "px";
    }
    if(JumpImageNumber >= 7){
        boyMarginTop = boyMarginTop + 35;
        boy.style.marginTop = boyMarginTop + "px";
    }


    if(JumpImageNumber == 11){
        JumpImageNumber = 1;
        clearInterval(JumpAnimationNumber);
        JumpAnimationNumber = 0;
        runImageNumber = 0;
        runAnimationStart();
    }
    boy.src = "resources/Jump ("+JumpImageNumber+").png";
}
function JumpAnimationStart(){
    clearInterval(IdleAnimationNumber);
    runImageNumber = 0;
    clearInterval(runAnimationNumber);
    JumpAnimationNumber = setInterval(JumpAnimation, 100);
}

function KeyCheck(event){
    //alert(event.which);
    //enter=13;
    //space =32;

    var keyCode = event.which;
    if(keyCode==13){
        if(runAnimationNumber==0){
            runAnimationStart();
        }
            if(moveBackgroundAnimationId==0){
                moveBackgroundAnimationId = setInterval(moveBackground, 100);
            }
            if(boxAnimationId==0){
                boxAnimationId = setInterval(boxAnimation, 100);
            }
        }
        
    


if(keyCode==32){
    if(JumpAnimationNumber==0){
        JumpAnimationStart();
    }
        if(moveBackgroundAnimationId==0){
            moveBackgroundAnimationId = setInterval(moveBackground, 100);
        }
        if(boxAnimationId==0){
            boxAnimationId = setInterval(boxAnimation, 100);
        }
    }
   } 

var backgroundImagePositionX = 0;
var moveBackgroundAnimationId = 0;
var score = 0;
function moveBackground(){
    backgroundImagePositionX = backgroundImagePositionX - 20;
    document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX +"px";
    score = score + 1;
    document.getElementById("score").innerHTML = score;
}

boxMarginLeft = 1540;

function createBoxes(){
    for(var i = 0; i <= 10; i++){

    var box = document.createElement("div");
    box.className = "box";
    document.getElementById("background").appendChild(box);
    box.style.marginLeft = boxMarginLeft + "px";
    box.id = "box" + i;

    //boxMarginLeft = boxMarginLeft+1000;
    if(i<5){
        boxMarginLeft = boxMarginLeft + 2000;
    }
    if(i>=5){
        boxMarginLeft = boxMarginLeft + 1000;
    }
    }
}
var boxAnimationId = 0;
function boxAnimation(){
    for(var i= 0; i < 10; i++){
    var box = document.getElementById("box"+i);
    var currentMarginLeft = getComputedStyle(box).marginLeft;
    var newMarginLeft = parseInt(currentMarginLeft)-35;
    box.style.marginLeft = newMarginLeft + "px";

    if(newMarginLeft >=-110 & newMarginLeft<=100){
        if(boyMarginTop > 300){
            clearInterval(boxAnimationId);
            clearInterval(runAnimationNumber);
            runAnimationNumber = -1;
            clearInterval(JumpAnimationNumber);
            JumpAnimationNumber = -1;
            clearInterval(moveBackgroundAnimationId);
            moveBackgroundAnimationId = -1;

            deadAnimationNumber = setInterval(boyDeadAnimation, 100);
        }
    }
}
}

deadImageNumber = 1;
deadAnimationNumber = 0;
function boyDeadAnimation(){
    deadImageNumber = deadImageNumber +1;

    if(deadImageNumber==11){
        deadImageNumber = 10;

        document.getElementById("end").style.visibility = "visible";
        document.getElementById("endscore").innerHTML = score;
    }

    boy.src = "Resources/Dead ("+ deadImageNumber +").png";
}
function reload(){
    location.reload();
}