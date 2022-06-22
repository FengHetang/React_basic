import React from "react";

 class Child extends React.Component{
    render() {
        return(
            <div>
                navbar 组件的子组件
            </div>
        )
    }
 }
//类组件
class Navbar extends React.Component{
    render() {
        return(<div>
            Navber
            <Child></Child>
        </div>)
    }
}

//函数组件
function Swiper(){
    return <div>swiper</div>
}

//箭头函数组件
const Tabar = ()=>{
    return <div>Tabar</div>
}

export default class App extends React.Component{
    render() {
        return (
            <div>
                <Navbar></Navbar>

                <Swiper></Swiper>
                <Tabar></Tabar>
            </div>
        );
    }


}