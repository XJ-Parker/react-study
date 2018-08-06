
import React,{ Component } from "react"
import PropTypes from 'prop-types'
import './index.css'

const getData = (url)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({content: Math.random()})
        },1000)
    })
}

const loadAndRefresh = (url)=>{
     return  function(WrapperComponent){
        class NewComponent extends Component{
            constructor(){
                super()
                this.state = { content: '数据加载中'}
            }

            async componentWillMount(){
                let data = await getData()
                this.setState(data)
            }
    
            async refresh(){
                this.setState({ content: '数据加载中'})
                let data = await getData()
                this.setState(data)
            }

            render(){
                return (
                    <WrapperComponent content={this.state.content} refresh={this.refresh.bind(this)} {...this.props}/>
                )
            }
        }
        return NewComponent
     }
}

class Post extends Component {

    static propTypes = {
        content: PropTypes.any,
        refresh: PropTypes.func.isRequired
    }

    render () {
        return (
            <div>
                <p>{this.props.content}</p>
                <button onClick={() => this.props.refresh()}>刷新</button>
            </div>
        )
    }
}
  
Post = loadAndRefresh('/post')(Post)


export default Post


// 高阶组件 HOC (Higher-Order Components)
// 它就是一个函数，传给它一个组件，它返回一个新的组件，新的组件会使用传给它的组件作为子组件

// 高阶组件的作用是用于代码服用，可以把组件直接可复用的代码、逻辑抽离到高阶组件当中。新的组件和传入的组件通过props传递消息


