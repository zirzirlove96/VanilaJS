// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

function ChangeBackGroundColor(event) {
  if (window.innerWidth < 400) {
    document.body.style.backgroundColor = "#6495ED";
  } else if (window.innerWidth >= 400 && window.innerWidth < 600) {
    document.body.style.backgroundColor = "purple";
  } else {
    document.body.style.backgroundColor = "#FFD700";
  }
}
//if-else를 사용하여 이벤트에 해당하는 resize에서
//innerWith가 변경될 때 색상 변화 일으키기
function init() {
  window.addEventListener("resize", ChangeBackGroundColor);
}

init();
