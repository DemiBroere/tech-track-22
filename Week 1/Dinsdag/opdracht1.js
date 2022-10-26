const data = [
	1,
	2,
	"3",
	"4",
	5
]

function convertArrayStringsToNumbers() {
    let newData = [];

    length = data.length;
 
    for (let i = 0; i < length; i++) {
        newData.push(parseInt(data[i]));
    }
    console.log(newData);
}

convertArrayStringsToNumbers();

/* OTHER WAY OF DOING IT 

function convertArrayStringsToNumbers() {
	let newData = data.map(item => {
		 return parseInt(item, 10);
	})

	console.log(newData);
}

convertArrayStringsToNumbers(); 

*/