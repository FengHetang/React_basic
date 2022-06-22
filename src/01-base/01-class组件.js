// // ES6  语法下 类 的定义
// class Teat {
//     constructor() {
//         this.a = 1;
// //构造器
//     }
//
//     testa() {
//         console.log("testa")
// //成员函数
//     }
// }
//
// // 继承 Teat 类
// class ChildTest extends Teat{
//     testb() {
//         console.log("testb")
//     }
// }
//
//
// var obj = new ChildTest()
// obj.testa()
// console.log(obj.a)
/////////////////////////////////////////////
import React from "react";
class App extends React.Component{
    render() {
        return(
            <section>
                <div>
                    hello
                </div>
                <div>
                    Hello ! React Component
                </div>
            </section>
        )
    }
}

export default App