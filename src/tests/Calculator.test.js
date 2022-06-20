import React from 'react';
import Calculator from '../containers/Calculator';
import { render, fireEvent } from '@testing-library/react';

describe('Calculator', () => {
  let container;
  let button1;
  let button2;
  let button3;
  let button4;
  let button5;
  let button6;
  let button7;
  let button8;
  let button9;
  let button0;
  let buttonAdd;
  let buttonSubtract;
  let buttonMultiply;
  let buttonEquals;
  let buttonDivide;
  let runningTotal;
  let buttonClear;

  beforeEach(() => {
    container = render(<Calculator />)
    button1 = container.getByTestId('number1');
    button2 = container.getByTestId('number2')
    button3 = container.getByTestId('number3');
    button4 = container.getByTestId('number4');
    button5 = container.getByTestId('number5');
    button6 = container.getByTestId('number6');
    button7 = container.getByTestId('number7');
    button8 = container.getByTestId('number8');
    button9 = container.getByTestId('number9');
    button0 = container.getByTestId('number0');
    buttonClear = container.getByTestId('clear');
    buttonAdd = container.getByTestId('operator_add');
    buttonSubtract = container.getByTestId('operator-subtract');
    buttonMultiply = container.getByTestId('operator-multiply');
    runningTotal = container.getByTestId('running-total');
    buttonDivide = container.getByTestId('operator-divide');
    buttonEquals = container.getByTestId('operator-equals');
  })

  it('should change running total on number enter', () => {
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('can add', () => {
    fireEvent.click(button1);
    fireEvent.click(buttonAdd);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('5');
  })

  it('can subtract', () => {
    fireEvent.click(button7);
    fireEvent.click(buttonSubtract);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('can multiply 3 x 5', () => {
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('15');
  })

  it('can concatenate numbers', () => {
    fireEvent.click(button1);
    fireEvent.click(button8);
    fireEvent.click(button0);
    expect(runningTotal.textContent).toEqual('180');
  })

  it('can chain operations together', () => {
    fireEvent.click(button1);
    fireEvent.click(buttonAdd);
    fireEvent.click(button4);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button3);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('15')
  })

  it('can clear the running total without affecting the calculation', () => {
    fireEvent.click(button2);
    fireEvent.click(buttonAdd);
    fireEvent.click(button2);
    fireEvent.click(buttonAdd);
    fireEvent.click(button2);
    fireEvent.click(buttonAdd);
    fireEvent.click(button2);
    fireEvent.click(buttonClear);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('10');
  })
})

