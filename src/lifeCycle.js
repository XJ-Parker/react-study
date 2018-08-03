
import React,{ Component } from "react"
import PropTypes from 'prop-types'
import './index.css'

// 生命周期

// 1.constructor
// constructor接收2个参数props、context  context指上下文

// 2.componentWillMount 组件将要挂载
// 组件刚经历constructor, 初始完数据；组件还未进入render，组件还未渲染完成，dom还未渲染  
// 更多用于服务端渲染

// 3.componentDidMount 组件渲染完成
// 组件第一次渲染完成，此时dom节点已经生成

// 4.componentWillReceiveProps(nextProps)
// componentWillReceiveProps 在接受父组件改变后的props需要重新渲染组件时用的比较多

// 5.shouldComponentUpdate(nextProps,nextState)  性能优化可用到
// 唯一用于控制组件重新渲染的生命周期,由于在react中，setState以后，state发生变化，组件会进行重新渲染的流程(setState有些情况并不会重新渲染，比如数组引用变化)
// 在这里return false可以组件组件更新
// react父组件的重新渲染会导致其所有子组件的重新渲染，有时候不需要所有子组件重新渲染可以进行阻止

// 6.componentWillUpdate(nextProps,nextState) 
// shouldComponentUpdate返回true以后，组件进入重新渲染的流程，进入componentWillUpdate，可拿到nextProps,nextState

// 7.render
// render函数会插入jsx生成dom结构，react会生成一份虚拟dom树，在每一次组件更新时，在此react会通过其diff算法比较前后的新旧dom树
// 比较之后，找到最小的有差异的DOM节点，并重新渲染

// 8.componentDidUpdate(prevProps,prevState)
// 组件更新完后执行，只会在第一次初始化成功会进入componentDidMount

// 9.componentWillUnmount()
// 组件销毁   
// clear在组件中的setTimeout、setInterval；移除组件中的监听removeEventListener；处理正在获取的请求


// 第一次渲染过程  
// parent-constructor > parent-componentWillMount > parent-render > child-constructor > 
// child-componentWillMount > child-render > child-componentDidMount > parent-componetDidMount
// 父组件更新
// parent-shouldComponentUpdate > parent-componentWillUpdate > parent-render > child-componentWillReceiveProps > 
// child-showComponentUpdate > child-componentWillUpdate > child-render >
// child-componentWillUpdate > parent-componentWillUpdate
// 父组件更新 子组件不更新
// parent-shouldComponentUpdate > parent-componentWillUpdate > parent-render > child-componentWillReceiveProps > 
// child-showComponentUpdate >  parent-componentWillUpdate


class Parent extends Component {
    constructor(){
        super()
        this.state = {
            btnText: 'yes'
        }
        console.log('parentConstructor')
    }
    getChildContext() {
      return {color: {key:123}};
    }
    static childContextTypes = {
       color: PropTypes.object
    }

    changeBtnText(){
        this.setState({
            btnText: this.state.btnText === 'yes'?'no':'yes'
        })
    }
    componentWillMount(){
        console.log('parentComponentWillMount')
    }

    componentDidMount(){
        console.log('parentComponentDidMount')
    }

    componentWillReceiveProps(nextProps){
        console.log('parentComponentWillReceiveProps')
    }

    shouldComponentUpdate(){
        console.log("parentShouldComponentUpdate")
        return true
    }

    componentWillUpdate(nextProps,nextState){
        console.log("parentComponentWillUpdate",nextProps,nextState)
    }

    componentDidUpdate(prevProps,prevState){
        console.log("parentComponetDidUpdate",prevProps,prevState)
    }


    render(){
        console.log('parent------------render')
        return(
            <div>
                <button onClick={this.changeBtnText.bind(this)}>按钮</button>
                <Child btnText={this.state.btnText}/>
            </div>
            
        )
    }
}
// 使用上下文需要安装prop-types
// getChildContext 定义在父组件中，指定子组件可以使用的信息
// childContentTypes 定义在父组件中，getChildContext 指定的传递给子组件的属性需要先通过childContextTypes来指定，不然会报错
// 子组件通过contextTypes指定需要访问的元素。contextTypes没有定义，context将是个空对象
  
// Parent.childContextTypes = {
//     color: PropTypes.string
// };
// 然后就可以在任意一级子组件上访问 Context 里的内容了：
  
class Child extends Component {
    constructor(props,context){
        super(props,context)
        console.log('childConstructor')
    }

    static contextTypes = {
        color: PropTypes.object
    }

    componentWillMount(){
        console.log('childComponentWillMount')
    }

    componentDidMount(){
        console.log('childComponentDidMount')
    }



    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps',this.props,nextProps)
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate",nextProps,nextState)
        return true
    }

    componentWillUpdate(nextProps,nextState){
        console.log("componentWillUpdate",nextProps,nextState)
    }

    componentDidUpdate(prevProps,prevState){
        console.log("childComponetDidUpdate",prevProps,prevState)
    }

    render() {
        console.log('child------------render')
        return (
            <div>
                {this.context.color.key}-----{this.props.btnText}
                <Son />
            </div>
        );
        // return ''
    }
}
  
// Child.contextTypes = {
//     color: PropTypes.string
// };

class Son extends Component{

    static contextTypes = {
        color: PropTypes.object
    }

    shouldComponentUpdate(){
        return false  //return false 组件了组件的更新
    }

    render(){
        // console.log(this.context)
        console.log('son------------render')
        return (
            <div>
                <span>{this.context.color.key}</span>
            </div>
        )
    }
}

// Son.contextTypes = {
//     color: PropTypes.string
// };

export default Parent
