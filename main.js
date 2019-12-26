//Manipulate DOM

//select element nya
const ul = document.querySelector('.items')
//panggil method modifikasi nya

// ul.remove()
// ul.lastElementChild.remove() => pilih element anak terakhir <li> dan method remove
// ul.firstElementChild.textContent = 'Hello' => pilih element anak pertama <li> dan properti textContent di set value nya
// ul.children[1].innerText = 'tes' => properti textContent ada juga innerText
// ul.children[2].innerHTML = '<h1>Tes</h1>' => utk menambhkan tag html

/*  select class btn
	const btn = document.querySelector('.btn')
	btn.style.background = 'red'
lalu ubah style background */ 

//COntoh aplikasi ubah style di JS
const btn = document.querySelector('.btn')

//tambah event listener
//paramter1 nama event, parameter2 nama function
//jika menggunkan event, maka gunakan event parameter yaitu e

//btn.addEventListener('click', (e) => console.log('click'))

//akan berjalan sangat cepat karna btn kita ada di form submit
//saat submit form maka akan kirim data ke file, jadi
		//jika ada click di form submit atau btn submit
		//harus stop atau prevent default behaviour
		//pada EventParameter lakukan prevent

// btn.addEventListener('click', (e) => {
// 	e.preventDefault()
// 	console.log('click')
// })

//contoh lain
btn.addEventListener('click', (e) => {
	e.preventDefault()
	//klo id tambah pagar
	document.querySelector('#form-saya').style.background = '#ccc'
	document.querySelector('body').style.background = 'black'
})



//lihat di browser nya
