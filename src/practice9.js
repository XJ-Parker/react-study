
import React,{ Component } from "react"
import './index.css'


// 实现一个组件 BlackBorderContianer，它会把作为它的嵌套结构的 每个直接子元素 都用一个黑色边框的 div 包裹起来。

class BlackBorderContainer extends Component {
    render(){
        const childrenEle = this.props.children;   //this.props.children 是一个数组  
        return (
            <div>
                {childrenEle.map((ele,index)=>{
                    return <div className='bor'  key={index}>{ele}</div>
                })}
            </div>
        )
    }
}

export default BlackBorderContainer

// 
