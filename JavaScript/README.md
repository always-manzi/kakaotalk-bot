# JS봇을 사용할 때 팁

### 데이터를 효율적으로 받는법(msg.trim())
챗봇을 2년간 제작/운영해보면서 가장 많이 발생하는 입력 실수는 다름아닌 띄어쓰기다. 따라서 데이터를 효율적으로 받기 위해선 명령어 앞에 붙이는 기호인 `!` 앞 뒤를 `trim` 해주는것이 좋다. 
```js
function response(room, msg, sender, isGroupChat, replier, imageDB) {
  msg = msg.trim(); 
}
```
