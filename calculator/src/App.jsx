import React from 'react';
import Button from './Button'
import Row from './Row';
import './App.css';
import Result from './Result_screen';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen_value: 0,
      pre_value: null,
      opr1: null,
      opr2: null,
      nmb1: null,
      nmb2: null
    };
  }
  handle_click = (e) => {
    let value = e.target.value;
    if (!value) return;// this if value equal undefined.
    else if (value === "AC") this.setState({ screen_value: 0, pre_value: null, nmb1: null, opr1: null });
    else if (!isNaN(value)) this.addNumber(value);
    else if (this.isOperation(value)) this.addOperation(value);
    else if (value === '.' && !(this.state.screen_value + '').includes('.')) this.addNumber(value);
    else if (value === '+/-') this.setState({ screen_value: -this.state.screen_value });
    else if (value === "=") this.calculate();
    this.setState({ pre_value: value });
  }
  ////////////////
  isOperation = (value) => ['+', '−', '×', '÷', '%'].includes(value);
  ////////////////
  //**why is this function will assign value for nmb1 after handle_click finish (after the last log()) */
  // this make log() for undefined, cause the assign for the value happen after log().
  addNumber = (number) => {                            // when current value is a number.
    if (this.isOperation(this.state.pre_value) && !this.state.opr2) {        // when input number after input the operation.
      this.setState({ nmb1: this.state.screen_value, screen_value: number });
      console.log('NOW shit: ' + this.state.nmb1);
    } else if (this.isOperation(this.state.pre_value) && this.state.opr2) {        // when input number after input the operation.
      this.setState({ nmb2: this.state.screen_value, screen_value: number });
      console.log('SHIT: ' + this.state.nmb2);
    }
    else                                               // when last input is number, we add current value to it.
      this.setState({ screen_value: (this.state.screen_value === 0 ? number : this.state.screen_value + number) });
  }
  ////////////////
  addOperation = (operation) => {
    if (!this.state.opr1) // when input is first operation
      this.setState({ opr1: operation, nmb1: this.state.screen_value });
    else if (this.isOperation(this.state.pre_value))  // here when you reAssign operation.
      this.setState({ opr1: operation });
    else if (!this.state.opr2) { // here when we input second operation.
      if (!['×', '÷'].includes(this.state.opr1) && ['×', '÷'].includes(operation)) {
        this.setState({ nmb2: this.state.screen_value, opr2: operation });
      } else {
        this.setState({
          screen_value: this.operate(+this.state.nmb1, this.state.opr1, +this.state.screen_value),
          nmb1: this.state.screen_value,
          opr1: operation
        });
      }
    }
    else { // here when input is 3rd operation.
      this.setState({
        screen_value: this.operate(+this.state.nmb1,
          this.state.opr1, +this.operate(this.state.nmb2,
            this.state.opr2, this.state.screen_value)),
        nmb1: this.state.screen_value,
        nmb2: null,
        opr1: operation,
        opr2: null,
        pre_value: null
      });
    }
  }
  calculate = () => {
    if (!this.state.nmb2) {
      this.setState({
        screen_value: this.operate(+this.state.nmb1, this.state.opr1, +this.state.screen_value),
        nmb1: this.state.screen_value,
        opr1: null,
        pre_value: null
      });
    }
    else if (this.state.nmb2) {
      this.setState({
        screen_value: this.operate(+this.state.nmb1,
          this.state.opr1, +this.operate(this.state.nmb2,
            this.state.opr2, this.state.screen_value)),
        nmb1: this.state.screen_value,
        nmb2: null,
        opr1: null,
        opr2: null,
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
        </section>
      </div>
    );
  }
}

export default App;
