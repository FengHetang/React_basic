import React, {Component} from 'react';
import './css/index.css'  //导入css文件

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
                <div className={"active"}>33333333333333333333333</div>
                <label htmlFor="username">用户名：</label>
                <input type="text"/>
            </div>
        );
    }
}

export default App;