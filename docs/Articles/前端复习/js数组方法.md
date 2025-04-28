# JavaScript数组方法

参考自CSDN：[青松pine](https://blog.csdn.net/qq_43223007)：[JavaScript中的数组方法总结+详解](https://blog.csdn.net/qq_43223007/article/details/110201463)

## 数组方法总结：

| 顺序 | 方法名        | 功能                                                         | 返回值                                             | 是否改变原数组 | 版本 |
| ---- | ------------- | ------------------------------------------------------------ | -------------------------------------------------- | -------------- | ---- |
| 1    | push()        | (在结尾)向数组添加一或多个元素                               | 返回新数组长度                                     | Y              | ES5- |
| 2    | unshift()     | （在开头)向数组添加一或多个元素                              | 返回新数组长度                                     | Y              | ES5- |
| 3    | pop()         | 删除数组的最后一位                                           | 返回被删除的数据                                   | Y              | ES5- |
| 4    | shift()       | 移除数组的第一项                                             | 返回被删除的数据                                   | Y              | ES5- |
| 5    | reverse()     | 反转数组中的元素                                             | 返回反转后数组                                     | Y              | ES5- |
| 6    | sort()        | 以字母顺序(字符串Unicode码点)对数组进行排序                  | 返回新数组                                         | Y              | ES5- |
| 7    | splice()      | 在指定位置删除指定个数元素再增加任意个数元素 （实现数组任意位置的增删改) | 返回删除的数据所组成的数组                         | Y              | ES5- |
| 8    | concat()      | 通过合并（连接）现有数组来创建一个新数组                     | 返回合并之后的数组                                 | N              | ES5- |
| 9    | join()        | 用特定的字符,将数组拼接形成字符串 (默认",")                  | 返回拼接后的字符串                                 | N              | ES5- |
| 10   | slice()       | 裁切指定位置的数组                                           | 被裁切的元素形成的数组                             | N              | ES5- |
| 11   | toString()    | 将数组转换为字符串                                           | 字符串                                             | N              | ES5- |
| 12   | valueOf()     | 查询数组原始值                                               | 数组的原始值                                       | N              | ES5- |
| 13   | indexOf()     | 查询某个元素在数组中第一次出现的位置                         | 存在该元素,返回下标,不存在 返回 -1                 | N              | ES5- |
| 14   | lastIndexOf() | 反向查询数组某个元素在数组中第一次出现的位置                 | 存在该元素,返回下标,不存在 返回 -1                 | N              | ES5- |
| 15   | forEach()     | (迭代) 遍历数组,每次循环中执行传入的回调函数                 | 无/(undefined)                                     | N              | ES5- |
| 16   | map()         | (迭代) 遍历数组, 每次循环时执行传入的回调函数,根据回调函数的返回值,生成一个新的数组 | 有/自定义                                          | N              | ES5- |
| 17   | filter()      | (迭代) 遍历数组, 每次循环时执行传入的回调函数,回调函数返回一个条件,把满足条件的元素筛选出来放到新数组中 | 满足条件的元素组成的新数组                         | N              | ES5- |
| 18   | every()       | (迭代) 判断数组中所有的元素是否满足某个条件                  | 全都满足返回true 只要有一个不满足 返回false        | N              | ES5- |
| 19   | some()        | (迭代) 判断数组中是否存在,满足某个条件的元素                 | 只要有一个元素满足条件就返回true,都不满足返回false | N              | ES5- |
| 20   | reduce()      | (归并)遍历数组, 每次循环时执行传入的回调函数,回调函数会返回一个值,将该值作为初始值prev,传入到下一次函数中 | 最终操作的结果                                     | N              | ES5- |
| 21   | reduceRight() | (归并)用法同reduce,只不过是从右向左                          | 同reduce                                           | N              | ES5- |
| 22   | includes()    | 判断一个数组是否包含一个指定的值.                            | 是返回 true，否则false                             | N              | ES6  |
| 23   | Array.from()  | 接收伪数组,返回对应的真数组                                  | 对应的真数组                                       | N              | ES6  |
| 24   | find()        | 遍历数组,执行回调函数,回调函数执行一个条件,返回满足条件的第一个元素,不存在返回undefined | 满足条件第一个元素/否则返回undefined               | N              | ES6  |
| 25   | findIndex()   | 遍历数组,执行回调函数,回调函数接受一个条件,返回满足条件的第一个元素下标,不存在返回-1 | 满足条件第一个元素下标,不存在=>-1                  | N              | ES6  |
| 26   | fill()        | 用给定值填充一个数组                                         | 新数组                                             | Y              | ES6  |
| 27   | flat()        | 用于将嵌套的数组“拉平”，变成一维的数组。                     | 返回一个新数组                                     | N              | ES6  |
| 28   | flatMap()     | flat()和map()的组合版 , 先通过map()返回一个新数组,再将数组拉平( 只能拉平一次 ) | 返回新数组                                         | N              | ES6  |
## 数组方法详解
1. **Arr.push() ：在数组最后一位添加一个或多个元素,并返回新数组的长度,改变原数组.(添加多个元素用逗号隔开)**

