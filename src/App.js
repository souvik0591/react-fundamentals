import React from 'react';
import './App.css';
import Form from './InputGithubForm.js'
import CardList from './CardList.js'
import {profiles} from './Profile.js'

class App extends React.Component {

  state={
    profiles:profiles
  }

  addNewProfiles=(newProfileData)=>{
    this.setState(prevState=> ({
      profiles:[...prevState.profiles,newProfileData],
    }));
  };
  
  
  render(){
    return (
      
        <div >
          <div className="header">{this.props.title}
          </div>
          <Form onAdd={this.addNewProfiles}/>
          <CardList profiles = {this.state.profiles}/>
        </div>
      
     
      
    );
  }
}

export default App;
