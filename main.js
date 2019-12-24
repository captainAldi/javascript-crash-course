//Arrays - Untuk menyimpan banyak data
//*---------------------------------------------------------------*//

//Buat Array

//Cara 01 - Menggunakan Array Constructor
const mobil = new Array('avanza', 'alpard')

//Cara 02 - Gunakan kurung siku
const motor = ['nmax', 'vixion']

//Dalam JS bisa memeiliki beberapa tipe data dalam 1 array
//Berbeda dengan bahasa lain nya
const gabungan = ['motor', 'mobil', 2, true]

console.log(mobil)
console.log(motor)
console.log(gabungan)

//*---------------------------------------------------------------*//

//Akses Array

//Tulis dalam kurung siku nomor index array tsb
console.log(mobil[1])

//*---------------------------------------------------------------*//

//Tambah data pada array 

//Cara 01 - Langsung tulis index baru nya saja
// mobil[2] = 'lamborgini'
// console.log(mobil)

//Cara 02 - Gunakan methods push()
//push() menambah value ke bagian akhir dari array
mobil.push('terios')
console.log(mobil)

//Cara 03 - Gunakan methods unshift()
//unshif() menambah value ke bagian awal dari array
mobil.unshift('ayla')
console.log(mobil)

//*---------------------------------------------------------------*//

//Keluarkan data pada array

//Cara 01 - Gunakan methods pop()
//Mengeluarkan data terkakhir dari suatu array
mobil.pop()
console.log(mobil)

//*---------------------------------------------------------------*//

//Cek array atau bukan

//Cara 01 - Gunakan method isArray()
//Pada Object Array gunakan method isArray()
//Pada parameter masukkan yg ingin di cek
//contoh benar 
console.log(Array.isArray(mobil))
//contoh salah
console.log(Array.isArray('hallo'))

//*---------------------------------------------------------------*//

//Cek Index dari data / values / nilai

//Gunakan method indexOf
//Pada parameter masukkan nilai yg ingin di cari tahu
console.log(mobil.indexOf('ayla'))

