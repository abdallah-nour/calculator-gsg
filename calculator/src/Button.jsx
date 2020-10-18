import React from 'react';
import './Button.css';
class Button extends React.Component {
    btn_click = (e)=>{
        console.log(e.target);

    }
    render() {
        return (
            <div className="container">
                <input id="btn" className="btn" type="button" onClick={(e)=>this.btn_click(e)} value={this.props.btn_value} style={{backgroundColor:this.props.backgroundColor, color:this.props.fontColor, width:this.props.width, textAlign:this.props.txt_align, paddingLeft:this.props.padding_left}}  />
                
            </div>
        );
    }
}

export default Button;

// Edit:
// make the app.js give prop with number of the needed input buttons.
// and give objects as a children for <Buttons/>
// every object will contain the needed attributes for buttons. EX: {value:'8', style:{color:white, background:blue}}
// here in Button we will take the prop (nmb_Of_buttons) and make loop with number of them.
// and every loop we create input button, and put the object in it order as attribute for the <input>.