```        javascript
const arr = [1, 2, "c"];
console.log(arr);
const rel = arr.push("A", "B");//返回的是数组长度
console.log(arr); // [1, 2, "c", "A", "B"]
console.log(rel); //  5  (数组长度)
```
2. **Arr.unshift() ：在数组第一位添加一个或多个元素，并返回新数组的长度，改变原数组。(添加多个元素用逗号隔开)**

```javascript
const arr = [1, 2, "c"];
const rel = arr.unshift("A", "B");
console.log(arr); // [ "A", "B",1, 2, "c"]
console.log(rel); //  5  (数组长度)
```
3. **Arr.pop() ：删除数组的最后一位，并且返回删除的数据，会改变原来的数组。(该方法不接受参数,且每次只能删除最后一个)**

```javascript
const arr = [1, 2, "c"];
const rel = arr.pop();
console.log(arr); // [1, 2]
console.log(rel); // c

```
4. **Arr.shift() ：删除数组的第一位数据，并且返回被删除的数据，会改变原来的数组。(该方法不接受参数,且每次只能删除数组第一个)**
```javascript
const arr = ["a","b", "c"];
const rel = arr.shift();
console.log(arr); // ['b', "c"]
console.log(rel); // a

```
5. **Arr.reverse() 将数组的数据进行反转，并且返回反转后的数组，会改变原数组**
```javascript
const arr = [1, 2, 3, "a", "b", "c"];
const rel = arr.reverse();
console.log(arr); //    ["c", "b", "a", 3, 2, 1]
console.log(rel); //    ["c", "b", "a", 3, 2, 1]

```
6. **Arr.sort() <strong>相当重要</strong>,对原数组进行操作，会改变原来的数组**

如果单纯使用sort()不加任何参数：
```javascript
const arr1 = [10, 1, 5, 2, 3];
arr1.sort();
console.log(arr1);//1，10，2，3，5
```
得到的结果并不是有序的（按照unicode排列），因此经常配合参数及语法使用：
```javascript
//正序排列
const arr = [10, 1, 5, 2, 3];
arr.sort(function (a, b) {
return a - b;
});
console.log(arr);//1,2,3,5,10
```
```javascript
//倒序排列
const arr = [10, 1, 5, 2, 3];
arr.sort(function (a, b) {
return b - a;
});
console.log(arr);//1,2,3,5,10
```
特殊的，可以按照某个属性进行排列：
```javascript
const arr1 = [
{ name: "老八", age: "38" },
{ name: "赵日天", age: "28" },
{ name: "龙傲天", age: "48" },
];
arr1.sort(function (a, b) {
console.log(a, b);
return b.age - a.age;//按照age属性倒序即从大到小排列
});
console.log(arr1);
```
7. **Arr.splice(index,howmany,item1,…,itemX) ：向数组中添加，或从数组删除，或替换数组中的元素，然后返回被删除/替换的元素所组成的数组。可以实现数组的增删改。**

