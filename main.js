let input = document.querySelector('input')
let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')

btn1.addEventListener('click', () => {
    input.value = parseInt(input.value) + 1
})

btn2.addEventListener('click', () => {
    input.value = parseInt(input.value) - 1
})