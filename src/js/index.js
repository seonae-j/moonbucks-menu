// ### TODO 메뉴 삭제

// - 메뉴 삭제 버튼을 이용하여 메뉴 삭제할 수 있다.
//   [x] 메뉴 삭제 버튼 클릭 이벤트를 받고, 메뉴 삭제 컨펌 모달창이 뜬다.
//   [x] 확인 버튼을 클릭하면 메뉴가 삭제된다.
//   [x] 총 개수 카운트도 함께 삭제된다.

// 자주 사용하는 쿼리를 하나의 변수로 만들기
const $ = (selector) => document.querySelector(selector);

// 앱을 실행하기 위한 함수 만들기
function App() {
  // 메뉴 삭제 함수
  const updateMenuCount = () => {
    const menuCount = $("#espresso-menu-list").querySelectorAll("li").length; // 전체 값 다 가져오기 - All 붙이기
    $(".menu-count").innerText = "총 " + menuCount + "개";
  };
  // 메뉴 상태가 업데이트되는 기능을 함수화하기
  $("#espresso-menu-list").addEventListener("click", (e) => {
    // 클래스명이 있는지 없는지 확인 - 수정버튼을 눌렀을때만 들어옴
    if (e.target.classList.contains("menu-edit-button")) {
      // 동일한 코드 변수화
      // 가장 가까운 li 타겟을 찾는다.
      const $menuName = e.target.closest("li").querySelector(".menu-name");
      // 기본값으로 menuName이 입력되어있도록
      const updatedMenuName = prompt(
        "메뉴명을 수정하세요",
        $menuName.innerText
      );
      // 새로 입력받은 값을 업데이트해준다.
      $menuName.innerText = updatedMenuName;
    }

    // 삭제 버튼 클래스명이 있는지 확인
    if (e.target.classList.contains("menu-remove-button")) {
      if (confirm("정말 삭제하시겠습니까?")) {
        e.target.closest("li").remove();
        updateMenuCount();
      }
    }
  });

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
    updateMenuCount();
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
