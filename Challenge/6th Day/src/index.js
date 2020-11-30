// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const countryList = document.querySelector(".countryList");
const currentList = localStorage.getItem("country");

let select = 0;
const options = document.getElementById("options");

function saveIndex(number) {
  localStorage.setItem("number", select);
}

function handleSelection(event) {
  if (!currentList) {
    localStorage.setItem("country", event.target.value);
  } else {
    localStorage.removeItem("country");
    localStorage.setItem("country", event.target.value);
  }
  select = countryList.options.selectedIndex;
  saveIndex(select);
}

console.log(select);

function init() {
  countryList.addEventListener("change", handleSelection);

  if (performance.navigation.type == 1) {
    if (localStorage.getItem("number")) {
      options.textContent =
        countryList.options[localStorage.getItem("number")].text;
    }
  }
}

init();
