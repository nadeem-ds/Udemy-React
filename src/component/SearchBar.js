import React from 'react';

class SearchBar extends React.Component{
    //create a state
    state = {term: ''};

    onFormSubmit=(event)=>{      // it stop cubmit when clicking on the enter
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }
    
    // onInputChange(event){     //use call back function exampne onclick={(event)=>console.log(event.target.value)}
    // console.log(event.target.value);
    // }

    // onInputClick(){
    //     console.log("Inout was clicked")
    // }



    render(){
        return (
        <div className ="ui segment">
            <form  onSubmit={this.onFormSubmit} className = "ui form">
                <div className='field'>
                    <label>image search</label>
                    <input type="text"
                    value= {this.state.term}
                    onChange={(e)=>this.setState({term :e.target.value})}
                    //onChange={this.onInputChange}
                    />
                </div>
            </form>
        </div>
    );
    }
}

export default SearchBar;