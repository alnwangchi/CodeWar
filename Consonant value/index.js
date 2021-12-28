/*
Given a lowercase string that has alphabetic characters only and no spaces, 
return the highest value of consonant substrings. 
Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.



每個英文字母 a-z 對應 1-26 分

傳入的字串藉由母音進行拆分

拆分後轉換分數然後回傳最高的分數
*/

// 做一個對照表
// 傳入字串用正規將 a e i o u 替換任意符號後作為斷點 split 成為陣列
// 字串陣列轉換為分數
// 最傳最大的分數

function solve(s) {
  const mapping = 'qazwsxedcrfvtgbyhnujmikolp'.split('').sort()
  const regex = /[aeiou]/g //替代正規
  // 替換字元 => 轉陣列 => 篩掉空值 => 字串再拆成陣列 => 字母對照 index 轉換成數字 => 數字加總
  const remakeS = s.replace(regex,',').split(',')
                                      .filter(i => i.length > 0)
                                      .map(word => word.split('').map(alphabet => mapping.indexOf(alphabet)+1).reduce((a,b) => a+b))
  // 回傳陣列中的最大值
  return Math.max(...remakeS)
};


console.log(solve("zodiac"));
console.log(solve("chruschtschov"));