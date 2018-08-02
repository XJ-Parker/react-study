// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import React,{ Component } from "react"
import ReactDOM from 'react-dom'
import './index.css'

// 文件头部从react的包含中引入React和React.js的组件父类Component。只要写React.js组件，都必须引用
// ReactDOM 帮助把React组件渲染到页面中去。
// JSX其实就是JavaScript对象

class Header extends Component{
    render(){
        const name='React'
        const className ='header',idName='text'
        const bol = false
        const n=3
        return (
            <div className={className}>
                <h2 id={idName} data-type='jsx'>{name} 小书{(function(){return 'is good'})()}</h2>
                <p>vue{bol?<span>不服</span>:null}</p>
                <p> {n>0?<span>有{n}条消息未读</span>:<span>没有未读消息</span>}</p>
            </div>
        )
    }
}
// {} 内可以放任何JavaScript代码，包括变量、表达式计算、函数执行,也可以放JSX
// 表达式不仅可以用在标签内部，也可以用在标签属性上
// class 是JavaScript的关键字， React.js 定义了 className 来给元素添加类名
// 特例 for属性，eg:<label for='male'></label>,for也是JavaScript关键字，所以在JSX用htmlFor替代
// 表达式插入里面返回null，那么React.js 就会不显示，相当于忽略了该表达式插入。可用来作显示或隐藏

// ReactDOM.render(
//     <Header/>,
//     document.getElementById('root')
// )

export default Header

// ReactDOM.render 功能就是把组件渲染并且构造DOM树，然后插入到页面某个特定的元素上（这里是id为root的div）
// JSX到页面的过程   JSX（Babel编译+React.js构造）——> Javascript对象结构(ReactDOM.render) ——>DOM元素——>插入页面 
// JSX不直接渲染构造DOM结构是因为，1、不一定会把元素之间渲染到浏览器的普通页面上；
// 2、有了JavaScript对象，当数据变化，需要更新组件时，就可以用比较快的算法操作这个对象，而不用之间操作DOM，这样减少了浏览器重排，优化了性能

// 练习一
// function renderContent(content){
//     ReactDOM.render(<h1>{content}</h1>, document.getElementById('root'))
// }

// renderContent('Hello World')

