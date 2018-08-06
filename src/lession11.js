
import React,{ Component } from "react"
import './index.css'


class Index extends Component{
    constructor(){
        super()
        this.state = {
            content: '<h1>React.js</h1>'
        }
    }

    render(){

        return (
            <div dangerouslySetInnerHTML={{__html:this.state.content}}  style={{fontSize: '14px'}}>
                {/* {this.state.content}  //html格式被转义 */}
            </div>
        )
    }
}





export default Index


// dangerouslySetHTML 和 style 属性


// dangerouslySetHTML 
// 出于安全考虑的原因(XSS攻击), 在React.js 当中所有的表达式插入的内容都会被自动转义,相当于jQuery里面的text()函数一样
// 任何的HTML格式都会被自动转义掉
// dangerouslySetHTML 可以让设置动态设置元素的innerHTML
// 需要dangerouslySetInnerHTML传入一个对象{{__html: }} , __html属性就相当于元素的innerHTML


// style
// 在React.js 中需要把css属性变成一个对象再传给元素
// style接受一个对象，这个对象里面是这个元素的CSS属性键值对，原来的css属性中带-的元素都必须去掉-，换成驼峰命名
// 如font-size换成fontSize  text-align换成textAlign
// 用对象作为style方便动态设置元素的样式。 可以用props或者state中是数据生成样式对象再传给元素，然后用setState就可以修改样式
