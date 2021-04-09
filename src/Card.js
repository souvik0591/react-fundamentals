import React from 'react';
import './App.css';

class Card extends React.Component{    

    render(){
        const profile= this.props;
        return(
            <div >
                <span></span>
                <img src={profile.avatar_url} width='50rem'  alt=""></img>
                <div className="info">
                    <div className="name">{profile.name}</div> 
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        );

    }
}

export default Card;