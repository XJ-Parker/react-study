
import React,{ Component } from "react"
import Comment from './comment'
import './index.css'

// const comments = [
//     {username: 'Jerry', content: 'Hello'},
//     {username: 'Tomy', content: 'World'},
//     {username: 'Lucy', content: 'Good'}
// ]

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }

    render(){
        const comments = this.props.comments
        // console.log(comments)
        return (
            <div>
                {comments.map((comment,index)=>{return <Comment comment={comment} key={index}/>})}
            </div>
        )
    }
}



export default CommentList
