# 카카오톡 봇

> 본 카카오톡 봇은 카카오톡에서 정식으로 지원하는 플랫폼을 통해 배포되는 챗봇이 아님을 알립니다.

### 작동원리

- 카카오톡의 알림을 안드로이드 `NotificationListener` 을 통해 입력받는다.

- 그것에 대한 응답을 앱의 작동으로 생성한다.

  (응답 생성은 `JS` ([Dark Tornado](https://blog.naver.com/dt3141592)님의 앱) 혹은 `Python`([mansuiki](https://github.com/mansuiki) 의 앱) 의 작동으로 생성된다)

- [Wear OS by Google](https://play.google.com/store/apps/details?id=com.google.android.wearable.app) 을 통해 카카오톡에 응답한다.



### 자바스크립트 기반

  **function response** : 채팅이 수신될 경우 호출되는 이벤트 리스너.

- room : 채팅이 수신된 채팅방의 이름
- msg : 수신된 채팅의 내용
- sender : 채팅을 보낸 사람의 이름
- isGroupChat : 채팅이 수신된 방이 단체 채팅방이라면 true, 1:1 채팅방이라면 false
- replier : 답장에 사용되는 객체

```js
function response(room, msg, sender, isGroupChat, replier, imageDB) {}
```

