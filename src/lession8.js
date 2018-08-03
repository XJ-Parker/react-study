
import React,{ Component } from "react"
import './index.css'


class Clock extends Component {
    constructor(){
        super()
        this.state = {
            date: new Date
        }
    }

    componentWillMount(){
        this.count()
        console.log('Clock-----------componentWillMount') 
    }

    componentDidMount(){
        console.log('Clock-----------componentDidMount')  
        // this.count()
    }

    componentWillUnmount(){
        clearInterval(this.timer) 
    }

    count(){
        this.timer = setInterval(()=>{
            this.setState({
                date: new Date()
            })
        },1000)
    }

    render(){
        console.log('Clock-----------render')  
        return (
           <div>{this.state.date.toLocaleTimeString()}</div>
        )
    }
}

class Index extends Component{
    constructor () {
        super()
        this.state = { isShowClock: true }
    }

    handleShowOrHide () {
        this.setState({
            isShowClock: !this.state.isShowClock
        })
    }
    

    render () {
        return (
            <div>
                {this.state.isShowClock ? <Clock /> : null }
                <button onClick={this.handleShowOrHide.bind(this)}>
                    显示或隐藏时钟
                </button>
            </div>
        )
      }
}


export default Index

// shouldComponentUpdate(nextProps,nextState): 你可以通过这个方法控制组件是否重新渲染。如果返回false组件就不会重新渲染
// 这个生命周期在React.js 性能优化上非常有用

// componentWillReceiveProps(nextProps): 组件从父组件接收到新的props之前调用

// componentWillUpdate(): 组件开始重新渲染之前调用

// componetDidUpdate(): 组件重新渲染并且把改变更到真实的DOM以后调用

