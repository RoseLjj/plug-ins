# express

## app.use

app.use([path,] function [, function...])

在路径中加载中间件函数。如果没有指定路径，默认值为“/”。

```
路由将匹配任何路径，其路径后面紧跟着一个“/”。例如：app.use（'/ apple'，...）将匹配“/ apple”，“/ apple / images”，“/ apple / images / news”等等。
```

```

```