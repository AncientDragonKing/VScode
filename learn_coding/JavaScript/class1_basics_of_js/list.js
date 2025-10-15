//宣告陣列:
let fruits = ['蘋果', '香蕉', '橘子'];
console.log(fruits);

console.log('---------------------------------------------------')

//陣列可以放不同型別的資料:
let mixedArray = [42, '文字', true, null, undefined, {name: '物件'}, [1, 2, 3]];
console.log(mixedArray);

console.log('---------------------------------------------------')

//存取陣列元素:
console.log(fruits[0]); // 第幾項
console.log(mixedArray[5].name); // 物件的屬性
console.log(mixedArray[6][1]); // 內部陣列的元素

console.log('---------------------------------------------------')

//陣列長度:
console.log(fruits.length); // =python的 len(fruits)

console.log('---------------------------------------------------')

//陣列方法:
fruits.push('葡萄'); // 在陣列末尾添加元素, python 是 append()
console.log(fruits);
let lastFruit = fruits.pop(); // 移除並返回(傳回)陣列末尾的元素
console.log(lastFruit);
console.log(fruits);
fruits.shift(); // 移除並返回陣列開頭的元素
console.log(fruits);
fruits.unshift('草莓'); // 在陣列開頭添加元素
console.log(fruits);

console.log('---------------------------------------------------')

//迴圈遍歷陣列:
for (let i = 0; i < fruits.length; i++) {// ++ 是遞增1
    console.log(i);
    console.log(fruits[i]);
}
console.log('---------------------------------------------------')
// for...of 迴圈
for (let fruit of fruits) { // = python 的 for fruit in fruits:
  console.log(fruit);
}
console.log('---------------------------------------------------')
fruits.forEach(fruit => console.log(fruit));//簡潔的寫法
//forEach 找出每一個元素，然後做某件事