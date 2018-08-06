
import React,{ Component } from "react"
import PropTypes from 'prop-types'
import './index.css'

const makeProvider = (pargam)=>{
    return (WrapperComponent)=>{
        class NewComponent extends Component{

            getChildContext(){
                return {data: pargam}
            }

            static childContextTypes = {
                data: PropTypes.any
            }

            render(){
                return (
                    <WrapperComponent {...this.props}/>
                )
            }
        }
        return NewComponent
    }
}



class Post extends Component {

    static contextTypes = {
        data: PropTypes.any,
    }

    render () {
        return (
            <div>
                <p>{this.context.data.name}</p>
            </div>
        )
    }
}
  
Post = makeProvider({ name: 'Jerry' })(Post)


export default Post


// context

// 父组件 childContextTypes 定义要传的对象中数据的类型（必写）
// 父组件 getChildContext 函数返回上下文共享的数据对象（只能其子组件或孙组件使用）

// 子组件 通过contentTypes 来定义要获取context的数据及验证 contextTypes没有定义，context将是个空对象