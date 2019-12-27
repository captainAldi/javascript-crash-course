//Masukkan beberapa element dari DOM ke variabel

const formSaya 		= document.querySelector('#form-saya')
const inputNama		= document.querySelector('#nama')
const inputEmail	= document.querySelector('#email')
const pesan						= document.querySelector('.pesan')
const pengguna			= document.querySelector('#pengguna')

//parameter1, Event yang ingin didengar di element form => submit
//parameter2, tidak perlu  buat function tapi bisa panggil saja namanya
formSaya.addEventListener('submit', onSubmit)

function onSubmit(e) {
	e.preventDefault()
	//jika ingin dapatkan value tambahkan saja properties value
	// console.log(inputNama.value)

	if(!inputNama.value.length || !inputEmail.value.length) {
		pesan.classList.add('error')
		pesan.innerHTML = '<h1>Masukkan Data dengan Benar</h1>'

		setTimeout(() => pesan.remove(), 3000)
	} else {
		const li = document.createElement('li')
		li.appendChild(document.createTextNode(`nama : ${inputNama.value} || email : ${inputEmail.value}`))

		pengguna.appendChild(li)

		//besihkan
		inputNama.value = ''
		inputEmail.value = ''
	}
}