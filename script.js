let btn1 = document.querySelector('.btn1');
let update = document.querySelector('h1');
let a = 0;

btn1.onclick = function () {
  update.innerText = a += 1;
};
