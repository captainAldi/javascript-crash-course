//Browser Punya Windows Object
//Ini Parent element
//punya beberapa function didalamnya
console.log(window)

//Single Element Selector
//hanya akan memilih yang pertama

//selecter nya getElementById()
document.getElementById('form-saya')

//coba tampilkan di console
console.log(document.getElementById('form-saya'))

//selector nya querySelector
//seperti di jQuery => library javascript

//coba di class => container
document.querySelector('.container')
console.log(document.querySelector('.container'))

//coba di tag
document.querySelector('h1')
console.log(document.querySelector('h1'))

//Multi Element Selector

//selector nya querySelectorAll
//contoh => uncoment dlu item yang di tag html
//jadi NodeList => bsa menggunakan method array
console.log(document.querySelectorAll('.item'))

//selector nya getElementsByClassName
//semua akan jadi class
//jadi jangan gunakan titik atau pagar
//jadi HTMLCollection => tidak bisa menggunakan method array harus di conversi dlu
console.log(document.getElementsByClassName('item'))

//selectornya getElementsByTagName
console.log(document.getElementsByTagName('li'))

