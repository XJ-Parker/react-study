
import React,{ Component } from "react"
import './index.css'





// class Index extends Component{
//     constructor(){
//         super()
//     }

//     sayHi(){
//         console.log(this)
//         alert('hellp world')
//     }

//     render(){
//         return (
//             <div onClick={this.sayHi.bind(this)}>
//                 hello world
//             </div>
//         )
//     }
// }

// 函数式组件  无状态组件
// 函数式组件只能接受props 而无法像类组件可以在constructor里面初始化state。
// 没有this指向

const Index = (props) =>{
    const sayHi = (event) =>  {
        console.log(this)
        alert('hellp world')
    }
    return (
        <div onClick={sayHi}>
            hello world
        </div>
    )
}


export default Index
