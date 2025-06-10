# 个人博客

## 框架

```graphviz
digraph G {
    TOP[label="顶层", shape=box, style="rounded"]
    A[label="首页", shape=box, style="rounded"]
    B[label="文章", shape=box, style="rounded"]
    C[label="搜索", shape=box, style="rounded"]
    D[label="路由选择", shape=box, style="rounded"]
    E[label="文章(带分类信息)", shape=box, style="rounded"]
    F[label="个人信息", shape=box, style="rounded"]
    A -> D
    A -> E
    A -> F
    G[label="标签分类", shape=box, style="rounded"]
    B -> G
    B -> D
    H[label="搜索框，居中", shape=box, style="rounded"]
    I[label="搜索框，顶层居中", shape=box, style="rounded"]
    J[label="搜索结果", shape=box, style="rounded"]
    C -> H
    C -> I
    C -> J
    C -> D
    TOP -> A
    TOP -> B
    TOP -> C
}
```

## 编译时静态统计文章信息放入json文件。

json:
    {
        "article": number,      # 文章数量
        "tag": number,          # 标签数量
        "path": {
            tag: [path, path, ...] # 带标签的路径
        }
    }
