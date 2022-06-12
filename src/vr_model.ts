var win: any = window;
var opener = window.opener;
console.log(opener);

/**
 * @description Controllerの値変化に応じて処理
 */
win.addEventListener("message", function(event: any) {
	if(event.origin == "http://localhost:8000/gui"){
	    console.log(event.data);
	}
},false);