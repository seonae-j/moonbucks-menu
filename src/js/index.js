// ### TODO 메뉴 추가

// [x] 메뉴의 이름을 입력 받고 확인 버튼을 클릭하면 메뉴가 추가된다.
// [x] 메뉴의 이름을 입력 받고 엔터키 입력으로 추가한다.
// [x] 추가되는 메뉴의 아래 마크업은 <!-- <ul id="espresso-menu-list" class="mt-3 pl-0"></ul> --> 안에 삽입해야 한다.
// [x] 총 메뉴 갯수를 count하여 상단에 보여준다.
// [x] 메뉴가 추가되고 나면, input은 빈 값으로 초기화한다.
// [x] 사용자 입력값이 빈 값이라면 추가되지 않는다.

// 자주 사용하는 쿼리를 하나의 변수로 만들기
const $ = (selector) => document.querySelector(selector);

// 앱을 실행하기 위한 함수 만들기
function App() {
  // form 태그가 자동으로 전송되는걸 막아준다.
  $("#espresso-menu-form").addEventListener("submit", (e) => {
    e.preventDefault();
  });

  // 아래의 코드와 중복이 되는 상황이다.
  // 재사용 가능한 함수 먼저 만들기
  const addMenuName = () => {
    if ($("#espresso-menu-name").value === "") {
      alert("값을 입력해주세요.");
      return;
    }
    // console.log($("#espresso-menu-name").value);
    const espressoMenuName = $("#espresso-menu-name").value;
    // 해당 템플릿에 인자를 전달받을 함수를 입력하고 li에 추가하기
    const menuItemTemplate = (espressoMenuName) => {
      return `
      <li class="menu-list-item d-flex items-center py-2">
        <span class="w-100 pl-2 menu-name">${espressoMenuName}</span>
        <button
          type="button"
          class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
        >
          수정
        </button>
        <button
          type="button"
          class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
        >
          삭제
        </button>
      </li>`;
    };
    // 템플릿이 만들어지는지 확인하기 - innerHTML을 사용하면 기존에 있던 메뉴 리스트가 삭제된다.
    // => insertAdjacentHTML() 메서드를 사용해야 함
    $("#espresso-menu-list").insertAdjacentHTML(
      "beforeend",
      menuItemTemplate(espressoMenuName)
    );
    // 입력된 메뉴 개수 count하여 나타내기
    // html의 "menu-count" 클래스명 이용
    // 문자값만 바꾸는 것이기 때문에 innerText사용
    // li 갯수를 카운팅하자
    const menuCount = $("#espresso-menu-list").querySelectorAll("li").length; // 전체 값 다 가져오기 - All 붙이기
    $(".menu-count").innerText = "총 " + menuCount + "개";
    // input창 초기화
    $("#espresso-menu-name").value = "";
  };

  // '확인'버튼 클릭 시 메뉴 추가되는 기능
  $("#espresso-menu-submit-button").addEventListener("click", () => {
    addMenuName();
  });

  //메뉴의 이름 입력받기
  // element 찾기 쿼리
  //찾은 element를 입력 후 enter키를 누르면 이벤트 실행
  $("#espresso-menu-name").addEventListener("keypress", (e) => {
    if (e.key !== "Enter") {
      return;
    }
    addMenuName();
  });
}

// 함수 실행하기
App();
