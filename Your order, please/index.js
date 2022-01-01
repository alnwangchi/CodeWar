/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

ex:
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

每個字串中都會有個數字
要將字串依照數字大小重新排列
*/

// 十分鐘內完成 我好棒
// 拆成陣列 => 依照每個元素取數字後排序 => 組回字串 完成

function order(words){
  return words.split(' ')
              .sort((a, b) => {
                const regex = /\d/g
                return a.match(regex)[0] - b.match(regex)[0]
              })
              .join(' ')
}

let test = "is2 Thi1s T4est 3a"
console.log(order(test));