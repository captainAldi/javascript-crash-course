//string, numbers, boolean, null, undefined

const nama							= 'Budiyanto'
const namaBanyak = 'Naruto, Sasuke, Sakura'
const umur							= '30'

//String Properties and Methods

//properties tidak memliki ()
console.log(nama.length)

//Method memiliki ()
//Method adalah function yang berkaitan dengan object
console.log(nama.toLowerCase())
console.log(nama.toUpperCase())
console.log(nama.substring(0, 5))

//Gabungkan dengan method lain
console.log(nama.substring(0, 5).toUpperCase())

//Pisahkan String menjadi array
//GUnakan method split()
//Parameter yang digunakan ada beberapa

//Contoh: jika per huruf maka biar kan saja jadi split('')
console.log(nama.split(''))

//Cntoh: jika per tanda comma maka jadi split(', ')
console.log(namaBanyak.split(', '))
