"use strict";
var win = window;
var opener = window.opener;
win.addEventListener("message", function (event) {
    if (event.origin == "http://localhost:8000") {
        console.log(event.data);
    }
}, false);
