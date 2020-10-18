import React from 'react';
import Button from './Button'
import Row from './Row';
import './App.css';
import Result from './Result_screen';
// will add name attribute for every btn, it value give the type of the 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen_value: 0,
      pre_value: null,
      opr1: null,
      nmb1: null
    };
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     arr_btn: [
  //     ]
  //   }
  // }
  // generateBtnObj = () => {
  //   let obj;
  //   let arr = [];
  //   // for numbers (0-9)
  //   for (let i = 0; i < 10; i++) {
  //     obj = { value: i, to_clear: false };
  //     arr.push(obj);
  //   }
  //   this.setState({ arr_btn: arr });
  // }
  handle_click = (e) => {
    let value = e.target.value;
    if (!value) return;// this if value equal undefined.
    else if (value === "AC") this.setState({ screen_value: 0, pre_value: null, nmb1: null, opr1: null });
    else if (!isNaN(value)) this.addNumber(value);
    else if (this.isOperation(value)) this.addOperation(value);
    else if (value === '.' && !(this.state.screen_value + '').includes('.')) this.addNumber(value);
    else if (value === '+/-') this.setState({screen_value:-this.state.screen_value});
    // else if (value === '%') this.setState({screen_value:this.state.screen_value});
    else if (value === "=") this.calculate(value);
    this.setState({ pre_value: value });
  }
  ////////////////
  isOperation = (value) => ['+', '−', '×', '÷', '%'].includes(value);
  ////////////////
  //**why is this function will assign value for nmb1 after handle_click finish (after the last log()) */
  // this make log() for undefined, cause the assign for the value happen after log().
  addNumber = (value) => {                 // when current value is a number.
    if (this.isOperation(this.state.pre_value))        // when input number after input the operation.
      this.setState({ nmb1: this.state.screen_value, screen_value: value });
    else                                    // when last input is number, we add current value to it.
      this.setState({ screen_value: (this.state.screen_value === 0 ? value : this.state.screen_value + value) });
  }
  ////////////////
  addOperation = (operation) => {
    if (!this.state.opr1)
      this.setState({ opr1: operation, nmb1: this.state.screen_operation });
    else if (this.isOperation(this.state.pre_operation))
      this.setState({ opr1: operation });
    else {
      // here you should do the calculation on the
      // this.calculate();
      // then make the nmb1 equal the result from calculate
      // and opr1 equal the operation variable.
    }
  }
  calculate = (value) => {
    if (value === "=") {
      this.setState({
        screen_value: this.operate(+this.state.nmb1, this.state.opr1, +this.state.screen_value),
        nmb1: this.state.screen_value,
        opr1: null,
        pre_value: null
      });
    }
  }
  operate = (a, opr, b) => {
    if (opr === '+')
      return a + b;
    else if (opr === '−')
      return a - b;
    else if (opr === '×')
      return a * b;
    else if (opr === '÷')
      return a / b;
    else if (opr === '%')
      return a % b;
  }
  render() {
    return (
      <div className="App">
        <section className="wrapper" onClick={this.handle_click}>
          <Result value={this.state.screen_value}></Result>
          <Row >
            <Button btn_value='AC' backgroundColor="#8490FF" fontColor="black" />
            <Button btn_value='+/-' backgroundColor="#8490FF" fontColor="black" />
            <Button btn_value='%' backgroundColor="#8490FF" fontColor="black" />
            <Button btn_value='÷' backgroundColor="#34509E" fontColor="white" />
          </Row>
          <Row >
            <Button btn_value='7' backgroundColor="#212638" fontColor="white" />
            <Button btn_value='8' backgroundColor="#212638" fontColor="white" />
            <Button btn_value='9' backgroundColor="#212638" fontColor="white" />
            <Button btn_value='×' backgroundColor="#34509E" fontColor="white" />
          </Row>
          <Row >
            <Button btn_value='4' backgroundColor="#212638" fontColor="white" />
            <Button btn_value='5' backgroundColor="#212638" fontColor="white" />
            <Button btn_value='6' backgroundColor="#212638" fontColor="white" />
            <Button btn_value='−' backgroundColor="#34509E" fontColor="white" />
          </Row>
          <Row >
            <Button btn_value='1' backgroundColor="#212638" fontColor="white" />
            <Button btn_value='2' backgroundColor="#212638" fontColor="white" />
            <Button btn_value='3' backgroundColor="#212638" fontColor="white" />
            <Button btn_value='+' backgroundColor="#34509E" fontColor="white" />
          </Row>
          <Row >
            <Button btn_value='0' backgroundColor="#212638" fontColor="white" width="4.1em" txt_align="start" padding_left="23px" />
            <Button btn_value='.' backgroundColor="#212638" fontColor="white" />
            <Button btn_value='=' backgroundColor="#34509E" fontColor="white" />
          </Row>
          {/* ± /n ÷ × − */}
          {/* #212638  #34509E  #8490FF */}
        </section>
      </div>
    );
  }
}

export default App;
