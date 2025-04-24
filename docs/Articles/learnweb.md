## 学习笔记

### github删除仓库文件
github现在可以直接在网页端操作删除文件夹<br><br>
![选中“Delete directory”直接删除文件夹](./images/image.png)

### JavaScript数组方法
1. Arr.push() 在数组最后一位添加一个或多个元素,并返回新数组的长度,改变原数组.(添加多个元素用逗号隔开)
```        
        const arr = [1, 2, "c"];
        console.log(arr);
        const rel = arr.push("A", "B");//返回的是数组长度
        console.log(arr); // [1, 2, "c", "A", "B"]
        console.log(rel); //  5  (数组长度)
```
2. Arr.unshift() 在数组第一位添加一个或多个元素，并返回新数组的长度，改变原数组。(添加多个元素用逗号隔开)
```
        const arr = [1, 2, "c"];
        const rel = arr.unshift("A", "B");
        console.log(arr); // [ "A", "B",1, 2, "c"]
        console.log(rel); //  5  (数组长度)
```
3. Arr.pop() 删除数组的最后一位，并且返回删除的数据，会改变原来的数组。(该方法不接受参数,且每次只能删除最后一个)
```
    const arr = [1, 2, "c"];
    const rel = arr.pop();
    console.log(arr); // [1, 2]
    console.log(rel); // c

```
4. Arr.shift() 删除数组的第一位数据，并且返回被删除的数据，会改变原来的数组。(该方法不接受参数,且每次只能删除数组第一个)
```
    const arr = ["a","b", "c"];
    const rel = arr.shift();
    console.log(arr); // ['b', "c"]
    console.log(rel); // a

```
5. Arr.reverse() 将数组的数据进行反转，并且返回反转后的数组，会改变原数组
```
    const arr = [1, 2, 3, "a", "b", "c"];
    const rel = arr.reverse();
    console.log(arr); //    ["c", "b", "a", 3, 2, 1]
    console.log(rel); //    ["c", "b", "a", 3, 2, 1]

```
6. Arr.sort() <strong>相当重要</strong>,对原数组进行操作，会改变原来的数组

如果单纯使用sort()不加任何参数：
```
    const arr1 = [10, 1, 5, 2, 3];
    arr1.sort();
    console.log(arr1);//1，10，2，3，5
```
得到的结果并不是有序的（按照unicode排列），因此经常配合参数及语法使用：
```
    //正序排列
    const arr = [10, 1, 5, 2, 3];
    arr.sort(function (a, b) {
      return a - b;
    });
    console.log(arr);//1,2,3,5,10
```
```
    //倒序排列
    const arr = [10, 1, 5, 2, 3];
    arr.sort(function (a, b) {
      return b - a;
    });
    console.log(arr);//1,2,3,5,10
```
特殊的，可以按照某个属性进行排列：
```
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
7. Arr.splice(index,howmany,item1,…,itemX) 向数组中添加，或从数组删除，或替换数组中的元素，然后返回被删除/替换的元素所组成的数组。可以实现数组的增删改

接受的参数中，index是必须的，且为整数（可以为负数。负数即为从数组尾部往前数），规定添加/删除元素的位置（下标位置）；

howmany也是必须的，可以为从0开始的整数，规定要删除的项目数量（为0不会删除）；

item1, …, itemX	可选，向数组添加的新项目。
```
    const arr = ["a", "b", "c", 2, 3, 6];
    const rel = arr.splice(2, 1, "add1", "add2");//删除"c",添加"add1","add2"
    console.log(arr);   //改变后的原数组   
    console.log(rel);	//拆下来的新数组 "c" 
```