let col = document.querySelector('#exampleColorInput');
let col2 = document.querySelector('#exampleColorInput2');
let bl1 = document.querySelector('.bl1');
let b1 = document.querySelector('.b1');
let t = document.querySelector('.t');

b1.addEventListener('click', function () {
  bl1.style.backgroundColor = col.value;
  bl1.style.color = col2.value;
  t.innerHTML = `<p>Цвет фона - ${col.value}  Цвет текста - ${col2.value}</p>`;
});