import React, { useState } from "react";
import { Container, Screen, Previous, Current, Button } from "./styled";

function Calculator() {
  const [currentValue, setCurrentValue] = useState("");
  const [previousValue, setPreviousValue] = useState("");
  const [operation, setOperation] = useState("");
  const deleteHandler = () => {
    setCurrentValue(currentValue.slice(0, -1));
  };
  const acHandler = () => {
    setCurrentValue("");
    setPreviousValue("");
    setOperation("");
  };
  const appendValue = (e) => {
    const value = e.target.getAttribute("data");
    if (value === "." && currentValue.includes(".")) return;
    setCurrentValue(currentValue + value);
  };
  const operationFunc = (preValue, curValue, operation) => {
    preValue = parseFloat(preValue);
    curValue = parseFloat(curValue);
    switch (operation) {
      case "÷":
        return (preValue / curValue).toString();
      case "×":
        return (preValue * curValue).toString();
      case "+":
        return (preValue + curValue).toString();
      case "-":
        return (preValue - curValue).toString();
      default:
        return;
    }
  };

  const operationHandler = (event) => {
    if (currentValue === "") return;

    setCurrentValue("");
    if (previousValue === "") setPreviousValue(currentValue);
    else
      setPreviousValue(operationFunc(previousValue, currentValue, operation));
    setOperation(event.target.getAttribute("data"));
  };

  const equals = () => {
    setPreviousValue("");
    setOperation("");
    if (setCurrentValue === "") setCurrentValue(previousValue);
    else setCurrentValue(operationFunc(previousValue, currentValue, operation));
  };

  return (
    <Container>
      <Screen>
        <Previous>
          {previousValue} {operation}
        </Previous>
        <Current>{currentValue}</Current>
      </Screen>
      <Button
        gridSpan={2}
        className="bg-primary border-start-0"
        onClick={acHandler}
      >
        AC
      </Button>
      <Button className="bg-primary " onClick={deleteHandler}>
        DEL
      </Button>
      <Button data={"÷"} operation onClick={operationHandler}>
        ÷
      </Button>
      <Button data={"1"} onClick={appendValue}>
        1
      </Button>
      <Button data={"2"} onClick={appendValue}>
        2
      </Button>
      <Button data={"3"} onClick={appendValue}>
        3
      </Button>
      <Button data={"×"} operation onClick={operationHandler}>
        ×
      </Button>
      <Button data={"4"} onClick={appendValue}>
        4
      </Button>
      <Button data={"5"} onClick={appendValue}>
        5
      </Button>
      <Button data={"6"} onClick={appendValue}>
        6
      </Button>
      <Button data={"+"} operation onClick={operationHandler}>
        +
      </Button>
      <Button data={"7"} onClick={appendValue}>
        7
      </Button>
      <Button data={"8"} onClick={appendValue}>
        8
      </Button>
      <Button data={"9"} onClick={appendValue}>
        9
      </Button>
      <Button data={"-"} operation onClick={operationHandler}>
        -
      </Button>
      <Button
        className="bg-primary border-0 rounded rounded-end-0"
        data={"."}
        onClick={appendValue}
      >
        .
      </Button>
      <Button>0</Button>
      <Button
        operation
        gridSpan={2}
        className="rounded rounded-start-0 rounded-top-0"
        onClick={equals}
      >
        =
      </Button>
    </Container>
  );
}

export default Calculator;
