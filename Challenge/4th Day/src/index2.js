// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const bigScreen = bigScreen;
const mediumScreen = mediumScreen;
const smallScreen = smallScreen;

//body에 classList로 Screen이 변화할때마다 css에 저장해 놓은
//컬러로 변화시킨다.
function ChangeBackGroundColor(event) {
    const body = document.body;
    if (window.innerWidth < 700) {
      body.classList.add(smallScreen);
      body.classList.remove(mediumScreen);//이전에 있던 classList를 꼭 지워준다!
    } else if (window.innerWidth >= 700 && window.innerWidth < 1000) {
      body.classList.add(mediumScreen);
      body.classList.remove(bigScreen, smallScreen);
      //mediumScreen은 small과 big 사이에 껴있으므로 둘 다 지워준다.
    } else {
      body.classList.add(bigScreen);
      body.classList.remove(mediumScreen);
    }
  }


//if-else를 사용하여 이벤트에 해당하는 resize에서
//innerWith가 변경될 때 색상 변화 일으키기
function init() {
  window.addEventListener("resize", ChangeBackGroundColor);
}

init();
