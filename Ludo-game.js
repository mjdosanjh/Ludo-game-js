var currPos = 0;
var step1 = 41;
var currcolor = "";
var NumOfPaw = "";
var num = 0;
var clicked = false;
var currpawn = "";
var allcolor = ["red", "blue", "green", "yellow"];
var pawnOut = {red:0,blue:0,green:0,yellow:0}
function HaveHover() {
    var count = 0;
    var toKill = "";
    for (var i = 0; i < allcolor.length; i++) {
        for (var n = 1; n <= 4; n++) {
            var firstPawn = document.getElementById(allcolor[i] + "pawn" + n);
            var secondPawn=document.getElementById(currpawn);
            if (firstPawn.style.top==secondPawn.style.top&&firstPawn.style.left==secondPawn.style.left&&currcolor!=allcolor[i]&&currPos+num<60) {
                count++;
                toKill = allcolor[i] + "pawn" + n;
                return toKill;
            }
        }
    }
    return false;
}
function Stuck() {
    var text = document.getElementById('player');
    if (onboard[currpawn] == 0||currPos+num>60) {
        if (DontHaveOtherFree()||currPos+num>60) {
            var badtext = document.getElementById('badtext');
            badtext.innerText = "Unfortunatlly you stuck";
            clicked = false;
            var dice = document.getElementById('dice');
            dice.style.backgroundImage = "url(Images/dice.gif)";
            window.setTimeout(changePlayer, 1000);
        }
    }
}
function changePlayer() {
    if (num != 6){
    var text = document.getElementById('player');
    switch (text.innerText) {
        case "red": text.innerText = text.style.color = "blue"; break;
        case "blue": text.innerText = text.style.color = "yellow"; break;
        case "yellow": text.innerText = text.style.color = "green"; break;
        case "green": text.innerText = text.style.color = "red"; break;
    }
    }
    var badtext = document.getElementById('badtext');
    badtext.innerText = "";
    var dice = document.getElementById('dice');
    dice.style.backgroundImage = "url(Images/dice.gif)";
}
var positions = {
    redpawn1: 0, redpawn2: 0, redpawn3: 0, redpawn4: 0,
    bluepawn1: 0, bluepawn2: 0, bluepawn3: 0, bluepawn4: 0,
    greenpawn1: 0, greenpawn2: 0, greenpawn3: 0, greenpawn4: 0,
    yellowpawn1: 0, yellowpawn2: 0, yellowpawn3: 0, yellowpawn4: 0
};
var onboard = {
    redpawn1: 0, redpawn2: 0, redpawn3: 0, redpawn4: 0,
    bluepawn1: 0, bluepawn2: 0, bluepawn3: 0, bluepawn4: 0,
    greenpawn1: 0, greenpawn2: 0, greenpawn3: 0, greenpawn4: 0,
    yellowpawn1: 0, yellowpawn2: 0, yellowpawn3: 0, yellowpawn4: 0
};
function DontHaveOtherFree() {
    var text = document.getElementById('player');
    for (var i = 1; i <=4; i++) {
        if (onboard[text.innerText + "pawn" + i] == 1 || positions[text.innerText + "pawn" + i]+num>=60) return false;
    }
    return true;
}
function CheckForWinner() {
    if (pawnOut[currcolor] == 4) {
        var dice = document.getElementById("dice");
        var player = document.getElementById("player");
        var uselesstext1 = document.getElementById("uselesstext1");
        var uselesstext2 = document.getElementById("uselesstext2");
        dice.innerText = "";
        dice.style.visibility = "hidden";
        uselesstext1.innerText = "";
        uselesstext2.innerText = "";
        player.innerText = "The Winner is the "+currcolor+" player";
    }
}
function stepDown() {
    var doc = document.getElementById(currcolor + "pawn"+NumOfPaw);
    var curr = Number(doc.style.top.replace(/[a-z]/g, ''));
    doc.style.top = (curr+step1)+'px';
    currPos++;
}
function stepDown1() {
    var doc = document.getElementById(currcolor + "pawn"+NumOfPaw);
    var curr = Number(doc.style.top.replace(/[a-z]/g, ''));
    doc.style.top = (curr+step1)+'px';
    currPos++;
    var doc1 = document.getElementById(currpawn);
    var curr1 = Number(doc1.style.left.replace(/[a-z]/g, ''));
    doc1.style.left = (curr1 + step1) + 'px';
    currPos++;
}
function stepUp() {
    var doc = document.getElementById(currpawn);
    var curr = Number(doc.style.top.replace(/[a-z]/g, ''));
    doc.style.top = (curr - step1) + 'px';
    currPos++;
}
function stepUp1() {
    var doc = document.getElementById(currpawn);
    var curr = Number(doc.style.top.replace(/[a-z]/g, ''));
    doc.style.top = (curr - step1) + 'px';
    currPos++;
    var doc = document.getElementById(currpawn);
    var curr = Number(doc.style.left.replace(/[a-z]/g, ''));
    doc.style.left = (curr - step1) + 'px';
    currPos++;
}
function stepLeft() {
    var doc = document.getElementById(currpawn);
    var curr = Number(doc.style.left.replace(/[a-z]/g, ''));
    doc.style.left = (curr - step1) + 'px';
    currPos++;
}
function stepLeft2() {
    var doc = document.getElementById(currpawn);
    var curr = Number(doc.style.left.replace(/[a-z]/g, ''));
    doc.style.left = (curr - step1) + 'px';
    currPos++;
    var doc = document.getElementById(currpawn);
    var curr = Number(doc.style.top.replace(/[a-z]/g, ''));
    doc.style.top = (curr - step1) + 'px';
    currPos++;
}
function stepLeft1() {
    var doc = document.getElementById(currpawn);
    var curr = Number(doc.style.left.replace(/[a-z]/g, ''));
    doc.style.left = (curr - step1) + 'px';
    currPos++;
    var doc1 = document.getElementById(currcolor + "pawn"+NumOfPaw);
    var curr1 = Number(doc1.style.top.replace(/[a-z]/g, ''));
    doc1.style.top = (curr1+step1)+'px';
    currPos++;
}
function stepRight() {
    var doc = document.getElementById(currpawn);
    var curr = Number(doc.style.left.replace(/[a-z]/g, ''));
    doc.style.left = (curr + step1) + 'px';
    currPos++;
}
function stepRight2() {
    var doc = document.getElementById(currpawn);
    var curr = Number(doc.style.left.replace(/[a-z]/g, ''));
    doc.style.left = (curr + step1) + 'px';
    currPos++;
    var doc = document.getElementById(currpawn);
    var curr = Number(doc.style.top.replace(/[a-z]/g, ''));
    doc.style.top = (curr - step1) + 'px';
    currPos++;
}
function stepRight1() {
    var doc = document.getElementById(currpawn);
    var curr = Number(doc.style.left.replace(/[a-z]/g, ''));
    doc.style.left = (curr + step1) + 'px';
    currPos++;
    var doc1 = document.getElementById(currpawn);
    var curr1 = Number(doc1.style.top.replace(/[a-z]/g, ''));
    doc1.style.top = (curr1 - step1) + 'px';
    currPos++;
}
var stepsRed = [];
var stepsYellow = [];
var stepsBlue =[];
var stepsGreen =[];
function pushSteps(value, steps, count) {
    for (i = 0; i < count; i++) steps.push(value);
}
//Red pawns path
pushSteps(stepDown,stepsRed,4);
pushSteps(stepDown1,stepsRed,1);
pushSteps(stepRight, stepsRed,6);
pushSteps(stepDown, stepsRed,2);
pushSteps(stepLeft, stepsRed,5);
pushSteps(stepLeft1, stepsRed,1);
pushSteps(stepDown, stepsRed,6);
pushSteps(stepLeft, stepsRed,2);
pushSteps(stepUp, stepsRed,5);
pushSteps(stepUp1, stepsRed,1);
pushSteps(stepLeft, stepsRed,6);
pushSteps(stepUp, stepsRed,2);
pushSteps(stepRight, stepsRed,5);
pushSteps(stepRight1, stepsRed,1);
pushSteps(stepUp, stepsRed,6);
pushSteps(stepRight, stepsRed,1);
pushSteps(stepDown, stepsRed,6);
//Yellow pawns path

