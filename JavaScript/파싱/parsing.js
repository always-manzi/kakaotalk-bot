function response(room, msg, sender, isGroupChat, replier, imageDB) {
    msg = msg.trim();
    var cmd = msg.split(" ")[0]; //커맨드(명령)이 무엇인지 판단하는 데이터 처리


    if(cmd == "!파싱") {  //커맨드(명령)이 파싱일 경우
      var url = msg.replace("!파싱 ", ""); 
      var result = Utils.getWebText(url); 

      replier.reply("결과\n" + result);
    } 
}