参数：

index：必须的，且为整数（可以为负数。负数即为从数组尾部往前数），规定添加/删除元素的位置（下标位置）；

howmany：必须的，可以为从0开始的整数，规定要删除的项目数量（为0不会删除）；

item1, …, itemX：可选，向数组添加的新项目。
```javascript
const arr = ["a", "b", "c", 2, 3, 6];
const rel = arr.splice(2, 1, "add1", "add2");//删除"c",添加"add1","add2"
console.log(arr);   //改变后的原数组   
console.log(rel);	//拆下来的新数组 "c" 
```
8. **Arr.concat() ：拼接数组：如果拼接的是数组，则将数组展开,之后将数组中的每一个元素放到新数组中；如果是其他类型, 直接放到新数组中；如果不给该方法任何参数，将返回一个和原数组一样的数组（复制数组）**

```javascript
const arr1 = [1, 2, 3];
const arr2 = ["a", "b", "c"];
const arr3 = ["A", "B", "C"];
const rel = arr1.concat(arr2, arr3);
console.log(arr1); //原数组 [1, 2, 3]
console.log(rel); //新数组 [1, 2, 3 , "a", "b", "c" ,"A", "B", "C" ]

```

9. **Arr.join() ：用特定的字符,将数组拼接形成字符串 (默认",")**

```   javascript
const list = ["a", "b", "c", "d"];
let result = list.join("-");     //"a-b-c-d"
console.log(result);
result = list.join("/");     //"a/b/c/d"
console.log(result);
result = list.join("");      //"abcd"
console.log(result);
result = list.join();        //  "a,b,c,d"
console.log(result);    
```

10. **Arr.slice()：裁切指定位置的数组，返回值为被裁切的元素形成的新数组 ，<u>不改变原数组</u>**
    **同concat() 方法 slice() 如果不传参数,会使用默认值,得到一个与原数组元素相同的新数组 (复制数组)**

```javascript
const list = ["a", "b", "c", "d"];
const result = list.slice(1, 3);
console.log(result);  // ["b", "c"]
console.log(list); //['a', 'b', 'c', 'd']
```

11. **Arr.toString()：直接将数组转换为字符串,返回值是String,不改变原数组，类似于Arr.join()不添加任何参数，得到的是引号包裹的字符串**

```javascript
const list = ["a", "b", "c", "d"];
const rel = list.toString();
console.log(rel);   // "a,b,c,d"   (字符串类型，不是数组)
console.log(list);  // ['a', 'b', 'c', 'd']
```

12. **Arr.valueOf()：返回数组的原始值（一般情况下其实就是数组自身）**

```javascript
const list = [1, 2, 3, 4];
const rel = list.valueOf();
console.log(list); // [1, 2, 3, 4]
console.log(rel); // [1, 2, 3, 4]
```

