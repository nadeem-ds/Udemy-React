import React, { Component } from 'react'

export class Counter extends Component {
    state ={
        count1 : 0,
        count2 : 3,
        imgUrl : "data:image/webp;base64,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"
    };

    //create a stype attribue  and add value it simplicy means object
    // style = {     //define property here and add it 
    //     fontSize : '50px',
    //     fontWeight : "bold",
    //     backgroundColor: "#FF0000"
    // };

    render() {
        return (
            <div>
                <div><img  style = {{ height:'50px' , width:'100%'}}src ={this.state.imgUrl} alt = ""/></div>
                <span > first value {this.formatCount()} and second value is {this.state.count2} </span> <br />
                <button className = "btn btn-secondary btn-sm">Submit</button>
                <h1 style = {{fontSize:60}}>Hello world </h1>
                <h2>My name is Nadeem</h2>
                
            </div>
        )
    }

    formatCount(){    //chcek the value of count property
        //use object destructing
        const {count1} = this.state;   //this is object destructing
        //you can assign html in variable and user it like this
        const assignhtml = <h2>This is html tag with value</h2>
        return count1 ===0?assignhtml:count1;
    }
}

export default Counter;
