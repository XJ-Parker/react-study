
import React,{ Component } from "react"
import './index.css'

// 百分比换算器

class Input extends Component {
    constructor(){
        super()
        this.state = {
            value: ''
        }
    }

    inputChange(event){
        this.setState({
            value: event.target.value
        })
        if(this.props.onChange){
            this.props.onChange(event.target.value)
        }
    }

    render () {
      return (
        <div>
          <input type='number' value = {this.state.value} onChange={this.inputChange.bind(this)}/>
        </div>
      )
    }
  }
  
class PercentageShower extends Component {
    static defaultProps = {
        number: ''
    }

    percentNum(number){
        return `${(number*100).toFixed(2)}%`
        // return (number*100).toFixed(2)+'%'
    }
   
    render () {
        return (
            <div>
                {this.props.number === ''? null:this.percentNum(this.props.number)}
            </div>
        )
    }
  }
  
class PercentageApp extends Component {
    constructor(){
        super()
        this.state = {
            number: ''
        }
    }

    numberChange(num){
        this.setState({
            number: num
        })
    }

    render () {
      return (
        <div>
            <Input onChange={this.numberChange.bind(this)}/>
            <PercentageShower number={this.state.number}/>
        </div>
      )
    }
  }
  


export default PercentageApp
