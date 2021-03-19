var courses = [
    'Javascript',
    'PHP',
    'Ruby'
]





// Array.prototype.map2 = function (callback) {
//     var arrLength = this.length;
//     let arr = [];
//     for (let i = 0; i < arrLength; i++) {
//         let value = callback(this[i], i);
//         arr.push(value);
//     }
//     return arr;
// }

// let html = courses.map2(function (course, index) {
//     return `<h2>${course}</h2>`;
// });

// console.log(html.join('\n'));

// a callback function, the function could be any name

// Array.prototype.forEach2 = function (callback) {
//     for (var index in this) {
//         if (this.hasOwnProperty(index))
//             callback(this[index], index, this);
//     }
// }


// courses.forEach2((course, index, arr) => {
//     console.log(index, course, arr);
// })

const scores = [
    { name: 'Awakened', score: 95 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
]

// Array.prototype.filter2 = function (callback) {
//     const array = [];
//     for (const index in this) {
//         if (this.hasOwnProperty(index)) {
//             let result = callback(this[index], index, this);
//             if(result)
//                 array.push(this[index])
//         }
//     }

//     return array;
// }

// callback = function(){}


// const scoreGreaterEight = scores.filter2(function (score, index, array) {
//     return score.score > 80
// })

// console.log(scoreGreaterEight)

const names = ['tuan', 'tuan', 'tuan', 'tuan']
const bools = [true, true, true, true]

Array.prototype.some2 = function (callback) {
    for (const index in this) {
        if (this.hasOwnProperty(index)) {
            const result = callback(this[index], index, this);
            if (result) {
                return result;
            }
        }
    }
    return false;
}

Array.prototype.every2 = function (callback) {
    for (const index in this) {
        if (this.hasOwnProperty(index)) {
            const result = callback(this[index], index, this);
            if (!result) {
                return false;
            }
        }
    }
    return true;
}

let result = scores.every2((value, index, arr) => value.score > 40);
// console.log(result);

Array.prototype.reduce2 = function (myCallback, initialValue) {
    if (initialValue == undefined) {
        initialValue = 0;
    }
    var total = initialValue;
    for (const item of this) {
        total = myCallback(total, item,this[item],this);
    }
    return total;
}

result = scores.reduce2((accumulate,currentValue,index,array) => {
    console.table({
        'accumulate':accumulate,
        'currentValue':currentValue,
        'total':accumulate+currentValue.score,
    })
    console.log(array)
    return accumulate+currentValue.score
},0)

console.log(result)