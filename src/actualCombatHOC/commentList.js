
import React,{ Component } from "react"
import PropTypes from 'prop-types'
import Comment from './comment'
import './index.css'

// const comments = [
//     {username: 'Jerry', content: 'Hello'},
//     {username: 'Tomy', content: 'World'},
//     {username: 'Lucy', content: 'Good'}
// ]

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func
    }

    static defaultProps = {
        comments: []
    }

    handleDeleteComment (index) {
        if (this.props.onDeleteComment) {
          this.props.onDeleteComment(index)
        }
    }

    render(){
        const comments = this.props.comments
        // console.log(comments)
        return (
            <div>
                {comments.map((comment,index)=>{ 
                    return <Comment 
                                comment={comment} 
                                onDeleteComment={this.handleDeleteComment.bind(this)}
                                key={index}/>
                })}
            </div>
        )
    }
}



export default CommentList
