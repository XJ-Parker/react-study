
import React,{ Component } from "react"
import './index.css'


class Btn extends Component {
    componentWillMount(){
        console.log('btn-----------componentWillMount') 
    }

    componentDidMount(){
        console.log('btn-----------componentDidMount')  
    }

    componentWillUnmount(){
        console.log('btn-----------componentWillUnmount')  
    }


    render(){
        console.log('btn-----------render')  
        return (
           <button>按钮</button>
        )
    }
}


class Index extends Component{
    constructor(){
        super()
        this.state = {
            btnShow: true
        }
        console.log('index-----------contructor')   // 1
    }

    componentWillMount(){
        console.log('index-----------componentWillMount') // 2
    }

    componentDidMount(){
        console.log('index-----------componentDidMount')  // 4
    }
    

    testUnmount(){
        this.setState({
            btnShow: !this.state.btnShow
        })
    }

    render(){
        console.log('index-----------render') // 3
        return (
            <div>
                {this.state.btnShow? <Btn/>: null}
                <button onClick={this.testUnmount.bind(this)}>生命周期</button>
            </div>
        )
    }
}

export default Index


// componentWillMount() componentDidMount 都可以像render方法一样自定义在组件内部
// 挂载的时候，React.js 会在组件的render 之前调用 componentWillMount ，在DOM元素塞入页面后调用componentDidMount
// 顺序  
// constructor() -> 
// componentWillMount() -> 
// render() -> 
// 然后构造 DOM 元素插入页面 -> componentDidMount() ->
//  ... 
//  即将从页面中删除  -> 
//  componentWillUnmount() -> 
//  //从页面中删除
