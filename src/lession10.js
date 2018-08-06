
import React,{ Component } from "react"
import './index.css'


class Card extends Component{
    render(){
        console.log(this.props.children[0])
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

// this.props.children  类似于vue.js的slot功能



export default Card


// 
