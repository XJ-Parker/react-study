
import React,{ Component } from "react"
import './index.css'




class Post extends Component {
    static defaultProps = {
        content: ''
    }

    getHei(){
        if(this.props.clickP){
           console.log(this.refs.refP.clientHeight)
        }
    }

    render () {
      return (<p onClick={this.getHei.bind(this)} ref='refP'>{this.props.content}</p>)
    }
}

class Index extends Component{
    render() {
        const content = '我就是来试一试的'
        return (
            <div>
                <Post  content={content} clickP={true}/>
            </div>
        )
    }
}


export default Index

// 
