import { useState } from 'react';
import { RiArrowDownSFill } from 'react-icons/ri';
import CardCounter from '../../components/Card/CardCounter';
import CardDescription from '../../components/Card/CardDescription';
import {
  CaseStrategy,
  Container as CardContainer,
  Content,
  DropdownButton,
  DropdownList,
  OutputText,
  Title,
  WrapDropdown,
} from '../../components/Card/CardStyles';
import { Container, getCurrentCase, Wrap } from '../Utils';
import {
  BtnLarge,
  CounterWrap,
  TransformInput,
  WrapBtns,
} from './ModuloStyles';

const ReverseKey = () => {
  const [actions, setActions] = useState([
    { value: 'number', active: true },
    { value: 'power', active: false },
  ]);
  const currentAction = getCurrentCase(actions);
  const [showActions, setShowActions] = useState(false);
  const [output, setOutput] = useState(5);
  const [input, setInput] = useState({
    base: 5,
    exponent: 1,
    modulo: 11,
  });

  const handleSelectAction = (e) => {
    setShowActions(false);
    const value = e.target.id;
    setActions((actions) => {
      return actions.map((action) => {
        if (action.value === value) {
          return { ...action, active: true };
        } else {
          return { ...action, active: false };
        }
      });
    });
  };

  const getModulo = (base, power, mod) => {
    let powerOfBin = 1;
    let index = 1;
    const values = [base];

    while (powerOfBin < power) {
      values.push((values[index - 1] * values[index - 1]) % mod);
      powerOfBin *= 2;
      index += 1;
    }

    let result = 1;
    const binOfPower = power.toString(2).split('').reverse().join('');

    for (let i = 0; i < binOfPower.length; i++) {
      if (binOfPower[i] === '1') {
        result *= values[i];
      }
    }
    return result % mod;
  };

  const calculate = () => {
    let result = 0;
    if (currentAction === 'number') {
      result = input.base % input.modulo;
    } else {
      result = getModulo(input.base, input.exponent, input.modulo);
    }
    setOutput(result);
  };

  const handleCountChange = (value, field) => {
    if (value) {
      setInput({ ...input, [field]: parseInt(value) });
    } else {
      setInput({ ...input, [field]: value });
    }
  };

  const inOrDecrease = (value, field, number) => {
    setInput({ ...input, [field]: value + number });
  };

  const handleNumberChange = (e) => {
    handleCountChange(e.target.value, 'base');
  };

  const increaseNumber = () => {
    const value = input.base;
    inOrDecrease(value, 'base', 1);
  };

  const decreaseNumber = () => {
    const value = input.base;
    inOrDecrease(value, 'base', -1);
  };

  const handlePowerChange = (e) => {
    handleCountChange(e.target.value, 'exponent');
  };

  const increasePower = () => {
    const value = input.exponent;
    inOrDecrease(value, 'exponent', 1);
  };

  const decreasePower = () => {
    const value = input.exponent;
    inOrDecrease(value, 'exponent', -1);
  };

  const handleModuloChange = (e) => {
    handleCountChange(e.target.value, 'modulo');
  };

  const increaseModulo = () => {
    const value = input.modulo;
    inOrDecrease(value, 'modulo', 1);
  };

  const decreaseModulo = () => {
    const value = input.modulo;
    inOrDecrease(value, 'modulo', -1);
  };

  const reset = () => {
    setInput({
      base: 5,
      power: 1,
      modulo: 11,
    });
    setOutput('');
  };

  return (
    <Container>
      <Wrap>
        <CardContainer>
          <Title>Text Input</Title>
          <Content>
            <CounterWrap>
              <CardCounter
                label={currentAction === 'number' ? 'NUMBER' : 'BASE'}
                inputValue={input.base}
                handleCountChange={handleNumberChange}
                increase={increaseNumber}
                decrease={decreaseNumber}
              />
              {currentAction === 'power' && (
                <CardCounter
                  label="exponent"
                  inputValue={input.exponent}
                  handleCountChange={handlePowerChange}
                  increase={increasePower}
                  decrease={decreasePower}
                  min={0}
                />
              )}
              <CardCounter
                label="modulo"
                inputValue={input.modulo}
                handleCountChange={handleModuloChange}
                increase={increaseModulo}
                decrease={decreaseModulo}
              />
            </CounterWrap>
          </Content>
        </CardContainer>

        <CardContainer style={{ height: '29.5rem' }}>
          <Title>Actions</Title>
          <Content>
            <WrapBtns>
              <BtnLarge onClick={calculate}>calculate</BtnLarge>
              <BtnLarge onClick={reset}>Reset</BtnLarge>
            </WrapBtns>

            <TransformInput>
              <CaseStrategy>
                <label>TYPE INPUT</label>
                <WrapDropdown>
                  <DropdownButton onClick={() => setShowActions(!showActions)}>
                    {currentAction}
                  </DropdownButton>
                  {showActions && (
                    <DropdownList>
                      {actions.map((strategy, key) => {
                        return (
                          <li
                            className={strategy.active ? 'active' : ''}
                            key={key}
                            id={strategy.value}
                            onClick={handleSelectAction}
                          >
                            {strategy.value}
                          </li>
                        );
                      })}
                    </DropdownList>
                  )}
                  <RiArrowDownSFill />
                </WrapDropdown>
              </CaseStrategy>
            </TransformInput>
          </Content>
        </CardContainer>

        <CardContainer>
          <Title>Text Output</Title>
          <Content>
            <OutputText>{output}</OutputText>
          </Content>
        </CardContainer>
      </Wrap>
      <CardDescription
        cipher="Modulo operation"
        desc={
          ' returns the remainder or signed remainder of a division, after one number is divided by another (called the modulus of the operation). Given two positive numbers a and n, a modulo n (abbreviated as a mod n) is the remainder of the Euclidean division of a by n, where a is the dividend and n is the divisor. The modulo operation is to be distinguished from the symbol mod, which refers to the modulus (or divisor) one is operating from.'
        }
        link="https://en.wikipedia.org/wiki/Modulo_operation"
        utils={true}
        more={
          'Some calculators have a mod() function button, and many programming languages have a similar function, expressed as mod(a, n), for example. Some also support expressions that use "%", "mod", or "Mod" as a modulo or remainder operator, such as a % n or a mod n'
        }
      />
    </Container>
  );
};

export default ReverseKey;
