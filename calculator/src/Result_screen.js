import React from 'react';
import './Result_screen.css';
class Result extends React.Component{
    render(){
        return(
            <div className="result-div">
                <h1 className="result-txt">{this.props.value||0}</h1>
            </div>
        );
    }
}

export default Result;