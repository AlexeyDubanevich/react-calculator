import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


export default class App extends Component{
  render() {
    return (
        <div className="App">
          <div className="calc-wrapper">
            <div className="row">
              <Button>7</Button>
              <Button>8</Button>
              <Button>9</Button>
              <Button>/</Button>
            </div>
            <div className="row">
              <Button>4</Button>
              <Button>5</Button>
              <Button>6</Button>
              <Button>*</Button>
            </div>
            <div className="row">
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>+</Button>
            </div>
            <div className="row">
              <Button>./button>
              <Button>0</Button>
              <Button>=</Button>
              <Button>-</Button>
            </div>
          </div>
        </div>
    );
  }
}
