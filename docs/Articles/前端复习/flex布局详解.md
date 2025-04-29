# flex布局详解

## 基本概念

1. **Flex 容器（Flex Container）**：使用 `display: flex` 或 `display: inline-flex` 的元素，是所有子元素（Flex 项目）的父容器。
2. **主轴（Main Axis）**：Flex 项目的排列方向，由 `flex-direction` 决定。
3. **交叉轴（Cross Axis）**：与主轴垂直的方向，用于对齐和换行。
4. **起点（Main Start/Cross Start）** 和 **终点（Main End/Cross End）**：主轴和交叉轴的起始和结束位置。
5. **主轴尺寸（Main Size）** 和 **交叉轴尺寸（Cross Size）**：Flex 项目在主轴和交叉轴上的宽度或高度。

----

## Flex容器属性（应用于设置了 `display: flex` 的父元素）

1. display

- `display: flex`：块级 Flex 容器。
- `display: inline-flex`：行内级 Flex 容器。

2. flex-direction（主轴方向）

```javascript
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

- `row`（默认）：水平从左到右。
- `row-reverse`：水平从右到左。
- `column`：垂直从上到下。
- `column-reverse`：垂直从下到上。

3. flex-wrap（换行规则）

```javascript
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

- `nowrap`（默认）：不换行，元素可能溢出。
- `wrap`：换行，新项目排在下一行。
- `wrap-reverse`：换行，方向相反（如从下往上）。

4. flex-flow（direction和wrap的复合属性）

```javascript
.container {
  flex-flow: <flex-direction> <flex-wrap>;
  /* 例如：flex-flow: row wrap; */
}
```

5. justify-content（主轴对齐方向）

```javascript
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}
```

- `flex-start`（默认）：元素靠主轴起点。
- `flex-end`：元素靠主轴终点。
- `center`：元素居中。
- `space-between`：两端对齐，间距均分。
- `space-around`：每个元素两侧间距相等（边缘间距为中间间距的一半）。
- `space-evenly`：所有间距完全相等。

![1745935198629](/1745935198629.png)

6. align-items（交叉轴对齐方式）

```javascript
.container {
  align-items: stretch | flex-start | flex-end | center | baseline;
}
```

- `stretch`（默认）：元素拉伸填充容器高度 / 宽度。
- `flex-start`：元素靠交叉轴起点。
- `flex-end`：元素靠交叉轴终点。
- `center`：元素居中。
- `baseline`：元素基线对齐（通常是文本底部）。

![1745935232959](/1745935232959.png)

7. align-content（多行对齐方式，仅在容器有多行时生效）

```javascript
.container {
  align-content: stretch | flex-start | flex-end | center | space-between | space-around;
}
```

- 与 `justify-content` 类似，但作用于交叉轴的多行之间。

![1745935273787](/1745935273787.png)

----

## **Flex 项目属性**（应用于 Flex 容器的直接子元素）

1. order（排列顺序）

```javascript
.item {
  order: <integer>; /* 默认值为0，数值越小越靠前 */
}
```

2. flex-grow（放大比例）

```javascript
.item {
  flex-grow: <number>; /* 默认值为0，不放大 */
}
```

- 若所有项目的 `flex-grow` 为 1，则平均分配剩余空间。
- 若某项目为 2，其他为 1，则该项目获得的剩余空间是其他项目的 2 倍。

![1745934985579](/1745934985579.png)

3. flex-shrink（缩小比例）

```javascript
.item {
  flex-shrink: <number>; /* 默认值为1，空间不足时会缩小 */
}
```

- 若某项目的 `flex-shrink` 为 0，则空间不足时不缩小。

4. flex-basis（初始大小）

```javascript
.item {
  flex-basis: <length> | auto; /* 默认值为auto，即元素的内容尺寸 */
}
```

- 若设置为 `0`，则不考虑内容尺寸；若设置为 `auto`，则根据内容调整。

5. flex（grow，shrink，basis的复合属性）

```javascript
.item {
  flex: <flex-grow> <flex-shrink> <flex-basis>;
  /* 常用简写：
   * flex: 1  →  flex: 1 1 0;
   * flex: auto  →  flex: 1 1 auto;
   * flex: none  →  flex: 0 0 auto;
   */
}
```

6. align-self（单独对齐方式，和align-items属性值相同）

```javascript
.item {
  align-self: auto | stretch | flex-start | flex-end | center | baseline;
}
```

- 覆盖容器的 `align-items` 设置，允许单个项目单独对齐。

![1745935354272](/1745935354272.png)

----

## 典型应用场景

### 水平/垂直居中

```javascript
.container {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center;     /* 垂直居中 */
}
```

### 等高列布局

```javascript
.container {
  display: flex;
}
.item {
  flex: 1; /* 所有项目平均分配空间，高度自动相等 */
}
```

### 自适应导航栏

```javascript
.container {
  display: flex;
}
.sidebar {
  flex: 0 0 200px; /* 固定宽度 */
}
.main {
  flex: 1; /* 自动填充剩余空间 */
}
```

### 圣杯布局

```javascript
.container {
  display: flex;
}
.sidebar {
  flex: 0 0 200px; /* 固定宽度 */
}
.main {
  flex: 1; /* 自动填充剩余空间 */
}
```

### 响应式卡片网格

```javascript
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* 项目间距 */
}
.card {
  flex: 1 1 calc(33.33% - 20px); /* 每行3个卡片，减去间距 */
}
```

----

本篇参考：[CSS Flexbox Layout Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)、[flexboxfroggy](https://flexboxfroggy.com/)、[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)







