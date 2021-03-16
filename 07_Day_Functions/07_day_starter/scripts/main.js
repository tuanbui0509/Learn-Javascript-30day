const courses = [
  {
    id: 1,
    name: 'HTML',
    coin: {}
  }, {
    id: 2,
    name: 'CSS',
    coin: 200
  }, {
    id: 3,
    name: 'JS',
    coin: 300
  }, {
    id: 4,
    name: 'VueJS',
    coin: 400
  }, {
    id: 5,
    name: 'ReactJS',
    coin: '{}'
  }
]

let i = 0;
var totalCoin = courses.reduce((acc, curr) => {
  if (Number(curr.coin))
    return acc + curr.coin
  else return acc
}, 0);

console.log(totalCoin);
i = 0;

totalCoin = courses.reduce((accumulator, currentValue, currentIndex, originArr) => {

  i++;

  console.table({

    'Lượt chạy: ': i,

    'Biến lưu trữ: ': accumulator,

    'Giá hiện tại: ': currentValue.coin,

    'Tổng tiền: ': accumulator + currentValue.coin

  })

  return accumulator + currentValue.coin;

}, 0);

console.log(totalCoin);

var title = ['html', 'css', 'js']
console.log(title.includes('html', -3));