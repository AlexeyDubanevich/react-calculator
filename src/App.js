import React, {Component} from 'react';
import './App.css';
import Button from './components/Button';
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";
let results = [];
export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      input: '',
      previousNumber: '',
      currentNumber: '',
      operator: '',
    }
  };
  addToInput = val => {
    this.setState({
      input: this.state.input + val,
    });
  };
  addZeroToInput = val => {
    if(this.state.input !== '') {
      this.setState({
        input: this.state.input + val,
          }
      );
    }
  };
  addDecimal = val => {
    if(this.state.input.indexOf('.') === -1){
      this.setState({
        input: this.state.input + val,
      });
    }
  };
  clearInput = () =>{
    this.setState({
      input: '',
    });
  };
  add = () => {
    this.setState({
      previousNumber: this.state.input,
      input: '',
      operator: 'plus',
    });
  };
  minus = () => {
    this.setState({
      previousNumber: this.state.input,
      input: '',
      operator: 'minus',
  });
  };
  multiply = () => {
    this.setState({
      previousNumber: this.state.input,
      input: '',
      operator: 'multiply',
    });
  };
  divide = () => {
    this.setState({
      previousNumber: this.state.input,
      input: '',
      operator: 'divide',
    });
  };

  evaluate = () => {
    this.state.currentNumber = this.state.input;
    //let results = [];
    if(this.state.operator == 'plus') {
      let result = parseInt(this.state.previousNumber) +
          parseInt(this.state.currentNumber);
      results.push(result);
      this.setState({
        input: parseInt(this.state.previousNumber) +
            parseInt(this.state.currentNumber),
      })
    } else if(this.state.operator == 'minus') {
      let result = parseInt(this.state.previousNumber) -
          parseInt(this.state.currentNumber);
      results.push(result);
      this.setState({
        input: parseInt(this.state.previousNumber) -
            parseInt(this.state.currentNumber),
      })
    } else if (this.state.operator == 'multiply') {
      let result = parseInt(this.state.previousNumber) *
          parseInt(this.state.currentNumber);
      results.push(result);
      this.setState({
        input: parseInt(this.state.previousNumber) *
            parseInt(this.state.currentNumber),
      })
    } else if (this.state.operator == 'divide') {
      let result = parseInt(this.state.previousNumber) /
          parseInt(this.state.currentNumber);
      results.push(result);
      this.setState({
        input: parseInt(this.state.previousNumber) /
            parseInt(this.state.currentNumber),
      })
    }
    localStorage.setItem('results', results);
  };
  render() {
    return (
        <div className="App">
          <div className="calc-wrapper">
            <div className='row'>
              <Input>{this.state.input}</Input>
            </div>
            <div className="row">
              <Button handleClick = {this.addToInput}>7</Button>
              <Button handleClick = {this.addToInput}>8</Button>
              <Button handleClick = {this.addToInput}>9</Button>
              <Button handleClick = {this.divide}>/</Button>
            </div>
            <div className="row">
              <Button handleClick = {this.addToInput}>4</Button>
              <Button handleClick = {this.addToInput}>5</Button>
              <Button handleClick = {this.addToInput}>6</Button>
              <Button handleClick = {this.multiply}>*</Button>
            </div>
            <div className="row">
              <Button handleClick = {this.addToInput}>1</Button>
              <Button handleClick = {this.addToInput}>2</Button>
              <Button handleClick = {this.addToInput}>3</Button>
              <Button handleClick = {this.add}>+</Button>
            </div>
            <div className="row">
              <Button handleClick = {this.addDecimal}>.</Button>
              <Button handleClick = {this.addZeroToInput}>0</Button>
              <Button handleClick = {this.evaluate}>=</Button>
              <Button handleClick = {this.minus}>-</Button>
            </div>
            <div className='row'>
              <ClearButton handleClear = {this.clearInput}>Clear</ClearButton>
            </div>
          </div>
        </div>
    );
  }
}
