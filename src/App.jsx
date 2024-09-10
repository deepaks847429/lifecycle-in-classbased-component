// const User=()=>{
//   return (
//     <div>
//       <h2>Name: deepak kumar</h2>
//       <h2>Location: Darbhnaga</h2>
//       <h2>Contact: 9631342845</h2>
//     </div>
//   )
// }
// export default User;

// import React from "react";

// class UserClass extends React.Component{
//  render(){
//   return(
//     <div>
//       <h2>Deepak kumar</h2>
//       <h2>Darbhanga</h2>
//       <h2>9631342845</h2>
//     </div>
//   )
//  }
// }

// export default UserClass;

import {useState } from "react";
import React from "react";

class Userclasss extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
      count:0,  
      count2:2,
      },
      this.state={
        userInfo:{
        name: dummy,
        location: Default,
        },
      }
      
  }
  

  async  componentDidMount(){
    const data=await fetch("https://api.github.com/deepaks847429");
    const json=await data.json;
    this.setState({
      userInfo:json,
    })
  }
  render(){
    return(
      <div>
        
      <h1>{this.state.userInfo.name}</h1>
      <h2>Count2:{this.state.count2}</h2>
      <button onClick={()=>{
        this.setState({
          count:this.state.count+1
        })
      
      }}>count increase</button>
      <button onClick={
        ()=>{
          this.setState({
            count2:this.state.count2+2
          })
        }
      }>Button 2</button>
        <h1>Sunil kumar thakur</h1>  // this.props.name 
        <h1>Madhuri devi</h1>
        <h2>Deepika kumari</h2>
        <h3>888888888882097959</h3>
      </div>
    )
  }
}

export default Userclasss;