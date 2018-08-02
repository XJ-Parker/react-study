
import React,{ Component } from "react"
import './index.css'


class LikeButton extends Component{
    constructor(){
        super()
        this.state = {
            isLiked: false
        }
    }
    // static defaultProps 实现对props内的属性默认配置
    static defaultProps = {
        likedText: '点赞',
        unlikedText: '不赞'
    }

    headleButton(){
        this.setState({
            isLiked: !this.state.isLiked
        })
        if(this.props.onClick){
            this.props.onClick()
        }
    }


    render(){
        const likedText = this.props.likedText || '点赞'
        const unlikedText = this.props.unlikedText || '取消'
        const words = this.props.words || {type:'button'}
        return (
            <div>
                <button onClick={this.headleButton.bind(this)} data-type={words.type}>
                    {this.state.isLiked? unlikedText : likedText}
                </button>
            </div>
        )
    }
}


class Index extends Component{
    render(){
        return (
            <div>
                <LikeButton likedText='喜欢' unlikedText='讨厌'  words={{type: 'btn'}}  onClick={()=>{console.log('click button')}}/>
            </div>
        )
    }
}

export default Index

// {{}} 表示传入的是一个对象
// props 也可以传入一个函数  props 一旦传入进来就不能改变。
// 可通过父组件主动渲染的方式传入新的props

// pros 的主要作用是让使用该组件的父组件可以传入参数来配置该组件。外部传入的的配置参数，组件内部无法控制也无法修改。
// 除非外部组件主动传入新的props，否则props永远保持不变。