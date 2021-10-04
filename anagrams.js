let words = [
  'rope',
  'pore',
  'repo',
  'red rum',
  'murder',
  'listen',
  'silent',
  'endeavour',
];

// object to be used to create the different arrays of anagrams by key/value pairs
let obj = {};

function anagrams(array) {

  for (let i = 0; i < array.length; i++) {
    // split each string into array in order to sort the character and then joining them back in an alphabetical ordered string
    // filter() was used to exclude spaces before join the characters
    let key = array[i].split('').filter(char => char !== ' ').sort().join('');

    // check if the key is already created or not in the object, the key for each array of anagrams will be the new ordered string
    if (!obj[key]) {
      // if key does not exist, it creates the key and assign to it the element i of the words array
      obj[key] = [array[i]];
    } else {
      // if key exists, it only pushes the i element into the words array
      obj[key].push(array[i]);
    };
  };
  // converts the obj into a bidimensional array in this case, since the key values are already arrays
  return Object.values(obj);
}

// calling the function in the console and passing the words array as its parameter
console.log(anagrams(words));