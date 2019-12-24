//JSON - DataType for API

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

//Convert array ke json
//menggunakan methods JSON.stringify()
//paramter di isi dengan data yang ingin di ubah
const jsonTODO = JSON.stringify(todos)
console.log(jsonTODO)
