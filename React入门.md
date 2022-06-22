# React全家桶

## 一、React介绍

#### 1、React 的起源与发展

Fcabook内部项目，由于不满意市场上的JavascriptMVC 框架 ，就自己写了一套，与2013年5月开源

#### 2、与传统MVC的关系

不是完整的MVC框架；React 将界面分成个各个独立的小块，每一个小块都是组件，组件之间进行组合嵌套，构成页面。

#### 3、React的特性

* 声明式设计
* 高效：虚拟DOM减少与DOM的交互
* 灵活：与已知的框架很好的配合
* JSX：Javascript语法的扩展
* 组件：复用性高
* 单向响应的数据流-React实现了单项响应的数据流，减少了重复代码

#### 4、虚拟DOM

React将真实DOM树转换成Javascript对象树，也就是Virtual DOM

## 二、create-react-app

全局安装 create-react-app

```javascript
npm install -g create-react-app
```

创建项目

```javascript
npm create-react-app  myapp(项目名称)
```

如果不想全局安装，可以使用npx安装

```javascript
npx create-react-app myapp(项目名称)
```

创建的过程会安装三个东西

* react： react 的顶级库
* react-dom： web端使用  移动端使用react-native
* react-scripts：包含运行和打包react应用的所有脚本和配置

根据提示命令，即可进入项目，运行 npm start 即可运行项目

```javascript
|——README.md    	使用方法的文档
|——node_modules		所有依赖安装的目录
|——package-lock.json 	锁定配置信息，安装的包的版本
|——package.json
|——public				静态公共目录
|——src					开发用的源代码目录
```

常见问题：

* npm 安装失败

  * npm 切换为淘宝镜像

    ```
    npm install --registry=https://registry.npm.taobao.org
    ```

  * 使用yarn 安装

  * 删除package-lock 和node_modules文件，重新执行命令

  * 清除 npm缓存，

    ```
    npm cache clean --force
    npm install
    ```

## 三、编写第一个React应用程序

## 四、JSX 语法和组件

> 安装 React Devtools 调试工具
>
> 方法一、下载React Devtools 源码 安装依赖，打包之后添加到浏览器扩展程序中
>
> 方法二、https://github.com/facebook/react-devtools/releases/tag/3.4.2 下载扩展程序

### 1.JSX语法

JSX将HTML直接加入到Javascript代码中，再通过翻译器转换到纯Javascript后由浏览器执行,在实际开发中，JSX在打包阶段都已经编译成纯Javascript，不会带来任何副作用，反而会让代码更加直观并且容易维护。编译过程由Babel的JSX编译器实现。

**让Javascript 支持直接在Javascript代码中编写类似于Html标签结构的语法，编译的过程会把类似HTML的JSX结构转换成Javascript的对象结构**

### 2、Class 组件

Es6 的加入，支持React直接使用class来定义一个类，React拆给你佳能组件的方法就是类的继承，ES6 class 是目前官方推荐的使用方法，使用了es6标准语法来构建

```javascript
import React from "react"
import ReactDOM from "react-dom"

class APP extends React.Component{
    render(){
        return(
        	<h1>欢迎进入React世界</h1>
        )
    }
}

ReactDOM.render(
	<App />,
	document.getElementById('root') 
)
```

* es6 class 组件其实就是一个构造器，每次使用组件都相当于实例化组件，像这样：

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
    render(){
        return(
            <h1>欢迎计入{this.props.name}</h1>
        )
    }
}

const app = new App({
    name:'react'
}).render

ReactDOM.render(
    app,
    document.getElementById('root ')
)
```

> **报错**：Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. 
> 原因：React 18 不支持 ReactDOM.render() 方法
>
> React 18 写法如下
>
> ```javascript
> import App from "./01-base/01-class组件";      
> import {createRoot} from "react-dom/client"
> const container = document.getElementById('root')
> const root = createRoot(container)
> root.render(<App/>)
> ```
>
> **报错**：Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? 
>
> 原因： Jsx 语法必须在一个闭合的标签中
>
> 可以嵌套在一个div中，也可以使用其他的标签包裹所有JSX语法，例如 <section></section>>
>
> ```javascript
> class App extends React.Component{
>     render() {
>         return(
>             <div>
>                 hello
>             </div>
>             <div>
>                 Hello ! React Component
>             </div>
>         )
>     }
> } 
> // 错误写法 两个div 并列出现
> class App extends React.Component{
>     render() {
>         return(
>             <section>
>                 <div>
>                     hello
>                 </div>
>                 <div>
>                     Hello ! React Component
>                 </div>
>             </section>
>         )
>     }
> }
> //正确写法
> ```
>
>

#### 3、函数组件

**函数组件名首字母要大写**

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

const App = (props) => <h1>欢迎进入React的世界</h1>
ReactDOM.render(
    <App />,
    document.getElementById('root')
)
```

#### 4、组件的样式

在组件内部实现逻辑，只需要使用 { } ，这是React 的模板，js可以执行 加减、三元运算符等

* 行内样式

要给虚拟dom添加行内样式，需使用表达式传入样式对象的方式来实现：

例如： style_obj 对象

**注意点：样式对象中 样式属性中不能出现 - ，所以需要使用驼峰命名法： backgroundColor、fontSize等等**

```javascript
class App extends Component {
    render()
    {
        var name = "fenghetang"
        var style_obj = {
            backgroundColor:'yellow',
            fontSize:"30px",
        }
        return (
            <div>
                {10+20} - {name}
                {10>20?"aaa":"bbb"}
                <div style={style_obj}>
                    11111111
                </div>
                <div style={{background:'red'}}>22222222</div>
            </div>
        );
    }
}
```

```javascript
//注意这里的括号，第一个表示要在JSX中插入JS了，第二个是对象的括号
<p style={{color：'red',fontsize:"14px"}}>Hello word</p>
```

行内样式需要写入一个样式对象，而这个样式对象的位置可以放在很多地方，例如render函数里、组件原型上，外链js文件中

* 使用class

React 推荐使用行内组件，因为React认为每一个组件都是一个独立的整体

大多数情况下，

> **报错：** Warning: Invalid DOM property `class`. Did you mean `className`?
>
> 原因：在js类中会收到js 的规则，并且clss是js 的关键字
>
> 解决方法：将class 转换为 className 
>
> **拓展： class ==> className  ,for ==>htmlFor**
>
> 导入css文件原理：将style标签转换为style样式中，并且插入道head 标签中