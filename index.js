const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

  

function titleCased() {
  let tutorial;
  let newArray = [];

  for(let i = 0; i < tutorials.length; i++) {
     tutorial = tutorials[i].split(' ');
    // Split the tutorials array into separate strings

    for(let i = 0; i < tutorial.length; i++) {
      tutorial[i] = (tutorial[i][0].toUpperCase() + tutorial[i].slice(1));
    }
    // Here I looped through each of the individuals strings in the 
    // tutorial title array, making each index have its first index as .toUpperCase
    // and the rest of the index as is.


    tutorial = tutorial.join(' '); 
    newArray.push(tutorial);
    // I then joined each of the strings in the tutorial array and .pushed them 
    // into a new array.
  }
  
  return newArray;
  // Here I returned the new array
}
titleCased();
  
