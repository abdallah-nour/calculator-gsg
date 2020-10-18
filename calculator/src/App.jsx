import React from 'react';
import Button from './Button'
import Row from './Row';
import './App.css';
import Result from './Result_screen';
// will add name attribute for every btn, it value give the type of the 
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <section className="wrapper" onClick={this.handle_click}>
          <Result ></Result>
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
