
import React,{ Component } from "react"
import PropTypes from 'prop-types'
import CommentList from './commentList'
import CommentInput from './commentInput'
import wrapWithLoadData from './wrapWithLoadData'
import './index.css'



class  CommentApp extends Component {
    static propTypes = {
        data: PropTypes.any,
        saveData: PropTypes.func.isRequired
    }

    constructor(props){
        super(props)
        this.state = {
            comments: props.data || []
        }
    }

    // componentWillMount(){
    //     this._loadComments()
    // }

    handleSubmitComment(comment){
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        const comments = this.state.comments
        comments.unshift(comment)
        this.setState({comments})
        // this._saveComments(comments)
        this.props.saveData(comments)
    }

    handleDeleteComment (index) {
        const comments = this.state.comments
        comments.splice(index, 1)
        this.setState({ comments })
        // this._saveComments(comments)
        this.props.saveData(comments)
    }

    // _loadComments(){
    //     let comments = localStorage.getItem('comments')
    //     if(comments){
    //         comments = JSON.parse(comments)
    //         this.setState({comments})
    //     }
    // }

    // _saveComments(comments){
    //     localStorage.setItem('comments',JSON.stringify(comments))
    // }

    render(){
        // console.log(this.state.comments)
        return (
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList comments={this.state.comments} onDeleteComment = {this.handleDeleteComment.bind(this)}/>
            </div>
        )
    }
}

CommentApp = wrapWithLoadData(CommentApp,'comments')

export default CommentApp
