const API_KEY='0f95d3fff07e474a7aaf7d8e015caedc';
const COORDS='coords';

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;//위도
    const longitude = position.coords.longitude;//경도
    const coordsObj = {
        latitude: latitude,
        longitude: longitude
    };//객체에 넣어준다.
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
    //localStorage에 저장한다.
    //localStorage에는 string값을 저장할 수 있으므로 OBj타입을 string타입으로 변환해 준다.
}

function handleGeoError() {
    console.log("can't access geo location");
}

//좌표를 묻는 함수
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
    //geolocation 객체에서 getCurrentPosition함수를 사용해 준다.
    //첫번째 인자는 좌표를 성공적으로 가져왔을 때, 두 번째 인자는 실패했을 때
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords===null){
        askForCoords();//undefined일 때 위도 경도를 저장하려고 한다.
        //이미 localStorage에 저장했으므로 새로고침해도 바뀌지 않는다.
    }
    else{

    }
}


function init(){
    loadCoords();
}

init();