/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

每個英文字母 a-z 對應 1-26 分

傳入的字串進行單字比對然後回傳總合分數最高ˋ的單字

如果同分則回傳先出現的單字
*/

// 先製作 a-z 分數對照表
// 透過空白將字串切成陣列
// 進行分數轉換 應該是要用 indexOf 然後加總
// 取出最高分數的單字 注意同分情況

function high(x){
  // 做出 a-z 陣列對照表
  const mapping = 'qazwsxedcrfvtgbyhnujmikolp'.split('').sort()
  // 字串 => 陣列
  const remakeX = x.split(' ')
  // 將每個單字再拆成陣列 => 將每個字母轉換成對照表的 index 記得 +1 => 加總起來成為分數陣列
  const remakeX2 = remakeX.map(word => word.split('').map(alphabet => mapping.indexOf(alphabet) + 1).reduce((a,b) => a + b))
  // 找出最大分數的 index 用 ... 來解構傳入陣列，剛好 indexOf 是回傳第一個被找到的 index 所以同分情況迎刃而解
  const maxIndex = remakeX2.indexOf(Math.max(...remakeX2))
  // 拿該最大的 index 再去對照是哪個單字後回傳
  return remakeX[maxIndex]
}

// 優化
function high2(x){
  const mapping = 'qazwsxedcrfvtgbyhnujmikolp'.split('').sort()
  const words = x.split(' ')
  const scores = words.map(word => word.split('').map(alphabet => mapping.indexOf(alphabet) + 1).reduce((a,b) => a + b))

  return words[scores.indexOf(Math.max(...scores))]
}

console.log(high('aaa b'));
console.log(high2('aaa bu'));

const ary = [1,5,5,2,3,4,7,2,5,1,7,5]
// console.log(ary.indexOf(7));
