// find
// let monsters = [
//     {
//         name: 'Cá heo',
//         attack: 150,
//         speed: 100,
//         hitpoint: 100,
//     }

// ]

// function findAMonsterByAttack(monsters) {
//     var findAttack = null;
//     findAttack = monsters.find(function (monster) {
//         return monster.attack === 150;
//     });
//     return findAttack === undefined ? null : findAttack;
// }

// console.log(findAMonsterByAttack(monsters))

// // filter
// function findStringsInArrayByKeyword(keyword, strings) {
//     return strings.filter(function (str){
//         console.log(str.indexOf(keyword))
//         return str.indexOf(keyword) > - 1;
//     })
// }

// console.log(findStringsInArrayByKeyword('PHP',['Javascript', 'PHP', 'Học PHP','Những gì cần biết khi học PHP tại nhà']))
console.log('============ How to create an array with values ===============')

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)

const arr = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] 
console.log(arr)

console.log('============ Creating an array using split ===============')

let js = 'JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript)
let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')
console.log(companies)

let txt =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')

console.log(words)

