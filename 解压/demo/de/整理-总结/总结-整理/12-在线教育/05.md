# 课程笔记

## 反馈

- 多给我们补补课吧...
- 老师很美~
-  再重新理一次吧,有点乱
  +  哪儿有问题
  +  1. 模板引擎 2. babel
-  希望老师下课多在教室走动走动,有时候有问题要问老师,谢谢
- 想要找工作我们的node要达到什么水平

---

## 复习

---

## 知识点

- MongoDB
- Mongoose
- 广告管理

## MongoDB

### 存储结构

- 一个计算机上可以有一个数据库服务实例
- 一个数据服务实例上可以有多个数据库
- 一个数据库中可以有多个集合
  + 集合根据数据的业务类型划分
  + 例如用户数据、商品信息数据、广告信息数据。。。
  + 对数据进行分门别类的存储
  + 集合在 MongoDB 中就类似于数组
- 一个集合中可以有多个文档
  + 文档在 MongoDB 中就是一个 类似于 JSON 的数据对象
  + 文档对象是动态的，可以随意的生成
  + 为了便于管理，最好一个集合中存储的数据一定要保持文档结构的统一（数据完整性）


```json
{
  collection1: [
    { a: { age: 18, name: '', lsit: [], is: true } },
    { 文档2 },
    { 文档3 }
  ],

  collection2: [

  ],

  collection3: [

  ],

  collection4: [

  ],
}
```

## Mongoose

- http://mongoosejs.com/

安装：

```bash
# npm install --save mongoose
yarn add mongoose
```
