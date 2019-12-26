//Buat Object dengan function Constructor 
//nama lebih baik huruf Kapital

//Di paramater, tuliskan properti yang ingin di set
function Person(namaDepan, namaBelakang, tglLahir) {
	//setelah mengirimkan di parameter
	//kita ingin men set properti yang ada di object dengan yang dikirimkan tadi
	//this menandakan kepemilikan dari object
	this.namaDepan = namaDepan
	this.namaBelakang = namaBelakang
	this.tglLahir = tglLahir
}

//Instantiate Object
//Kirim paramater
const person1 = new Person('Budi', 'Hartono', '10-12-2001')
const person2 = new Person('Sasuke', 'Uchiha', '09-01-2001')


//Tampilkan
console.log(person1)
console.log(person2)

//Jadikan tanggal menjadi tipe data tanggal
//menggunakan constructor Date
function Person2(namaDepan, namaBelakang, tglLahir) {
	this.namaDepan = namaDepan
	this.namaBelakang = namaBelakang
	this.tglLahir = new Date(tglLahir)
}

//Instantiate Object
const person3 = new Person2('Naruto', 'Uzumaki', '12-12-2001')

//Tampilkan
console.log(person3)
//Hanya tampilkan tanggal lahir dan menggunakan method getfullyear
console.log(person3.tglLahir.getFullYear())

//Buat function di dalam function
//Atau Tambah method ke dalam function
//Method essensi nya adalah sebuah function
function Person3(namaDepan, namaBelakang, tglLahir) {
	this.namaDepan = namaDepan
	this.namaBelakang = namaBelakang
	this.tglLahir = new Date(tglLahir)

	this.getTahunLahir = function() {
		return this.tglLahir.getFullYear()
	}

	this.getNamaLengkap = function() {
		return `${namaDepan} ${namaBelakang}`
	}
}

const person4 = new Person3('Sakura', 'Haruno', '01-02-2002')

//tampilkan
console.log(person4.getTahunLahir())
console.log(person4.getNamaLengkap())

function Person4(namaDepan, namaBelakang, tglLahir) {
	this.namaDepan = namaDepan
	this.namaBelakang = namaBelakang
	this.tglLahir = new Date(tglLahir)

}

//Buat Prototype
//Agar function tidak ada di instatiate object
//tpi hanya di proto saja
Person4.prototype.getTahunLahir = function() {
	return this.tglLahir.getFullYear()
}

Person4.prototype.getNamaLengkap = function() {
	return `${this.namaDepan} ${this.namaBelakang}`
}

//Instantiate Object
const person5 = new Person4('Hashirama', 'Senju', '05-12-2003')

//Lihat di debugging console
console.log(person5)
console.log(person5.getNamaLengkap())

//CARA ES6
//Buat Class dlu
class Person5 {
	constructor(namaDepan, namaBelakang, tglLahir) {
		this.namaDepan = namaDepan
		this.namaBelakang = namaBelakang
		this.tglLahir = new Date(tglLahir)
	}

	//Langsung Buat method, tanpa prototype
	getTahunLahir() {
		return this.tglLahir.getFullYear()
	}

	getNamaLengkap() {
		return `${this.namaDepan} ${this.namaBelakang}`
	}
}

const person6 = new Person5('Tobirama', 'Senju', '05-12-2004')

//Tampilkan
console.log(person6)
console.log(person6.getTahunLahir())