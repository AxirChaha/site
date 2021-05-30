let q1 = document.querySelector(".q1");
let i1 = document.querySelector(".i1");
let b1 = document.querySelector(".b1");

b1.addEventListener('click', function () {
    let col = i1.value;
    if (col.length === 3 || col.length === 6) {
        q1.innerHTML = "#" + col;
        q1.style.backgroundColor = "#" + col;
    }
    else {
        q1.style.backgroundColor = '#ff6666';
        q1.style.color = '#000000';
        q1.innerHTML = "Неверное значение цвета!";
    }
});

// API ключ
let apiKey = "dbad771bedc060986e0f1cd95cb650b8";
// Город погода которого нужна
let city = "Dnepr";
// Формируем url для GET запроса
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;

// Отправка GET запроса
axios.get(url).then(res => {
    // Вывод города
    document.querySelector('.city').innerHTML = res.data.name
    // Вывод температуры
    document.querySelector('.temp').innerHTML = res.data.main.temp
    // Вывод влажности
    document.querySelector('.humidity').innerHTML = res.data.main.humidity
    // Вывод скорости ветра
    document.querySelector('.wind').innerHTML = res.data.wind.speed
      document.querySelector('.test').innerHTML = res.data.weather[0].description
    //document.querySelector('.test').innerHTML = `<img src="http://openweathermap.org/img/wn/${res.data.weather[0].icon}.png" alt='no'>`
     document.querySelector('.test2').innerHTML = `<img src="./img/${res.data.weather[0]['icon']}.png">`

    //console.log(res.data);
    //console.log(`${res.data.weather[0]['icon']}.png`);
})