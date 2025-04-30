# Promise学习

## 基本概念

JavaScript是单线程的，因而所有的网络操作、浏览器事件等都必须异步执行。使用Ajax的异步实现复杂且不利于代码复用，Promise是为解决这一困难诞生的可以链式调用的对象。

>  原理：先统一执行AJAX逻辑，不关心如何处理结果，然后，根据结果是成功还是失败，在将来的某个时候调用`success`函数或`fail`函数。

### 状态机

Promise有三种状态：pending（初始状态，既不是成功也不是失败）fulfilled（操作成功）rejected（操作失败），只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。

一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。

### 核心作用

解决回调地狱（Callback Hell）问题，使异步代码更易读、可维护。

```javascript
// 回调地狱示例
fetchUserData(userId, function(user) {
  fetchUserPosts(user.id, function(posts) {
    fetchPostComments(posts[0].id, function(comments) {
      // 嵌套层级过深，代码可读性差
    });
  });
});

// Promise 链式调用示例
fetchUserData(userId)
  .then(user => fetchUserPosts(user.id))
  .then(posts => fetchPostComments(posts[0].id))
  .then(comments => {
    // 代码扁平化，逻辑清晰
  });
```

## 常用API

### 构造函数

```javascript
new Promise((resolve, reject) => {
  // 执行异步操作
  if (/* 操作成功 */) {
    resolve(value); // 将 Promise 状态变为 fulfilled
  } else {
    reject(error);  // 将 Promise 状态变为 rejected
  }
});
```

### 实例方法

- **then(onFulfilled, onRejected)**

  - `onFulfilled`：Promise 成功时的回调。
  - `onRejected`：Promise 失败时的回调（可选）。
  - 返回一个新的 Promise，可链式调用。


- **catch(onRejected)**
  - 等价于 `then(null, onRejected)`，用于捕获 Promise 的错误。
- **finally(onFinally)**
  - 无论 Promise 状态如何都会执行，不接收参数。
  - 返回一个新的 Promise，状态与原 Promise 一致。

### 静态方法

- **Promise.resolve(value)**
  - 返回一个已解决的 Promise，值为 `value`。
- **Promise.reject(error)**
  - 返回一个已拒绝的 Promise，错误为 `error`。
- **Promise.all(iterable)**
  - 并行处理多个 Promise，返回一个新 Promise：
    - 所有 Promise 都成功时，结果为所有值的数组。
    - 任何一个 Promise 失败时，立即返回该错误。
- **Promise.race(iterable)**
  - 多个 Promise 竞争，返回第一个解决（无论成功或失败）的 Promise。
- **Promise.allSettled(iterable)**
  - 返回一个新 Promise，在所有 Promise 都完成（无论成功或失败）后解决，结果为包含每个 Promise 状态和值的数组。
- **Promise.any(iterable)**
  - 返回第一个成功的 Promise，若所有都失败则抛出 `AggregateError`。

## 进阶应用



### 错误处理

### 结合async/await

`async/await` 是 Promise 的语法糖，使异步代码更像同步代码：

```javascript
async function fetchData() {
  try {
    const user = await fetchUserData(userId);
    const posts = await fetchUserPosts(user.id);
    const comments = await fetchPostComments(posts[0].id);
    return comments;
  } catch (error) {
    console.error('Error:', error);
  }
}
```

## 案例解析

### 记载图片

将图片的加载写成一个`Promise`，一旦加载完成，`Promise`的状态就发生变化。

```javascript
const preloadImage = function (path) {
  return new Promise(function (resolve, reject) {
    const image = new Image();
    image.onload  = resolve;
    image.onerror = reject;
    image.src = path;
  });
};
```

### 超时控制

带超时控制的 `fetch` 请求，通过 `Promise.race` 方法让两个 Promise 竞争，先完成的 Promise 决定最终结果。

```javascript
function fetchWithTimeout(url, timeout) {
  return Promise.race([
    fetch(url),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('请求超时')), timeout)
    )
  ]);
}
```

缺点：如果计时器函数先执行，fetch请求只是被忽略，并没有被真正取消，可能仍然在后台继续请求，占用网络资源。

改进（引入<u>AbortController（浏览器原生 API，用于中止 DOM 请求）</u>）：

```javascript
function fetchWithTimeout(url, timeout) {
  const controller = new AbortController();
  const signal = controller.signal;
  
  // 设置超时后中止请求
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  return Promise.race([
    fetch(url, { signal }).then(response => {
      clearTimeout(timeoutId); // 清除计时器
      return response;
    }),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('请求超时')), timeout)
    )
  ]);
}
```

### 链式调用的一个例子

```javascript
// www.javascriptcn.com code example
function asyncTask1() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('result 1');
    }, 1000);
  });
}

function asyncTask2(arg) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`${arg} -> result 2`);
    }, 1000);
  });
}

asyncTask1().then(result1 => {
  console.log(result1); // result 1
  return asyncTask2(result1);
}).then(result2 => {
  console.log(result2); // result 1 -> result 2
});
```

