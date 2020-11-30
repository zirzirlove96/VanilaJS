const select = document.querySelector(".countryList");

function handleChange() {
    //select의 선택한 값을 가져온다.
    const selected = select.value;
    localStorage.setItem("country",selected);
}

function loadCountries() {
    const selected = localStorage.getItem("country");
    if(selected){
        //만약 localStorage에 값이 있을 경우 
        //option[value="${selected}"]를 수행하고 true값을 주면 새로고침을 해도 변하지 않는다.
        //option의 selected가 적용된다.
        const option = document.querySelector(`option[value="${selected}"]`);
        option.selected=true;
    }
}

function init(){
    loadCountries();
    select.addEventListener("change",handleChange);
}

init();