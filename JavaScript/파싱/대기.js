function response(room, msg, sender, isGroupChat, replier) {

    try {
        if(msg.indexOf("!대기")==0)
            {
                var u=Utils.getWebText("https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query="+msg.substr(6)+"+%EB%8C%80%EA%B8%B0%EC%A0%95%EB%B3%B4%20&o");
                var a=u.split("<em class=\"main_figure\">"); 
                var b=u.split("<span class=\"state\">"); 
                var c=u.split("<span class=\"state_info\">");
                replier.reply(msg.substr(6)+"대기정보 검색결과 입니다\n미세먼지:"+a[1].split("<")[0]+"㎍/㎥\n초미세먼지:"+b[3].split("<")[0]+c[1].split("<")[0]+"\n오존:"+b[4].split("<")[0]+c[2].split("<")[0]+"\n일산화탄소:"+b[5].split("<")[0]+c[3].split("<")[0]+"\n아황산가스:"+b[6].split("<")[0]+c[4].split("<")[0]+"\n이산화질소:"+b[7].split("<")[0]+c[5].split("<")[0]+"\n통합대기:"+b[8].split("<")[0]+c[6].split("<")[0]);
            }
        }
    catch(e){
    replier.reply("대기 정보가 없습니다");
    }
    
}
    