import React from 'react';
import './Row.css';
class Row extends React.Component{
    render(){
        return(
            <section className="row">
                {this.props.children}
            </section>
        );
    }
}

export default Row;