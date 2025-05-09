# CSS属性大收集

## Cursor

### cursor常用

参考自[w3c](https://www.w3school.com.cn/tiy/t.asp?f=eg_csse_cursor)

| 值        |                             描述                             |
| --------- | :----------------------------------------------------------: |
| url       | 自定义光标,末端始终定义一种普通的光标，以防没有由 URL 定义的可用光标 |
| pointer   |                            一只手                            |
| help      |                   通常是一个问号或一个气球                   |
| wait      |                           程序正忙                           |
| crosshair |                         呈现为十字线                         |
| auto      |                             自动                             |
| copy      |                           可以复制                           |
| zoom-in   |                           可以放大                           |
| grabbing  |                           正在抓取                           |
| zoom-out  |                           可以缩小                           |

### cursor进阶：修改页面鼠标图标

利用url属性值，改变在浏览器页面或浏览器特定标签上的鼠标图标。

但是Chorme浏览器对cursor:url有限制，不允许gif文件作为cursor:url()的值，此时想要实现动态鼠标光标可以借助javascript。

#### **使用 JavaScript 模拟动画光标**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .animated-cursor {
      cursor: none; /* 隐藏默认光标 */
    }
    #cursor-follower {
      position: absolute;
      pointer-events: none; /* 不干扰鼠标事件 */
      z-index: 9999;
      width: 32px;
      height: 32px;
      background-image: url('duck.gif'); /* 使用原始GIF */
      background-repeat: no-repeat;
      background-size: contain;
    }
  </style>
</head>
<body class="animated-cursor">
  <div id="cursor-follower"></div>

  <script>
    const cursor = document.getElementById('cursor-follower');
    
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = (e.clientX - 16) + 'px'; /* 居中显示 */
      cursor.style.top = (e.clientY - 16) + 'px';
    });
  </script>
</body>
</html>
```

```background-repeat: no-repeat;```使得duck不会重复，页面的gif不会有多余图像。

#### 创建多帧静态光标

```css
:root {
  --cursor-frame: 1;
}

body {
  cursor: url('duck_frame1.png'), auto;
}

/* 其他帧作为备用 */
@keyframes cursorAnimation {
  0% { cursor: url('duck_frame1.png'), auto; }
  25% { cursor: url('duck_frame2.png'), auto; }
  50% { cursor: url('duck_frame3.png'), auto; }
  75% { cursor: url('duck_frame4.png'), auto; }
}
```

## Transition

### 基本概念

`transition`是 CSS 中用于实现**平滑动画效果**的属性，允许元素的属性值在一定时间内从一个值渐变到另一个值。

1. 只能过渡**数值类型的属性**（如`width`、`opacity`、`color`）
2. 需要**触发条件**（如:hover、:focus、JavaScript 动态修改）
3. 动画过程完全由浏览器控制，性能较好

### **语法详解**

#### 单属性过度

```css
transition: property duration timing-function delay;
```

- **property**：要过渡的 CSS 属性名（如`width`、`opacity`）
- **duration**：过渡持续时间（如`2s`、`500ms`）
- **timing-function**：时间函数，控制动画速度曲线（默认`ease`）
- **delay**：延迟开始时间（可选，默认`0s`）

**示例**：鼠标悬停时宽度从 100px 变为 200px，耗时 2 秒：

```css
.box {
  width: 100px;
  transition: width 2s;
}
.box:hover {
  width: 200px;
}
```

#### 多属性过度

用逗号分隔多个过渡设置：

```css
transition: 
  width 2s,
  height 1s,
  background-color 3s;
```

**示例**：悬停时同时改变宽度、高度和颜色：

```css
.box {
  width: 100px;
  height: 100px;
  background: red;
  transition: 
    width 2s,
    height 1s,
    background-color 3s;
}
.box:hover {
  width: 200px;
  height: 150px;
  background: blue;
}
```

#### 所有属性过度

使用`all`关键字过渡所有可动画的属性：

```css
transition: all 1s;
```

- 过度使用`all`可能导致意外动画（如不希望的字体变化）
- 建议明确指定需要过渡的属性

#### 时间函数

控制动画速度随时间的变化，常用值：

| 值                      | 效果描述                                                 | 应用场景             |
| ----------------------- | -------------------------------------------------------- | -------------------- |
| `linear`                | 匀速运动                                                 | 计时器、进度条       |
| `ease-in`               | 慢速开始，逐渐加速                                       | 元素进入视图         |
| `ease-out`              | 快速开始，逐渐减速                                       | 元素离开视图         |
| `ease-in-out`           | 慢速开始和结束，中间加速                                 | 强调开始和结束的场景 |
| `cubic-bezier(n,n,n,n)` | 自定义贝塞尔曲线（如`cubic-bezier(0.1, 0.7, 1.0, 0.1)`） | 精细控制动画节奏     |
| `steps(n)`              | 分 n 步完成动画（如`steps(5)`）                          | 逐帧动画、打字效果   |

#### **延迟（Delay）**

指定过渡开始前的等待时间：

```css
transition: width 2s 1s; /* 延迟1秒后开始2秒的宽度过渡 */
```

### **触发过渡的方式**

```css
/* 1. 伪类触发 */
.element:hover { ... }
.element:focus { ... }

