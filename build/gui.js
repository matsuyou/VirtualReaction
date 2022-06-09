"use strict";
var win = window;
var subWin = null;
if (!subWin) {
    subWin = window.open('http://localhost:8000/model', 'model', 'top=0,left=0,width=400,height=400');
}
function WindowClose() {
    if (subWin) {
        subWin.close();
        subWin = null;
    }
    win.close();
}
Object.defineProperty(win, "ReactionValue", {
    set: function (v) {
        if (subWin != null) {
            subWin.postMessage(v, 'http://localhost:8000/model');
            console.log("ReactionValue set!:" + v);
        }
    }
});
function ValueInput(num) {
    win.ReactionValue = num;
}
var stop_button = document.getElementById('ReactionStop');
if (stop_button != null)
    stop_button.onclick = WindowClose;
var button1 = document.getElementById('Reaction1');
if (button1 != null)
    button1.onclick = function () { ValueInput(1); };
var button2 = document.getElementById('Reaction2');
if (button2 != null)
    button2.onclick = function () { ValueInput(2); };
var button3 = document.getElementById('Reaction3');
if (button3 != null)
    button3.onclick = function () { ValueInput(3); };
var button4 = document.getElementById('Reaction4');
if (button4 != null)
    button4.onclick = function () { ValueInput(4); };
