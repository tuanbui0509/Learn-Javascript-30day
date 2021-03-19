// Exercises: Level 1
// const dog = {}
// dog.name = 'Bunk';
// dog.legs = 4;
// dog.color = 'red and white';
// dog.age = 12;
// dog.bark = function () {
//     return 'woof,woof';
// }

// dog.breed = 'alaska';
// dog.getDogInfo = function () {
//     console.log(dog.name)
//     console.log(dog.legs)
//     console.log(dog.color)
//     console.log(dog.age)
//     console.log(dog.breed)
//     console.log(dog.bark())
// }
// console.log(dog.getDogInfo())



const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}
const copyUser = Object.assign({}, users)
const entries = Object.entries(copyUser)
console.log(entries)
console.log(entries[0][1].skills.length)

let countSkill = entries[0][1].skills.length;
let userHasMoreSkills = entries.filter(function (user) {
    return user;
})

console.log(userHasMoreSkills)