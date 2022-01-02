/*
Reverse every other word in a given string, 
then return the string. Throw away any leading or trailing whitespace, 
while ensuring there is exactly one space between each word. 
Punctuation marks should be treated as if they are a part of the word in this kata.

簡單題
一長串字串用空白分開後 奇數位正常 偶數為相反 拼回長字串
*/


function reverse(str){
  if(str.trim().length < 1) return ''
  return str.split(' ')
            .map((s, index) => {
              if(index % 2 !== 0){
                return s.split('').reverse().join('')
              }else {
                return s
              }
            })
            .join(' ')
}

// one-liner
const reverse2 = str => str.trim().split(' ').map((itm,idx) => idx % 2 !== 0 ? itm.split('').reverse().join('') : itm).join(' ')


let test = "Reverse this string, please!"
let test2 = ''
console.log(reverse(test));
console.log(reverse2(test));
console.log(reverse(test2));
