const data = [
	{
		name: "robert",
		age: "29",
		residence: "amsterdam",
		work: {
			title: "Lecturer",
			employer: "Hogeschool van Amsterdam"
		}
	},
	{
		name: "berend",
		age: "32",
		residence: "rotterdam",
		work: {
			title: "Front-end Developer",
			employer: "DEPT"
		}
	},
	{
		name: "ubaida",
		age: "26",
		residence: "Amersfoort",
		work: {
			title: "Project Manager",
			employer: "Clarify"
		}
	}
];

function transformArrOfObj() {
	/* Write your functionality here and log the result */
  
        data.forEach(function (element) {
            delete element.work; /* removes the work section*/
          
          element.name = element.name.charAt(0).toUpperCase() + element.name.slice(1).toLowerCase();
          
          element.residence = element.residence.charAt(0).toUpperCase() + element.residence.slice(1).toLowerCase();
          
          element.age = parseInt(element.age, 10); /* turns the element age into a number */
          
        });
      data.sort((a, b) =>  a.age - b.age); /* filtert de, er bestaat een filter() maar werkt niet op objecten. */
   console.table(data) 
  
}

transformArrOfObj()