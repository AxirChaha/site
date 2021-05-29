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