/* 2. 状态切换（结合JavaScript） */
.element.active { ... }

/* 3. 媒体查询触发（响应式设计） */
@media (max-width: 768px) { ... }
```

### **常见可过渡属性**

- 尺寸：`width`、`height`、`margin`、`padding`、`border-width`
- 位置：`left`、`top`、`right`、`bottom`、`transform`
- 透明度：`opacity`
- 颜色：`color`、`background-color`、`border-color`
- 阴影：`box-shadow`
- 其他：`font-size`、`rotate`、`scale`、`filter`等

**优先使用`transform`和`opacity`进行过渡，因为它们不会触发重排（reflow），性能更好：**

```css
.box {
  transition: transform 0.5s, opacity 0.5s;
}
.box:hover {
  transform: translateX(20px);
  opacity: 0.8;
}
```

### 卡片悬浮案例

```css
<style>
  .card {
    width: 200px;
    height: 250px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: 
      transform 0.3s ease-out,
      box-shadow 0.3s ease-out;
  }
  
  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }
</style>

<div class="card">
  <!-- 卡片内容 -->
</div>
```

## @keyframe **- 动画关键帧**

`@keyframes` 用于定义 CSS 动画的关键帧，允许元素在动画过程中在多个状态之间平滑过渡。它需要配合 `animation` 属性才能应用到元素上。

### **基本语法**

```css
@keyframes 动画名称 {
  0% { /* 初始状态 */ }
  50% { /* 中间状态 */ }
  100% { /* 结束状态 */ }
}
```

- **百分比**：表示动画进度（0%= 开始，100%= 结束）
- **别名**：`from` 等价于 `0%`，`to` 等价于 `100%`

###  **关键帧属性**

在关键帧中，可以定义任意可动画的 CSS 属性，如位置、大小、颜色、透明度等：

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideRight {
  0% { transform: translateX(-50px); }
  100% { transform: translateX(0); }
}
```

### **应用动画**

使用 `animation` 属性将关键帧动画应用到元素：

```css
.element {
  animation: fadeIn 2s ease-in-out 0s infinite normal forwards;
}
```

**常用参数**：

| 参数              | 说明                                                 |
| ----------------- | ---------------------------------------------------- |
| `name`            | 动画名称（@keyframes 定义的名称）                    |
| `duration`        | 动画持续时间（如 `2s` 或 `500ms`）                   |
| `timing-function` | 时间函数（如 `ease`, `linear`, `cubic-bezier(...)`） |
| `delay`           | 延迟开始时间（如 `0.5s`）                            |
| `iteration-count` | 播放次数（如 `infinite` 无限循环）                   |
| `direction`       | 播放方向（如 `normal`, `reverse`, `alternate`）      |
| `fill-mode`       | 动画前后的样式状态（如 `forwards` 保持最终状态）     |

相较于transition的动画，@keyframe可以设置infinite无限播放或指定次数，可以定义多个关键帧，且可以自动播放或由JavaScript控制，可以实现复杂动画效果。

## @media-响应式核心

`@media` 用于根据设备特性（如屏幕宽度、高度、分辨率等）应用不同的样式，是实现响应式设计的核心工具。

### **基本语法**

```css
@media 媒体类型 and (媒体特性) {
  /* 样式规则 */
}
```

- **媒体类型**：可选值包括 `all`、`screen`、`print` 等
- **媒体特性**：常见特性如 `width`、`height`、`orientation`、`resolution` 等

### **常见媒体查询**

```css
/* 小屏幕设备（手机） */
@media (max-width: 767px) {
  .container { width: 100%; }
}

/* 中等屏幕设备（平板） */
@media (min-width: 768px) and (max-width: 991px) {
  .container { width: 750px; }
}

/* 大屏幕设备（桌面） */
@media (min-width: 992px) {
  .container { width: 970px; }
}
```

结合 `@media` 使用相对单位（如 `rem`、`em`、`%`）可以实现更灵活的布局：

```css
html {
  font-size: 16px;
}

@media (max-width: 768px) {
  html {
    font-size: 14px; /* 小屏幕使用更小的基准字体大小 */
  }
}
```

**@media**设计原则

- 采用移动优先设计（使用 `min-width`）
- 使用相对单位（如 `rem`、`%`）而非固定像素
- 定义明确的断点（如 768px、992px、1200px，不同css框架有不同断点）

