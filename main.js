//Conditionals

//if
const a = 10

// == hanyaa mecocokan nilai tidak tipe data
// === mencocokkan nilai dan tipe data

// Jika Tipe nilai = angka maka tipe ada juga harus numbere / angka

//Contoh if.. else if..
if(a === 10) {
	console.log('benar')
} else if( a > 8) {
	console.log('a lebih besar dari 8')
} else {
	console.log('salah')
}

//Contoh gabungan dgn AND OR
const b = 8

if(a > b || b<a) {
	console.log('A lebih besar dari B Atau Sebaliknya')
} else if (b < a && a === b) {
	console.log('b lebih kecil dari a dan a sama dengan b')
} else {
	console.log('Salah Semua')
}

//Ternary Operator
const c = 7

const d = b < c ? 'salah' : 'benar'
console.log(d)

//Switch
const warna = 'merah'

switch(warna) {
	case 'merah':
		console.log('Warna nya merah')
		break
	case 'biru':
		console.log('Biru')
		break
	default:
		console.log('color not found')
}


