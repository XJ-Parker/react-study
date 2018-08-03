
import React,{ Component } from "react"
import './index.css'

function getPostData() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let text = Math.random()
            resolve(text)
        },2000)
    })
}




class Post extends Component {
    constructor(){
        super()
        this.state = {
            content: '数据加载中'
        }
    }

    componentWillMount(){
        this.getData()
    }

    async getData(){
        // getPostData().then((content)=>{
        //     this.setState({
        //         content
        //     })
        // })
        // 2种写法  1种是链式 1种是async/await
        this.setState({
            content: await getPostData()
        })
    }

    reload(){
        this.setState({
            content: '数据加载中'
        })
        this.getData()
    }

    render () {
      return (
        <div>
          <div className='post-content'>{this.state.content}</div>
          <button onClick={this.reload.bind(this)}>刷新</button>
        </div>
      )
    }
  }


export default Post
