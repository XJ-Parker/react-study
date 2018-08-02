
import React,{ Component } from "react"
import './index.css'


class Screen extends Component{
    static defaultProps = {
        showContent: '无内容'
    }

    render(){

        return (
            <div>
                {this.props.showContent}
            </div>
        )
    }
}

class Computer extends Component{
    constructor(){
        super()
        this.state = {
            status: 'on'
        }
    }

    headleButton(){
        this.setState({
            status: this.state.status === 'on' ? 'off': 'on'
        })
    }

    render(){
        const content = this.state.status === 'on'? '显示器亮了':'显示器关了'
        return (
            <div>
                <button onClick={this.headleButton.bind(this)}>
                    开关
                </button>
                <Screen showContent= {content}/>
            </div>
        )
    }
}

export default Computer
