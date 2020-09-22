const API_KEY='0f95d3fff07e474a7aaf7d8e015caedc';
//API_KEY는 날씨 정보를 얻어오기 위해 사용하는 것이다.
const COORDS='coords';

const weather = document.querySelector(".js-weather");

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

    //위도, 경도를 넣어준다.
    getWeather(latitude,longitude);

}

//위도,경도 정보를 통해 날씨 정보를 가져온다.
function getWeather(lat, lng){
    //fetch는 통신하는 중간 역할을 한다.
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        //데이터가 완벽하게 응답되었다면 response인자로 들어간다.
    )
    .then(function(response){
        return response.json();//json타입으로 변경
    })
    .then(function(json){
        //json으로 묶인 데이터를 가져와 화면에 표시 해준다.
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });//then은 데이터가 넘어왔을 때 실행되는 객체이다.

    

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
        //이미 localStorage에 저장된 경우에 getWeather를 통해 날씨 정보를 가져온다.
        const parsedCoords = JSON.parse(loadedCoords);
        //parsedCoords는 string타입으로 있는 것을 parse를 통해 객체로 바꿔준 뒤에 getWeather에 넣어준다.
        getWeather(parsedCoords.latitude,parsedCoords.longitude);
    }
}


function init(){
    loadCoords();
}

init();