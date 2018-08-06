
import React,{ Component } from "react"
import './index.css'

// 覆盖默认样式
// 完成一个函数 getDefaultStyledPost，这个函数接受一个表示样式的对象作为参数，返回一个组件只有 <p> 元素的组件

const getDefaultStyledPost = (defaultStyle) => {
    return class Post extends Component{
        render(){
            const style = {...defaultStyle, ...this.props.style}
            return (
                <p style={style}>11313132131231231</p>
            )
        }
    }
}

const Post = getDefaultStyledPost({ color: 'red' })

{/* <Post style={{ color: 'blue', fontSize: '13px' }} />
<Post style={{ fontSize: '12px' }} /> */}

export default Post

// 
