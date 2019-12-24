//Loop

const todos = [
	{
		id: 1,
		text: 'Pergi ke a',
		selesai: false
	},
	{
		id: 2,
		text: 'Pergi ke b',
		selesai: true
	},
	{
		id: 3,
		text: 'Pergi ke c',
		selesai: false
	},
	
]

//For - Udah tau la ya for gimana haha
for(let i = 0; i < todos.length; i++) {
	console.log(todos[i].text)
}

//For Of
for(let namaVariabelBebas of todos) {
	console.log(namaVariabelBebas.text)
}

//High Order Array methods

//forEach - Looping saja
//namaArray.forEach.parameter
//Parameter berisin function() {}
//Callback function bsa punya beberapa parameter
//Paramter pertama digunakan sebagai nama dari tiap array
todos.forEach(function(todo) {
	console.log(todo.text)
})

//map - bisa buat array dalam array
//return hasil looping jadi sebuah array baru
const textTodos = todos.map(function(todo) {
	return todo.text
})
console.log(textTodos)


//Filter - buat array baru berdasarkan kondisi
//return hasil filtering
const todoSelesai = todos.filter(function(todo) {
	return todo.selesai === true
})
console.log(todoSelesai)


