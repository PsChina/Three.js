## 第一个 3D 场景

创建项目
```bash
mkdir first-scene
cd first-scene
npm init -y
```
新建html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            margin: 0;
        }
    </style>
</head>
<body>
    <script type="module">
        import * as THREE from "https://esm.sh/three@0.174.0/build/three.module.js";

        console.log(THREE);
    </script>
</body>
</html>
```

跑一下

```bash
npx live-server
```

还可以这样写：
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            margin: 0;
        }
    </style>
</head>
<body>
    <script type="importmap">
    {
        "imports": {
            "three": "https://esm.sh/three@0.174.0/build/three.module.js"
        }   
    }
    </script>
    <script type="module">
        import * as THREE from "three";

        console.log(THREE);
    </script>
</body>
</html>
```
然后安装下 three 的类型包：
```bash
npm install --save-dev @types/three
```
这样写代码就有类型提示了,当某个 api 不会用，可以点进去看看它的类型。

而且，类型上还有文档链接,可以直接点开查看这个 api 的文档。
默认是英文文档的链接，点击这里切换成中文就好.