// Declaring different variables of different data types
let space = ' '
let firstName = 'Bùi Ngọc'
let lastName = 'Tuấn'
let country = 'VietNam'
let city = 'Đồng Nai'
let language = 'JavaScript'
let job = 'Dev'
let age = 21
// Concatenating using addition operator
let fullName = firstName + space + lastName // concatenation, merging two string together.
console.log(fullName)

let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country // ES5
console.log(personInfoOne)
// Concatenation: Template Literals(Template Strings)
let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city} provide, ${country}. I am a ${job}. I learn ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)