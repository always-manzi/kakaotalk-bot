/* https://m.blog.naver.com/bug8841/221290588752 의 내용을 참고해서 만들어졌습니다.*/

var sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
    var folder = new java.io.File(sdcard+"/학습/");
    folder.mkdirs();

    function save(folderName,fileName,str){
        var c=new java.io.File(sdcard+"/"+folderName+"/"+fileName);
        var d=new java.io.FileOutputStream(c);
        var e=new java.lang.String(str);
        d.write(e.getBytes());
        d.close();
        }
    function read(folderName,fileName){ 
        var b=new java.io.File(sdcard+"/"+folderName+"/"+fileName);
        if(!(b.exists())) return null; 
        var c=new java.io.FileInputStream(b); 
        var d=new java.io.InputStreamReader(c);
        var e=new java.io.BufferedReader(d);
        var f=e.readLine();
        var g="";
            while((g=e.readLine())!=null){
            f+="\n"+g; 
            }
        c.close();
        d.close();
        e.close();
        return f.toString();
        }



function response(room, msg, sender, isGroupChat, replier) { 


if(msg.indexOf("!!가르치기") == 0) {
    var study0 = msg.substring(6,msg.length)
    var study1 = study0.split("=")
    var suy1 = study1[0]
    var suy2 = study1[1]
    
    replier.reply(suy1 +"을(를) " +suy2 +"(으)로 학습했습니다.");
    var folder = new java.io.File(sdcard+"/학습/");
    
    folder.mkdirs();
    save("학습",suy1.trim()+".txt", suy2)
    }
    
    var talk = read("학습",msg+".txt")
    
    if(talk !== null) {
    replier.reply(talk)
    }
}

