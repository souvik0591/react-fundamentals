import React from 'react';
import axios from 'axios';

class InputGithubForm extends React.Component{
    state={userName :''};
    onHandleSubmit=  async(event) =>{
        event.preventDefault();
        const resp= await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.setState({userName: ''});
        this.props.onAdd(resp.data);

    };
    render () {
        return(
            <form  onSubmit={this.onHandleSubmit}>
                <input type="text"
                  value={this.state.userName}
                  onChange={event=> {this.setState({userName:event.target.value})}}
                 placeholder="GitHub Username"/>
                <button>Add card</button> 
            </form>
        );
    }
}

export default InputGithubForm;