pushSteps(stepUp, stepsYellow,4);
pushSteps(stepLeft2, stepsYellow,1);
pushSteps(stepLeft, stepsYellow,6);
pushSteps(stepUp, stepsYellow,2);
pushSteps(stepRight, stepsYellow,5);
pushSteps(stepRight2, stepsYellow,1);
pushSteps(stepUp, stepsYellow,6);
pushSteps(stepRight, stepsYellow,2);
pushSteps(stepDown, stepsYellow,5);
pushSteps(stepDown1, stepsYellow,1);
pushSteps(stepRight, stepsYellow,6);
pushSteps(stepDown, stepsYellow,2);
pushSteps(stepLeft, stepsYellow,5);
pushSteps(stepLeft1, stepsYellow,1);
pushSteps(stepDown, stepsYellow,6);
pushSteps(stepLeft, stepsYellow,1);
pushSteps(stepUp, stepsYellow,6);

//Blue pawns path
pushSteps(stepLeft, stepsBlue,4);
pushSteps(stepLeft1, stepsBlue,1);
pushSteps(stepDown, stepsBlue,6);
pushSteps(stepLeft, stepsBlue,2);
pushSteps(stepUp, stepsBlue,5);
pushSteps(stepUp1, stepsBlue,1);
pushSteps(stepLeft, stepsBlue,6);
pushSteps(stepUp, stepsBlue,2);
pushSteps(stepRight, stepsBlue,5);
pushSteps(stepRight1, stepsBlue,1);
pushSteps(stepUp, stepsBlue,6);
pushSteps(stepRight, stepsBlue,2);
pushSteps(stepDown, stepsBlue,5);
pushSteps(stepDown1, stepsBlue,1);
pushSteps(stepRight, stepsBlue,6);
pushSteps(stepDown, stepsBlue,1);
pushSteps(stepLeft, stepsBlue,6);

