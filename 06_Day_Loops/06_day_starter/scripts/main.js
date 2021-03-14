const myInfo = {
    name: 'Ngọc Tuấn',
    age: 22,
    date: '05/09/1999'
}

console.log(Object.keys(myInfo));

for (const i of Object.keys(myInfo)) {
    console.log(myInfo[i])
}