
import React,{ Component } from "react"
import ReactDOM from 'react-dom'
import './index.css'


class Header extends Component{
    headleClickOntitle(e){
        console.log(this)  //undefined
        console.log(e)
        // console.log(e.target.innerHTML)
        console.log('click on title')
    }
    headleClickShowThis(word,e){
        console.log(this)
        console.log(word,e)
    }
    render(){
        return (
            <div>
                <h2 onClick={this.headleClickOntitle}>React 小书</h2>
                <h2 onClick={this.headleClickShowThis.bind(this,'hello')}>Test bind this</h2>
                <h2 onClick={()=>{this.headleClickOntitle.call(this);this.headleClickShowThis.call(this,'test')}}>test click two event</h2>
            </div>
        )
    }
}

// on*（驼峰写法）的事件监听只能用在普通的HTML标签上，而不能用在组件标签上。<Header onClick={}>这样不行

// 和普通浏览器一样，事件监听函数会自动传入一个event对象，这个对象和普通的浏览器的Event对象所包含的方法和属性基本一致。
// 不同的是React.js 中event对象不是浏览器提供的，而是它自己内部构建的。React.js将浏览器原生的event对象封装了一下，对外提供统一的api和属性，解决兼容问题
// 这个event对象符合W3C标准的，具有类似event.stopPropagation、event.preventDefault这种常用的方法

// 用this.headleClickOntitle.bind(this) bind 会把实例方法绑到当前实例上，然后再把绑定的函数传给React.js的onClick事件监听。

export default Header