[关于toString()和valueOf()](https://segmentfault.com/a/1190000025126691)

13. **Arr.lastIndexOf()：查询某个元素在数组中最后一次出现的位置 (或者理解为反向查询第一次出现的位置) 存在该元素,返回下标,不存在 返回 -1 (可以通过返回值 变相的判断是否存在该元素)**

```javascript
const list = [1, 2, 3, 4];
let index = list.lastIndexOf(4); //3
console.log(index);
index = list.lastIndexOf("4"); //-1
console.log(index);
```

14. **Arr.indexOf()：查询某个元素在数组中第一次出现的位置 存在该元素,返回下标,不存在 返回 -1 (可以通过返回值 变相的判断是否存在该元素)**

```javascript
const list = [1, 2, 3, 4];
let index = list.indexOf(4); //3
console.log(index);
index = list.indexOf("4"); //-1
console.log(index);
```

15. **Arr.forEach()：遍历数组,每次循环中执行传入的回调函数 。没有返回值,或理解为返回值为undefined,不改变原数组。**

语法:

```javascript
arr[].forEach(function(value,index,array){
　 　//do something
})
```

```javascript
const list = [32, 93, 77, 53, 38, 87];
const res = list.forEach(function (item, index, array) {
  console.log(item, index, array);
});
console.log(res);
// 32 0 [32, 93, 77, 53, 38, 87]
// 93 1 [32, 93, 77, 53, 38, 87]
// 77 2 [32, 93, 77, 53, 38, 87]
// 53 3 [32, 93, 77, 53, 38, 87]
// 38 4 [32, 93, 77, 53, 38, 87]
// 87 5 [32, 93, 77, 53, 38, 87]
```

16. **Arr.map()：遍历数组, 每次循环时执行传入的回调函数,根据回调函数的返回值,生成一个新的数组 ,**
    **同forEach() 方法,但是map()方法有返回值,可以return出来**

语法：

```javascript
arr[].map(function(item,index,array){
　　//do something
　　return XXX
})
```

用法：

```javascript
const list = [32, 93, 77, 53, 38, 87];
const res = list.map(function (item, index, array) {
    return item + 5 * 2;
});
console.log("原数组", list); //[32, 93, 77, 53, 38, 87]
console.log("新数组", res); //[42, 103, 87, 63, 48, 97]
```

17. **Arr.filter()：遍历数组, 每次循环时执行传入的回调函数,回调函数返回一个条件,把满足条件的元素筛选出来放到新数组中。**

语法：

```javascript
arr[].filter(function(item,index,array){
　　//do something
　　return XXX //条件
})
```

参数： item:每次循环的当前元素, index:当前项的索引, array:原始数组

用法：

```javascript
const list = [32, 93, 77, 53, 38, 87];
const resList = list.filter(function (item, index, array) {
    return item >= 60; // true || false
});
console.log(resList);//[93, 77, 87]
```

18. **Arr.every()：遍历数组, 每次循环时执行传入的回调函数,回调函数返回一个条件,全都满足返回true 只要有一个不满足 返回false => <u>判断数组中所有的元素是否满足某个条件</u>**

```javascript
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

19. **Arr.some()：遍历数组, 每次循环时执行传入的回调函数,回调函数返回一个条件,只要有一个元素满足条件就返回true,都不满足返回false => <u>判断数组中是否存在满足某个条件的元素</u>**

```javascript
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10); // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

20. **Arr.reduce()：遍历数组, 每次循环时执行传入的回调函数,回调函数会返回一个值,将该值作为初始值prev,传入到下一次函数中, 返回最终操作的结果**

语法：

```javascript
arr.reduce( function(prev,item,index,array){
    
} , initVal)
```

用法1：不设置初始值的累加（不设置初始值跳过第一次循环，prev默认等于第一个值）

```javascript
const arr = [2, 3, 4, 5];
let sum = arr.reduce(function (prev, item, index, array) {
    console.log(prev, item, index, array);
    return prev + item;
});
console.log(arr, sum);
```

用法2：设置初始值的累加

```javascript
const arr = [2, 3, 4, 5];
let sum = arr.reduce(function (prev, item, index, array) {
  console.log(prev, item, index, array);
  return prev + item;
}, 0);//设置0为初始值，最终结果相同，但多循环一次
console.log(arr, sum);
```

21. **Arr.reduceRight()：用法和reduce()相同，但从右向左累加**
22. **Arr.includes()：用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false。**

```javascript
const site = ['runoob', 'google', 'taobao'];
site.includes('runoob'); // true 
site.includes('baidu'); // false
```

23. **Arr.from()：将一个类数组对象或者可遍历对象转换成一个真正的数组**

