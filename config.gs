/**
* WebhookURL、Token情報など流出したら危険な情報や重要な設定などを情報シートから取得した変数群を格納したファイル
*
* config.gs  
*/
var dictSheet = SpreadsheetApp.openById("1mrQxnJUEcw3wxtF9iDZ5rlWDlIoYDElVB5l6sAtO6uQ").getSheetByName('辞書');
var infoSheet = SpreadsheetApp.openById("1mrQxnJUEcw3wxtF9iDZ5rlWDlIoYDElVB5l6sAtO6uQ").getSheetByName('情報');
var token= infoSheet.getRange("A1").getValue();