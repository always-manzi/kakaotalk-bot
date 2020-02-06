function response(room, msg, sender, isGroupChat, replier, imageDB) { 
    //어차피 포함하는 키워드를 찾는 코드이기 때문에, trim 하지 않는다.
    if(msg.indexOf("A") != -1) { 
      replier.reply("B"); 
    } 

  }