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

Array.prototype.forEach2 = function (callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index))
            callback(this[index],index,this);
    }
}


courses.forEach2((course, index, arr) => {
    console.log(index, course, arr);
})
