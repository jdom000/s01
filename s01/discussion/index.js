// console.log('Hello World');

/* 
	JSON
		- JavaScript Object Notation is a popular data format fro application to communicate with each other
		- it may look like a JavaScript Object but it is actually a string.
	Syntax:
		{
			"key1": "valueA",
			"key2": "valueB"
		}
		keys are wrapped in curly braces
*/
let sample = `
	{
		"name": "Katnis Everdeen",
		"age": 20,
		"address": {
			"city":"Kansas City",
			"state": "Kansas"
		}
	} `;

console.log(sample);

// Are we able to turn a JSON i


/* JSON Array*/

let sampleArr = `
[
  {
  	"email": "jasonNewsted@gmail.com",
    "password": "iplaybass1234",
    "isAdmin": false

  },
    
    
  {

    	"email": "larsDrum@gmail.com",
    	"password": "metallicaMe80",
    	"isAdmin": true
  }


  

]


`;



console.log(sampleArr);

//

let parsedSampleArr = JSON.parse(sampleArr);
console.log(parsedSampleArr.pop());
console.log(parsedSampleArr);





sampleArr = JSON.stringify(parsedSampleArr);
console.log(sampleArr);








