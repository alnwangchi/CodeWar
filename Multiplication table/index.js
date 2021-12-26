/*
Your task, is to create NxN multiplication table, of size provided in parameter.
for example, when given size is 3:
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
*/

// 一個二維陣列，長度由輸入整數決定
// 裡面的陣列第一個為 [1,2,3] 之後長度相同內容為乘上輸入整數的結果


multiplicationTable = function(size) {
  const result = [];
  if(size < 1 || typeof size !== 'number') return result; // 排除無結果情況

  const refArr = [1,2,3]

  for (let i = 0; i < size; i++) {
    result.push(refArr.map(n => n*(i+1)))
  }
  return result
}

multiplicationTable2 = function(size) {
  let result = [];

  for (let i = 0; i < size; i++) {
    result[i] = [];
    for(let j = 0; j < size; j++) {
      result[i][j] = (i + 1) * (j + 1);
    }
  }
  
  return result
}


console.log(multiplicationTable(4));
console.log(multiplicationTable2(4)); // 第二個才對


