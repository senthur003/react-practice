import React,{ useState } from 'react';
import { Button,Form } from 'react-bootstrap';

const FirstComponent = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(0);

  const arithmatic = (operation) => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

    if (isNaN(num1) || isNaN(num2)) {
      alert('Please enter valid numbers');
      return;
    }

    let calcResult = 0;

    switch (operation) {
      case 'add':
        calcResult = num1 + num2;
        break;
      case 'sub':
        calcResult = num1 - num2;
        break;
      case 'mul':
        calcResult = num1 * num2;
        break;
      case 'div':
        calcResult = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        break;
      default:
        break;
    }

    setResult(calcResult);
  };

  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center my-4">
        <h1 className="text-center">Arithmetic Operations with React</h1>
        <Form.Group className="my-2">
          <Form.Control
            type="number"
            placeholder="Enter first number"
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
            className="mb-2"
          />
          <Form.Control
            type="number"
            placeholder="Enter second number"
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
          />
        </Form.Group>
        <div className="my-2">
          <Button variant="primary" onClick={() => arithmatic('add')} className="mr-2">Add</Button>
          <Button variant="secondary" onClick={() => arithmatic('sub')} className="mr-2">Subtract</Button>
          <Button variant="success" onClick={() => arithmatic('mul')} className="mr-2">Multiply</Button>
          <Button variant="danger" onClick={() => arithmatic('div')}>Divide</Button>
        </div>
        <h2>Result: {result}</h2>
      </div>
    </div>
  );
};

export default FirstComponent;
