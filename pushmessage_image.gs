const TOKEN = 'LINEのトークンを指定(取得方法：https://arukayies.com/gas/line_bot/gettoken)';
const DEBUGID = 'LINEのユーザIDを指定(取得方法：https://arukayies.com/gas/line_bot/get-userid)';$X

//LINEBOTで画像メッセージを送るサンプル
function pushmessage_image() {
  //画像メッセージを送る
  UrlFetchApp.fetch('https://api.line.me/v2/bot/message/push', {
    'headers': {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + TOKEN, //LINEのトークンを指定(取得方法：https://arukayies.com/gas/line_bot/gettoken)
    },
    'method': 'POST',
    'payload': JSON.stringify({
      'to': DEBUGID, //LINEのユーザIDを指定(取得方法：https://arukayies.com/gas/line_bot/get-userid)
      'messages': [{
				'type': 'image',
				'originalContentUrl': 'https://placehold.jp/640x480.jpg?text=test',
				'previewImageUrl': 'https://placehold.jp/240x240.jpg?text=test'
			}],
      'notificationDisabled': false // trueだとユーザーに通知されない
    }),
  });
}