将一个类数组对象转换为一个真正的数组，必须具备以下条件：

（1）该 伪数组 / 类数组 对象必须具有length属性，用于指定数组的长度。如果没有length属性，那么转换后的数组是一个空数组。
（2）该 伪数组 / 类数组 对象的属性名必须为数值型或字符串型的数字

```javascript
let all = {
  0: "张飞",
  1: "28",
  2: "男",
  3: ["率土", "鸿图", "三战"],
  length: 4,
};
let list = Array.from(all);
console.log(all);
console.log(list, Array.isArray(list));
```

24. **Arr.find()：遍历数组 每次循环 执行回调函数,回调函数接受一个条件 返回满足条件的第一个元素,不存在则返回undefined**

参数：
item:必须 , 循环当前元素
index:可选 , 循环当前下标
array:可选 , 当前元素所属的数组对象

用法：

```javascript
const list = [55, 66, 77, 88, 99, 100];
let res= list.find(function (item, index, array) {
  return item > 60;
});
console.log(res); //66
```

```javascript
  //快速查找对象数组满足条件的项
  let arr = [{ id: 1, name: 'coco' }, { id: 2, name: 'dudu' }]
  let res = arr.find(item => item.id == 1)//箭头函数简写
  console.log('res', res)  //res {id: 1, name: "coco"}
```

相较于filter：find返回第一个匹配的单个元素；filter返回所有匹配元素组成的数组。

25. **Arr.findIndex()：遍历数组,执行回调函数,回调函数接受一个条件,返回满足条件的第一个元素下标,不存在则返回-1**

参数：
item:必须 , 循环当前元素
index:可选 , 循环当前下标
array:可选 , 当前元素所属的数组对象

```javascript
const list = [55, 66, 77, 88, 99, 100];
let index = list.findIndex(function (item, index, array) {
  console.log(item, index, array);
  return item > 60;
});
console.log(index); // 1
```

```javascript
//快速查找对象数组满足条件的索引，indexOf不支持
let arr = [{ id: 1, name: 'coco' }, { id: 2, name: 'dudu' }]
let res = arr.findIndex(item => item.id == 1)
console.log('res', res)  //res 0
```



相较于indexOf：indexOf是传入一个值.找到了也是返回索引,没有找到也是返回-1 ,属于ES5；findIndex是传入一个测试条件,也就是函数,找到了返回当前项索引,没有找到返回-1. 属于ES6

26. **Arr.fill()：用给定值填充一个数组**

参数：
value 必需。填充的值。
start 可选。开始填充位置。
end 可选。停止填充位置 (默认为 array.length)

```javascript
 const result = ["a", "b", "c"].fill("填充", 1, 2);//["a", "填充", "c"]
```

27. **Arr.flat()：用于将嵌套的数组"拉平",变成一维的数组。该方法返回一个新数组，对原数据没有影响。**

```javascript
const list = [1, 2, [3, 4, [5]]];
const arr = list.flat(); // 默认拉平一次
console.log("拉平一次", arr);//[1, 2, 3, 4, [5]]

const arr = list.flat(2); // 拉平2次
console.log("拉平两次", arr);//[1, 2, 3, 4, 5]
```

28. **Arr.flatMap()： flat()和map()的组合版 , 先通过map()返回一个新数组,再将数组拉平( 只能拉平一次 )**

```javascript
const list = [55, 66, 77, 88, 99, 100];
const newArr = list.map(function (item, index) {
    return [item, index];
});
console.log("Map方法:", newArr);
const newArr2 = list.flatMap(function (item, index) {
    return [item, index];
});
console.log("flatMap方法:", newArr2);
```

输出结果：

```javascript
Map方法: [
  [55, 0], [66, 1], [77, 2], 
  [88, 3], [99, 4], [100, 5]
]
flatMap方法: [
  55, 0, 66, 1, 77, 2, 
  88, 3, 99, 4, 100, 5
]
```