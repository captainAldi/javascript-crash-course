//Contoh Function
//punya 2 parameter
//me return nilai / sesuatu
function tambahAngka(angka1, angka2) {
	return angka1 + angka2
}

//tampilkan di console
//panggil function nya dulu dan isi parameter nya
console.log(tambahAngka(2,4))

//Assign nilai pada paramater di function untuk memberikan nilai default
function tambahAngka1(angka1 = 1, angka2 = 2) {
	return angka1 + angka2
}

//tampilkan di console
console.log(tambahAngka1())

//Bentuk Function di ES6 atau Arrow Function

//Letakkan di sebuah variabel
//Untuk Parameter
  //Jika Lebih dari satu perlu tanda kurung JIKA tidak maka tidak perlu
//Tidak Perlu menuliskan return
//Setelah tanda panah / return
		//Jika Lebih dari satu line maka perlu kurung kurawal JIKA tidak maka tidak perlu
const tambahAngka2 = (angka1, angka2) => angka1 + angka2 
console.log(tambahAngka2(1,4))

//Satu Parameter
const tambahAngka3 = angka1 => angka1 + 2
console.log(tambahAngka3(1))

//Dengan nilai default
const tambahAngka4 = (angka1 = 1, angka2 = 3) => angka1 + angka2
console.log(tambahAngka4(2,3))

