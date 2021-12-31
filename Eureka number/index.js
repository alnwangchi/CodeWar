/*
The number 89 is the first integer with more than one digit that fulfills 
the property partially introduced in the title of this kata. 
What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, 
that may receive two integers a, b that defines the range [a, b] (inclusive) 
and outputs a list of the sorted numbers in the range that fulfills the property described above.

ex: 
sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]
sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

If there are no numbers of this kind in the range [a, b] the function should output an empty list.
sumDigPow(90, 100) == []

給定兩個參數為兩數範圍 返回之間為 Eureka 的數字
1-9 因為可以為自身x1 所以皆符合條件 接下來為 89 135 ... 需找出他的規則
用規則去遍歷兩數字範圍

Eureka 代表該數字 第一位的一次方 + 第二位的二次方 + 第三位的三次方 剛好等於 該數字

*/

// 可能需要用到 Math.pow(數字, 幾平方)

function sumDigPow(a, b) {
  // 製作範圍數字陣列
  let range = []
  for (let i = a; i <= b; i++){
    range.push(i)
  }
  // 遍歷條件判斷
  const result = range.filter(n => {
    // 符合 Eureka 的條件
    const eureka = n.toString().split('').map((n2, index) => Math.pow(n2, index + 1)).reduce((a,b) => a + b , 0)
    return n === eureka
  })
  return result
}
// 簡化版本
function sumDigPow2(a, b) {
  let range = []
  for (let i = a; i <= b; i++) range.push(i)
  return range.filter(n => n === n.toString().split('').map((n2, index) => Math.pow(n2, index + 1)).reduce((a,b) => a + b , 0))
}

console.log(sumDigPow(80, 100));
console.log(sumDigPow2(80, 190));

// console.log('1'.split(''));
// let a = 135
// console.log(a.toString().split('').map((n2, index) => Math.pow(n2, index + 1)).reduce((a,b) => a + b , 0));

// 參考網上寫法 大致做法差不多 差別在他是將符合條件的數字放入陣列後回傳 而我是從陣列中篩選
function sumDigPow3(a, b) {
  var ans = [];
  while(a <= b){
    if(a.toString().split('').reduce((x,y,i)=>x + y ** (i + 1),0) == a)
      ans.push(a);
    a++;
  }
  return ans;
}
console.log(sumDigPow3(80, 190));