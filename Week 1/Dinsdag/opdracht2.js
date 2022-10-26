/*  The following array contains strings with randomized capitals.
	You're tasked with converting all strings to lowercase with a
	first letter capitalized */

const data = [
	"robert",
	"vincent",
	"lAuRa",
	"Cas",
	"wIMER",
	"rOOs"
];

/* This should the result be:
	const data = [
		"Robert",
		"Vincent",
		"Laura",
		"Cas",
		"Wimer",
		"Roos"
	];

function convertArrayStringsToCapitalized() {
        let editedArray = data.map(item => item.split(','));
							
		let newData = {};
		
		editedArray.flat().forEach(data => {
            data = data.trim();
            data = data.charAt(0).toUpperCase() + data.slice(1).toLowerCase();
			
				if(!newData[data]) {
					newData[data] = 0;
				}
				
				newData[data] = newData[data] + 1;
			})
		
		console.log(newData);
	}	
	
    convertArrayStringsToCapitalized();

    function convertArrayStringsToCapitalized() {
    const lower = data.map(element => {
        return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
        
      });
      console.log(lower)
  
  
}
// console.log(convertArrayStringsToCapitalized('roOs'));

convertArrayStringsToCapitalized()

    */
   


    Object.defineProperty(String.prototype, 'capitalizeFirstLetter', {
        value: function convertArrayStringsToCapitalized() {
            return data.charAt(0).toUpperCase() + data.slice(1);
        },
        writable: true, // so that one can overwrite it later
        configurable: true // so that it can be deleted later
    });

    convertArrayStringsToCapitalized();


