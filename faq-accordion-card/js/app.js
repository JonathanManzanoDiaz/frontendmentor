'use strict'

let acc1 = document.querySelector('.acc1');
let acc2 = document.querySelector('.acc2');
let acc3 = document.querySelector('.acc3');
let acc4 = document.querySelector('.acc4');
let acc5 = document.querySelector('.acc5');

let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
let p3 = document.querySelector('.p3');
let p4 = document.querySelector('.p4');
let p5 = document.querySelector('.p5');

let arrow = document.querySelector('.arrow')


acc1.addEventListener('click', function () {
    p1.classList.toggle('hidden')
    arrow.style.trans

})

acc2.addEventListener('click', function () {
    p2.classList.toggle('hidden')
})

acc3.addEventListener('click', function () {
    p3.classList.toggle('hidden')
})

acc4.addEventListener('click', function () {
    p4.classList.toggle('hidden')
})

acc5.addEventListener('click', function () {
    p5.classList.toggle('hidden')
})


