//Get time
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var date = today.getDate();
var time = today.getHours() + ":" + today.getMinutes();
var dateTime = date+' '+time;
document.getElementById('date').innerHTML = 'Tdoday is ' + daylist[day] + '<br> & the time is ' + time;

//API KEY AND URL
const weatherAPI = '123e69db865d158893990a82ce490b73' ;
const newsAPI = '1ad76eb8d10c406ebac3a34876ebb98e' ;
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=Phoenix&units=imperial&appid=${weatherAPI}`;
const newsURL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsAPI}`


//Fetch Open Weather API
function getWeatherInfo() {
    fetch(weatherURL)
    .then((res) => res.json())
    .then((weather) => {
        console.log(weather.weather[0].icon)
        updateWeather(weather);
    })
    .catch((error) => {
        console.log(error);
      });
}
getWeatherInfo();

let updateWeather = (weather) => {
    let cityName = document.querySelector(".city")
    let cityTemp = document.querySelector(".Temp")
    let cityDesc = document.querySelector(".Desc")
    cityName.innerHTML = weather.name;
    cityTemp.innerHTML = weather.main.temp;
    cityDesc.innerHTML = weather.weather[0].description;
    
    addIcon(weather);
}

function addIcon() {
    let weatherIcon = weather.weather[0].icon;
    let iconUrl = "http://openweathermap.org/img/w/" + weatherIcon + ".png";
    let icon = document.createElement("img");
    icon.src = iconUrl;
    catElem.setAttribute("alt", "weather status");
    catElem.setAttribute("id", "weather-icon");
    document.getElementById("icon").appendChild(icon);
}

//Fetch News API
fetch(newsURL)
.then((res) => res.json())
.then((news) => news.articles.forEach(elem => {
    console.log('foreach', elem.title)
    let newsTitle = elem.Title
    let newsDesc = elem.Desc

}))
.catch((error) => {
    console.log(error);
  });
let plusBtn = document.querySelector(".new")



/*
function newsInfo(news, num) {
    createNewsTags();
    let newsSrc = news.articles[num].title;
    let newsDesc = news.articles[num].description;
    let source = document.querySelector("#newsTitle");
    let desc = document.querySelector('#newsDesc');
    source.innerHTML = newsSrc;
    desc.innerHTML = newsDesc;
}

function createNewsTags() {
    //Create h1 and p tags
    let titleElem = document.createElement("h2");
    let descElem = document.createElement("p");
    titleElem.setAttribute("id", "newsTitle")
    document.getElementById("news").appendChild(titleElem);
    descElem.setAttribute("id", "newsDesc");
    document.getElementById("news").appendChild(descElem);
}
function newHeadline(news, num) {
    plusBtn.addEventListener("click", newsInfo(news, 1))
}
*/

//Fetch Cat Pictures API
let meow = document.querySelector(".catBtn");
meow.addEventListener("click", changeGif)
getCatPicture();

function getCatPicture() {
    fetch('https://api.thecatapi.com/v1/images/search?mime_types=gif')
    .then((res) => res.json())
    .then((cat) => createCatImg(cat[0].url))
    .catch((error) => {
        console.log(error);
      }); 
}

let createCatImg = (cat) => {
    let catElem = document.createElement("img");
    catElem.src = cat;
    catElem.setAttribute("alt", "cat");
    catElem.setAttribute("id", "myCatGif");
    document.getElementById("cat-picture").appendChild(catElem);
    return catElem;
}

function changeGif() {
    let catPic = document.getElementById("myCatGif");
    catPic.remove();
    getCatPicture();
    
}
