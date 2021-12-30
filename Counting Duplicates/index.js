/*
Write a function that will return the count of distinct case-insensitive alphabetic characters 
and numeric digits that occur more than once in the input string. 
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

ex: 
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

// 情況已限定在只會有字母及數字
*/

// 先將字串轉為小寫方便統計
// 全部字元出現不超過一次回傳 0
// 回傳出現過兩次以上的字元總數
// 如何紀錄出現次數 用物件?


function duplicateCount(text){
  const lowwerTextAyyay = text.toLocaleLowerCase().split('') // 轉小寫拆成陣列
  const counter = {} // 紀錄用

  lowwerTextAyyay.forEach((a) => {
    counter[a] = (counter[a] || 0 ) + 1 // 遍歷陣列並記錄
  })

  let getValue = Object.values(counter) // 只取物件的 value 成陣列
  return getValue.filter(v => v > 1).length // 取數字大於一的長度
}

console.log(duplicateCount('aDDdsd'));


// 補充網上高手的 one-liner  字串轉小寫=>拆陣列=>排序=>轉回字串=>比對出現一個以上的字元回傳成陣列=>取長度
const duplicateCount2 = text => (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length

console.log(duplicateCount2('aDdddDdsd'));

console.log('aabcdddddefgg'.match(/([^])\1+/g));
// [^] matches any character, including newline
// \1 matches the same text as most recently matched by the 1st capturing group
// + matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)