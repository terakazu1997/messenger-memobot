/**
* メインファイル、今回の起点に当たるファイル　
*　
* スプレッドシートが更新されたタイイングで実行されcontrollerを呼び出す。
* main.gs 
*/

function doPost(e) {
    var parameters = JSON.parse(e.postData.contents);
    var messagingEvents = parameters.entry[0].messaging;
    var keyword;
    var sendid;
    messagingEvents.forEach(function(event){
        if(event.message && event.message.text){
            keyword=event.message.text; 
            sendid = event.sender.id;
        }
    });
    controller(keyword,sendid);
    return;
}
