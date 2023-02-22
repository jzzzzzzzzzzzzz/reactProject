import React, { PureComponent } from 'react'

export default class Test extends PureComponent {
    constructor() {
        super()
        this.state ={
            num:1
        }
    }
    changeNum() {
        this.setState((state,props)=> {
            // this.setState()
            return {num:state.num+1}
        },()=>{
            console.log('====================================');
            console.log(this.state.num);
            console.log('====================================');
        })
    }


  render() {
    return (
      <div>
        <button onClick={e=> this.changeNum()}>改变NUM</button>
        <h1>{this.state.num}</h1>
      </div>
    )
  }
}
