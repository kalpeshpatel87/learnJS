const languages = ['Java', 'JavaScript', 'Python', 'C++'];+

// Check the Length
console.log('Total Length of Arrays: ', languages.length);

// Check the Index
console.log('Total Index of Arrays: ', languages[2]);

// Add the Item in the Array to End
languages.push('Dart');
console.log('Dart item added (push) to the Arrays: ', languages);

// Add the Item in the Array to Start
languages.unshift('.Net');
console.log('.Net item added to the Arrays (Start): ', languages);

// Removed the Item from the Array to End
languages.pop();
console.log('Last item removed from the Arrays: ', languages);

// Removed the Item from the Array to Start
languages.shift();
console.log('First item removed from the Arrays: ', languages);