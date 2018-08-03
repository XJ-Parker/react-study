
import React,{ Component } from "react"
import './index.css'


class Input extends Component{
    render(){
        return (
            <div ref='componentInput'>
                <input  type="text" placeholder='input组件'/>
            </div>
        )
    }
}

class Index extends Component{
  
    focusInput(){
        // this.input.focus()
        // this.refs.refInput.focus()
        console.log(this.refs.refInput.refs.componentInput)  // 组件内的dom元素 不建议外部操作 通过数据来操作子组件
    }

    render () {
        const placeholderText = '试一试'
        return (
            <div>
                {/* <input type="text" placeholder={placeholderText} ref={(input)=> this.input = input}/>  // 设置回调函数 */}
                {/* <input type="text" placeholder={placeholderText} ref='refInput'/>  // 设置字符串 */}
                <Input ref='refInput'/>
                <button onClick={this.focusInput.bind(this)}>聚焦</button>
            </div>
        )
      }
}


export default Index


// 
