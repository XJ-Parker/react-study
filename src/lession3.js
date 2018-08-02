
import React,{ Component } from "react"
import ReactDOM from 'react-dom'
import './index.css'


class LikeButton extends Component{
    constructor(){
        super()
        this.state = {
            isLiked: false
        }
    }

    headleButton(){
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    headleClick(){
        this.setState((prevState)=>{
            console.log(prevState) //
            return { count : 0}
        })
        this.setState((prevState)=>{
            console.log(prevState) //prevState.count 0
            return { count : prevState.count + 1}
        })
        this.setState((prevState)=>{
            console.log(prevState) //prevState.count 1
            return { count : prevState.count + 2}
        })
        console.log('12',this.state)
    }

    render(){
        return (
            <div>
                <button onClick={this.headleButton.bind(this)}>
                    {this.state.isLiked?'取消':'点赞'}
                </button>
                <button onClick={this.headleClick.bind(this)}>
                    点击
                </button>
            </div>
        )
    }
}

// setState 方法由父类Component 所提供。当调用这个函数时，React.js会更新组件的状态state，并且重新调用render方法
// 然后再把render方法所渲染的最新内容显示在页面上
// 不能直接用this.state = xxx 这种方法来修改，如果这样React.js 就没办法知道修改了组件的状态，就没办法更新页面
// 一定要使用React.js 提供的setState方法，它接受一个对象或者函数作为参数
// 传入一个对象时，这个对象标识该组件的新状态，但只需要传入需要更新的部分就可以，不需要传入整个对象。

// setState调用时，React.js 并不会马上修改state, 而是把这个对象放到一个更新队列里，稍后才会从队列中把新的状态提取出来合并到state中，然后再触发组件更新。
// setState 函数作为参数传入
// 3次setState 组件只会重新渲染一次，React.js 内部会把JavaScript 事件循环中的消息队列的同一个消息中的setState都进行合并后再渲染

class Index extends Component{
    render(){
        return (
            <div>
                <LikeButton/>
            </div>
        )
    }
}

export default Index

// state 的主要作用是用于组件保存、控制、修改自己的可变状态。state在组件内部初始化，可以被组件自身修改，外部不能访问也不能修改


//  少用state 尽量多用props   没有state的组件叫无状态组件   设置了state的叫做有状态组件  少用state可提高组件的可复用性