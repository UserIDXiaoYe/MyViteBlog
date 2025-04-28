# pinia学习记录

## pinia引入

1. 使用包管理器下载pinia

```
npm install pinia
```

2. 在vue项目中引入

main.ts中引入、创建、安装

```javascript
//引入pinia
import { createPinia } from 'pinia'

//创建pinia
const pinia = createPinia()

//安装pinia
app.use(pinia)
```

2. pinia使用——存储数据（相当于data）

创建store文件夹、创建ts文件存放数据

```javascript
// ./store/count.ts
import { defineStore } from "pinia";
export const useCountStore = defineStore('count',{
    //真正存储数据的地方
    state(){//state写成一个函数 返回一个对象
        return{
            sum:6
        }
    }
})
```

可以在组件中直接使用

```javascript
// ./components/Count.vue
// 引入
import {useCountStore} from '@/store/count'
//使用useCountStore 得到一个专门保存count相关的store
const countStore = useCountStore()
console.log(countStore.sum);//6
```

3. pinia使用——修改数据

pinia是“符合直觉的”状态管理库，拿到的数据可以直接修改，pinia也提供$patch批量修改，也可以借助action封装方法

```javascript
function add(){
    //第一种直接修改
    countStore.sum += 1
    //第二种批量修改 借助$patch分发碎片
    countStore.$patch({
        sum:888,
        //多个参数需要修改时适用
    })
    //第三种 action
    //逻辑复杂时适用
    countStore.increment(n.value)
}
```

使用action方法，对应的store里面要定义action（相当于method）

```javascript
//新增action
export const useCountStore = defineStore('count',{
    //放置方法 用于响应“动作”
    actions:{
        increment(value:number){
            this.sum += value
        }
    },
    //真正存储数据的地方
    state(){//state写成一个函数 返回一个对象
        return{
            sum:6
        }
    }
})
```
4. pinia使用——getters（相当于computed）

```javascript
getters:{
    bigSum(state){
        return state.sum * 10
    },
    //写成箭头函数
    bigSum:state => state.sum * 10,
    //使用this时，不能写成箭头函数
    upperSchool():string{
        return this.school.toUpperCase()
    }
}

```
getters里面this指向$state属性