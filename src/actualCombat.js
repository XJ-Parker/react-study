
import React,{ Component } from "react"
import './index.css'

const lessons = [
    { title: 'Lesson 1: title', description: 'Lesson 1: description' },
    { title: 'Lesson 2: title', description: 'Lesson 2: description' },
    { title: 'Lesson 3: title', description: 'Lesson 3: description' },
    { title: 'Lesson 4: title', description: 'Lesson 4: description' }
    
]

class Lesson extends Component {
    clickHandle(){
        if(this.props.onClick){
            this.props.onClick()
        }
    }

    render(){
        const {lesson} = this.props
        return (
            <div onClick={this.clickHandle.bind(this)}>
                <h1>{lesson.title}</h1>
                <p>{lesson.description}</p>
            </div>
        )
    }
}
  
class LessonsList extends Component {
    render(){
        return (
            <div>
                {
                    lessons.map((lesson,index)=>{
                        return <Lesson lesson={lesson} key={index} onClick={()=>{ console.log(`${index}-${lesson.title}`)}}/>
                })}
            </div>
        )
    }
}

export default LessonsList
