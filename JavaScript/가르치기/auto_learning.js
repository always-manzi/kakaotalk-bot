//본 코드는 Dark Tornado의 아무말 대잔치 코드를 일부 수정한 코드 입니다.


/*
<라이선스>
이 소스에는 아파치 라이선스 2.0이 적용되어있습니다.

Copyright 2018 Dark Tornado

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath(); //내장 메모리 상위 경로 가져오기
const AI = {}; //AI 관련 함수들이 들어갈 객체
const DB = {}; //저장 및 읽기 관련 함수들이 들어갈 객체.
const preMsg = {}; //도배 방지용 객체

//AI 객체에 포함된 함수 정의
