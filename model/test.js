var win = window;
var opener = window.opener;

/**
 * @description Controllerの値変化に応じて処理
 */
win.addEventListener("message", function(event) {
	if(event.origin == "http://localhost:8000"){
	    console.log(event.data);
	}
},false);

