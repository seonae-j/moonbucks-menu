// ### TODO 메뉴 추가

// [] 메뉴의 이름을 입력 받고 확인 버튼을 누르면 메뉴가 추가된다.
// [x] 메뉴의 이름을 입력 받고 엔터키 입력으로 추가한다.
// [x] 추가되는 메뉴의 아래 마크업은 <!-- <ul id="espresso-menu-list" class="mt-3 pl-0"></ul> --> 안에 삽입해야 한다.
// [] 총 메뉴 갯수를 count하여 상단에 보여준다.
// [] 메뉴가 추가되고 나면, input은 빈 값으로 초기화한다.
// [] 사용자 입력값이 빈 값이라면 추가되지 않는다.

// 자주 사용하는 쿼리를 하나의 변수로 만들기
const $ = (selector) => document.querySelector(selector);

// 앱을 실행하기 위한 함수 만들기
function App() {
  // form 태그가 자동으로 전송되는걸 막아준다.
  $("#espresso-menu-form").addEventListener("submit", (e) => {
    e.preventDefault();
  });

  //메뉴의 이름 입력받기
  // element 찾기 쿼리
  //찾은 element를 입력 후 enter키를 누르면 이벤트 실행
  $("#espresso-menu-name").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      console.log($("#espresso-menu-name").value);
    }
  });
}

// 함수 실행하기
App();
