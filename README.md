## 简介

- vue ui 组件库

## 按需加载

- 添加babel-loader include

```js
include: [
    path.resolve(__dirname, "../src"),
    path.resolve(__dirname, "../node_modules/vue-ui-ide")
]
```

- 引入所需组件

```js
import { Test } from "vue-ui-ide"

components: {
    Test
}
```

## 全量加载

```js
import UI from "vue-ui-ide";
import "vue-ui-ide/dist/css/main.css";
Vue.use(UI);
```

## script引入

```xml
<link rel="stylesheet" type="text/css" href="/static/css/main.css" />
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vue@2.6.11"></script>
<script type="text/javascript" src="/static/main.js"></script>
<body>
    <div id="app">
        <vv-test></vv-test>
    </div>

    <script>
        new Vue({el: "#app"});
    </script>
</body>
```

## 主题替换

- yarn add sass-resources-loader --dev
- loader配置sass-resources-loader替换base.scss变量
- 注：该方法只支持按需引入使用，全量引入与script引入可通过修改main.css实现

```js
"css-loader",
"postcss-loader",
"sass-loader",
{
    loader: 'sass-resources-loader',
    options: {
        resources: [
            path.resolve(__dirname, '../src/assets/style/your-ui.scss')
        ]
    }
}
```
