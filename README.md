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

## 主题替换

- yarn add sass-resources-loader --dev
- loader配置sass-resources-loader替换base.scss变量

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
