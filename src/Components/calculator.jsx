import react, { Fragment, useState } from 'react'
import './calculator.css'

function Calculator() {
  const calculatorData =
    [{
      "type": "operator",
      "name": "plus",
      "value": "+"
    },
    {
      "type": "operator",
      "name": "minus",
      "value": "-"
    },
    {
      "type": "operator",
      "name": "multiplication",
      "value": "*"
    },
    {
      "type": "operator",
      "name": "division",
      "value": "/"
    },
    {
      "type": "number",
      "name": "one",
      "value": "1"
    },
    {
      "type": "number",
      "name": "two",
      "value": "2"
    },
    {
      "type": "number",
      "name": "three",
      "value": "3"
    },
    {
      "type": "number",
      "name": "four",
      "value": "4"
    },
    {
      "type": "number",
      "name": "five",
      "value": "5"
    },
    {
      "type": "number",
      "name": "six",
      "value": "6"
    },
    {
      "type": "number",
      "name": "seven",
      "value": "7"
    },
    {
      "type": "number",
      "name": "eight",
      "value": "8"
    },
    {
      "type": "number",
      "name": "nine",
      "value": "9"
    },
    {
      "type": "number",
      "name": "zero",
      "value": "0"
    },
    {
      "type": "decimal",
      "name": "dot",
      "value": "."
    },
    {
      "type": "clear",
      "name": "clear",
      "value": "C"
    },
    {
      "type": "equal",
      "name": "equal",
      "value": "=" 
    }
    ]
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', "C"]
  const operators = ["+", "-", "*", "/"]
  let [userInput, setUserInput] = useState([])
  let [result, setResult] = useState([])

  const test = (e) => {
    if (e.target.value == "=") {
      setResult(String(eval(userInput.join(''))))
    }
    else {
      setUserInput([...userInput, e.target.value])
    }
    if (e.target.value == "C") {
      setUserInput([])
      setResult([])
    }
  }
  return (
    <Fragment>
      <div className="wrapper">
      <div className="calculatorWrapper">
        <div className="header">Calculator</div>
        <div className="displayWrapper">
          <input type="text" className="userInput" value={userInput.join("")}></input>
          <input type="text" className="result" value={result}></input>
        </div>
        <div className="calculatorDataWrapper" onClick={test}>
          {calculatorData.map(calculatorData => <button className={calculatorData.name + ' ' + calculatorData.type} value={calculatorData.value} key={calculatorData.name}>{calculatorData.value}</button>)}
        </div>
      </div>
      </div>
    </Fragment>
  )
}
export default Calculator;
