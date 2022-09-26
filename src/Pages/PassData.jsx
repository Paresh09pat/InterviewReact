import React from "react";

class PassData extends React.Component{
constructor(props){
    super(props)
    this.state={
         name:'Paresh',
         city:'Pune'
    }
}
handlechange=(event)=>{
    this.setState({
        name:"Umesh",
        city:'Jalgaon'
    })
};


    render(){
        return(
            <>
            Hey My Name is <span style={{backgroundColor:"cyan"}}> {this.state.name} .</span>  I am From <span  style={{backgroundColor:"cyan"}}>{this.state.city} .</span>
<br/><br/>
            <button onClick={this.handlechange}> Change State</button>

            </>
        )
    }
}

export default PassData