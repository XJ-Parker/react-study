
import React,{ Component } from "react"
import CommentList from './commentList'
import CommentInput from './commentInput'
import './index.css'



class  CommentApp extends Component {
    constructor(){
        super()
        this.state = {
            comments: []
        }
    }

    handleSubmitComment(comment){
        this.state.comments.push(comment)
        this.setState({
            comments: this.state.comments
        })
    }

    render(){
        return (
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}

export default CommentApp
