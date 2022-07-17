var win = window;
var subWin = null;

/**
 * @description モデルウィンドウを開く
 */
 if(!subWin){
	subWin =  window.open('https://glacial-meadow-27403.herokuapp.com/', 'model', 'top=0,left=0,width=975,height=500');
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
            subWin.postMessage(v,'https://glacial-meadow-27403.herokuapp.com/');
            console.log("ReactionValue set!:"+v);
        }
    }
});
/**
 * @description ReactionValueの値を変更する
 */
function ValueInput(str) {
    win.ReactionValue = str;
}

/**
 * @description ボタン押下時の処理設定
 */
 const stopButton = document.getElementById('ReactionStop');
 if (stopButton != null) stopButton.onclick = WindowClose;

 const button0 = document.getElementById('Reaction0');
 if (button0 != null) button0.onclick = function() {ValueInput('00')}; 
 
 const button1 = document.getElementById('Reaction1');
 if (button1 != null) button1.onclick = function() {ValueInput('01')}; 
 
 const button2 = document.getElementById('Reaction2');
 if (button2 != null) button2.onclick = function() {ValueInput('02')}; 
 
 const button3 = document.getElementById('Reaction3');
 if (button3 != null) button3.onclick = function() {ValueInput('03')};
 
 const button4 = document.getElementById('Reaction4');
 if (button4 != null) button4.onclick= function() {ValueInput('04')};

 const button5 = document.getElementById('Submit');
 if (button5 != null) button5.onclick= function() {
    Scriptbox = document.getElementById('CommentScript');
    value = "1" +  Scriptbox.value;
    ValueInput(value);
};

 const changeButton = document.getElementById('ModelChange');
 if (changeButton != null) changeButton.onclick= function() {ValueInput('2.change')};


 /**
 * @description 自動リアクションモード
 * 
 */
function autoReaction() {    //ランダムに自動でリアクション
    var random = Math.floor( Math.random() * 4 );
    if(random == 0){
        ValueInput("1【デモ中】へー");
        ValueInput("00");
    }else if(random == 1) {
        ValueInput("1【デモ中】なるほど！");
        ValueInput("01");
    }else if(random == 2) {
        ValueInput("1【デモ中】えーっ！");
        ValueInput("02");
    }else if(random == 3) {
        ValueInput("1【デモ中】うーん……");
        ValueInput("03");
    }else if(random == 4) {
        ValueInput("1【デモ中】いいね！");
        ValueInput("04");
    }
}
const autoButton = document.getElementById('AutoReaction');
var autoMode = false;
var intervalId;
if (autoButton != null) autoButton.onclick= function() {
    if (autoMode == false) {
        autoMode = true;
        intervalId = setInterval(autoReaction, 5000);  //5秒ごとに自動リアクション
    }else if(autoMode == true) {
        autoMode = false;
        clearInterval(intervalId);  //自動リアクションの停止
    }
};