
let arr = new Array(1, 2, 2, 3, 4, 4, 5);

function distinct_1(arr) {
  return Array.from(new Set(arr));
}

console.log(distinct_1(arr));


function distinct_2(arr) {
  // 过滤出 第一次出现的下标位置 === 下标位置
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(distinct_2(arr));