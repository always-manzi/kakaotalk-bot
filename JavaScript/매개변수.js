function response(room, msg, sender, isGroupChat, replier, imageDB) { 

    replier.reply("방 이름 : " + room); //방 이름
    replier.reply("채팅 내용 : " + msg); //채팅 내용
    replier.reply("보낸 사람 : " + sender); //보낸 사람
    replier.reply("단체 채팅방 : " + isGroupChat); //단톡방 여부

  } 

  