//Green pawns path
pushSteps(stepRight, stepsGreen,4);
pushSteps(stepRight1, stepsGreen,1);
pushSteps(stepUp, stepsGreen,6);
pushSteps(stepRight, stepsGreen,2);
pushSteps(stepDown, stepsGreen,5);
pushSteps(stepDown1, stepsGreen,1);
pushSteps(stepRight, stepsGreen,6);
pushSteps(stepDown, stepsGreen,2);
pushSteps(stepLeft, stepsGreen,5);
pushSteps(stepLeft1, stepsGreen,1);
pushSteps(stepDown, stepsGreen,6);
pushSteps(stepLeft, stepsGreen,2);
pushSteps(stepUp, stepsGreen,5);
pushSteps(stepUp1, stepsGreen,1);
pushSteps(stepLeft, stepsGreen,6);
pushSteps(stepUp, stepsGreen,1);
pushSteps(stepRight, stepsGreen, 6);
function ResetPawn(victim) {
    onboard[victim] = 0;
    positions[victim] = 0;
    var pawnToMove = document.getElementById(victim);
    switch (victim) {
        case "redpawn1": pawnToMove.style.top = 184 + "px"; pawnToMove.style.left = 501 + "px"; break;
        case "redpawn2": pawnToMove.style.top = 142 + "px"; pawnToMove.style.left = 461 + "px"; break;
        case "redpawn3": pawnToMove.style.top = 101 + "px"; pawnToMove.style.left = 501 + "px"; break;
        case "redpawn4": pawnToMove.style.top = 142 + "px"; pawnToMove.style.left = 541 + "px"; break;
        case "bluepawn1": pawnToMove.style.top = 508 +"px"; pawnToMove.style.left = 94 + "px"; break;
        case "bluepawn2": pawnToMove.style.top = 509 + "px"; pawnToMove.style.left = 175 + "px"; break;
        case "bluepawn3": pawnToMove.style.top = 468 + "px"; pawnToMove.style.left = 135 + "px"; break;
        case "bluepawn4": pawnToMove.style.top = 548 + "px"; pawnToMove.style.left = 135 + "px"; break;
        case "greenpawn1": pawnToMove.style.top = 183 + "px"; pawnToMove.style.left = 134 + "px"; break;
        case "greenpawn2": pawnToMove.style.top = 142 + "px"; pawnToMove.style.left = 175 + "px"; break;
        case "greenpawn3": pawnToMove.style.top = 102 + "px"; pawnToMove.style.left = 134 + "px"; break;
        case "greenpawn4": pawnToMove.style.top = 143 + "px"; pawnToMove.style.left = 94 + "px"; break;
        case "yellowpawn1": pawnToMove.style.top = 509 + "px"; pawnToMove.style.left = 541 + "px"; break;
        case "yellowpawn2": pawnToMove.style.top = 509 + "px"; pawnToMove.style.left = 460 + "px"; break;
        case "yellowpawn3": pawnToMove.style.top = 468 + "px"; pawnToMove.style.left = 501 + "px"; break;
        case "yellowpawn4": pawnToMove.style.top = 549 + "px"; pawnToMove.style.left = 500 + "px"; break;

    }
}
function randomNum() {
    if (!clicked) {
        num = Math.floor((Math.random() * 6) + 1);;
        var dice = document.getElementById('dice');
        dice.style.backgroundImage = "url(Images/" + num + ".png)";
        clicked = true;
    }
    if (num != 6&&DontHaveOtherFree()) {
        var bad = document.getElementById('badtext');
        bad.innerText = "Unfortunatlly you stuck";
        window.setTimeout(changePlayer, 1000);
        clicked = false;
    }
}
function randomMove(Color, paw) {
    var text = document.getElementById('player');
    NumOfPaw = paw;
    currcolor = Color;
    currpawn = currcolor + "pawn" + NumOfPaw;
    currPos = positions[currpawn];
    if (num + currPos > 60) {
        Stuck();
    }
    else {
        if (clicked) {
            var position = currPos;
            if (text.innerText == currcolor) {
                if (onboard[currpawn] === 1 || num === 6) {
                    if (onboard[currpawn] === 0) {
                        var doc = document.getElementById(currpawn);
                        var curr = Number(doc.style.left.replace(/[a-z]/g, ''));
                        switch (Color) {
                            case "red":
                                doc.style.left = 359 + 'px';
                                doc.style.top = 81 + "px";
                                break;

                            case "yellow":
                                doc.style.left = 276 + 'px';
                                doc.style.top = 570+ "px";
                                break;

                            case "blue":
                                doc.style.left = 562 + 'px';
                                doc.style.top = 365 + "px";
                                break;

                            case "green":
                                doc.style.left = 72 + 'px';
                                doc.style.top = 284 + "px";
                                break;
                        }
                        onboard[currpawn] = 1;
                    }
                    else {
                        switch (Color) {
                            case "red":
                                for (i = currPos; i < position + num; i++) {
                                    stepsRed[i]();
                                }
                                break;

                            case "yellow":
                                for (i = currPos; i < position + num; i++) {
                                    stepsYellow[i]();
                                }
                                break;

                            case "blue":
                                for (i = currPos; i < position + num; i++) {
                                    stepsBlue[i]();
                                }
                                break;

                            case "green":
                                for (i = currPos; i < position + num; i++) {
                                    stepsGreen[i]();
                                }
                                break;
                        }
                        positions[currpawn] = currPos;
                        var victim = HaveHover();
                        if (victim != false) {
                            ResetPawn(victim);
                        }
                        if (currPos == 60) { pawnOut[currcolor]++; onboard[currpawn] = 0; positions[currpawn] = 0; document.getElementById(currpawn).style.visibility = "hidden"; };
                        CheckForWinner();
                        changePlayer();
                    }
                    num = 0;
                    clicked = false;
                    var dice = document.getElementById('dice');
                    dice.style.backgroundImage = "url(Images/dice.gif)";
                }
                else Stuck();
            }
        }
    }
}
