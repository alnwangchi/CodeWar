/*
You need to return a string that looks like a diamond shape
when printed on the screen, using asterisk (*) characters. 
Trailing spaces should be removed, 
and every line must be terminated with a newline character (\n).

ex : 
diamond(3)
 *
***
 *

diamond(5)
  *
 ***
*****
 ***
  *

*/

// 輸入數字必須是奇數
// 數字多大 就有幾行字 且 每行的字元數就多少
// 中間行全是 * 呈上下對稱遞減 -2 的的 * 以空白取代
// 噴出來的結果會是字串 用 \n 跳行

// 字串操作 or 弄成陣列最後 join ?

// 回傳絕對值 Math.abs()，透過此方式讓上下的判斷一致對稱


function diamond(n){
  if( n < 0 || n % 2 == 0) return  // 排除
  let diam = '' 
  let middleLine = (n+1)/2 // 取得中間行

  for (let i = 1; i <= n; i++) {
    const sub = Math.abs(i - middleLine)
    diam += ' '.repeat(sub) + '*'.repeat(n - sub * 2) + ' '.repeat(sub) + '\n'
  }
  
  return diam;
}


function diamond2(n){
  if( n < 0 || n % 2 == 0) return  // 排除
  let diam = '' 
  let middleLine = (n+1)/2 // 取得中間行

  for (let i = 1; i <= n; i++) {
    const sub = Math.abs(i - middleLine)
    diam += ' '.repeat(sub) + '*'.repeat(n - sub * 2) + '\n'
  }
  
  return diam;
}

console.log(diamond(3));
console.log(diamond2(3));

// 兩種差別在每行後半段是否有空白字元存在 一有二無