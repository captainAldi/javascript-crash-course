//Object - "key value pairs"
//Atau sepasang kunci dan nilai

const person = {
	namaDepan: 'Bambang',
	namaBelakang: 'Hartono',
	umur: 20,
	hobi: ['berenang', 'makan'],
	alamat: {
		jalan: 'Jend. Sudirman',
		kota: 'Jambi',
		kecamatan: 'Jambi Selatan'
	}
}

//Tampilkan semua data
console.log(person)

//Akses satu key saja
console.log(person.namaDepan)

//Akses array dalam object
console.log(person.hobi[0])

//Akses Kota dari object alamat
console.log(person.alamat.kota)

//Tambah key value di object
person.email = "cobaTambah@gmail.com"
console.log(person)

//*-------------------------------------------------*//

//Array of object

const todos = [
	{
		id: 1,
		text: 'Pergi ke a',
		selesai: true
	},
	{
		id: 2,
		text: 'Pergi ke b',
		selesai: true
	},
	{
		id: 3,
		text: 'Pergi ke c',
		selesai: true
	},
	
]

 //Print semua array
console.log(todos)

//print text pada array ke 1
console.log(todos[1].text)