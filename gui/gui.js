var win = window;
var subWin = null;

/**
 * @description モデルウィンドウを開く
 */
 if(!subWin){
	subWin =  window.open('http://localhost:8000/', 'model', 'top=0,left=0,width=400,height=400');
}
/**
 * @description controllerウィンドウとmodelウィンドウを閉じる
 */
 function WindowClose() {
	if(subWin){
    	subWin.close();
		subWin = null;
	}
	win.close();
}

/**
 * @description ReactionValueの値変化のたびに、サブウィンドウにpostする
 */
 Object.defineProperty(win, "ReactionValue", {
    set(v){
        if(subWin != null){
            subWin.postMessage(v,'http://localhost:8000/');
            console.log("ReactionValue set!:"+v);
        }
    }
});
/**
 * @description ReactionValueの値を変更する
 */
function ValueInput(num) {
    win.ReactionValue = num;
}

/**
 * @description ボタン押下時の処理設定
 */
 const stop_button = document.getElementById('ReactionStop');
 if (stop_button != null) stop_button.onclick = WindowClose;
 
 const button1 = document.getElementById('Reaction1');
 if (button1 != null) button1.onclick = function() {ValueInput(1)}; 
 
 const button2 = document.getElementById('Reaction2');
 if (button2 != null) button2.onclick = function() {ValueInput(2)}; 
 
 const button3 = document.getElementById('Reaction3');
 if (button3 != null) button3.onclick = function() {ValueInput(3)};
 
 const button4 = document.getElementById('Reaction4');
 if (button4 != null) button4.onclick= function() {ValueInput(4)};