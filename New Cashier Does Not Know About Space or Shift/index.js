/*
Some new cashiers started to work at your restaurant.

They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

All the orders they create look something like this:

"milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

Their preference is to get the orders as a nice clean string with spaces and capitals like so:

"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

The kitchen staff expect the items to be in the same order as they appear in the menu.

menu list
1. Burger
2. Fries
3. Chicken
4. Pizza
5. Sandwich
6. Onionrings
7. Milkshake
8. Coke

將連續字串改寫成大寫開頭 + 空白分隔
依照 menu list 順序排列 可重複
*/

// 將字串依照菜單插入字元分隔拆成陣列 要用什麼方法拆? search() indexOf() includes() slice(beginIndex, endIndex) match() regex
// 首字母改大寫
// 依序排列後 join()

const menu = ["Burger","Fries","Chicken","Pizza","Sandwich","Onionrings","Milkshake","Coke"]
const lowercaseMenu = menu.map(menuItem => menuItem.toLocaleLowerCase())

function getOrder(input) {
  // 製作比對的正則 i = 不分大小寫 g = 全部比對
  const regex = new RegExp(lowercaseMenu.join("|"),"g")
  // 將傳入字串依正則比對後回傳一個陣列
  const list = input.match(regex)
  // 陣列排序 依照 lowercaseMenu 的 index 排列
  const result = list.sort((food, foodNext) => lowercaseMenu.indexOf(food) - lowercaseMenu.indexOf(foodNext))
  // 將排序好陣列的第一個字母改為大寫 作法為 切出第一個字改大寫 加上 切出第二字以後的字 接起來
  const resultToUpperCase = result.map(food => food.slice(0,1).toUpperCase() + food.slice(1))
  // 用空白合併成所需結果
  return resultToUpperCase.join(' ')
}

const test = "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

console.log(getOrder(test));
// expect "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

// console.log(test.indexOf("pizza"));

// console.log(menu.join("|")); // "|" 在正規中代表 or 也就是前後的字串都可以比對

// console.log(test.match(new RegExp(menu.join("|"), "ig")));

/*
note here

match() 傳入一個正則 用來比對字串中符合條件的內容後回傳陣列

*/