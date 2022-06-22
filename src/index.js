import React from 'react'
// import './01-base/01-class组件'
// import App from "./01-base/01-class组件";
// import App from "./01-base/02-function组件";
// import App from "./01-base/03-组件的嵌套";
import App from "./01-base/04-组件的样式";


// React 17 写法
// import ReactDOM from 'react-dom'
// ReactDOM.render(<App/>,document.getElementById("root"))
// React 18 已经不支持 ReactDOM.render()  方法了
 // React 18 写法
import {createRoot} from "react-dom/client";
const  container = document.getElementById("root")
const root = createRoot(container)
root.render(<App/>)




