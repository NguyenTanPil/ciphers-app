import { useState } from 'react';
import { RiArrowDownSFill } from 'react-icons/ri';
import {
  Container as CardContainer,
  Content,
  CountBtn,
  Counter,
  DropdownButton,
  DropdownList,
  InputGroup,
  OutputText,
  Title,
  WrapDropdown,
  CaseStrategy,
} from '../../components/Card/CardStyles';
import CardDescription from '../../components/Card/CardDescription';
import { Container, getCurrentCase, Wrap } from '../Utils';
import {
  BtnLarge,
  TransformInput,
  CounterWrap,
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
    power: 1,
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
      result = getModulo(input.base, input.power, input.modulo);
    }
    setOutput(result);
  };

  const handleCountChange = (field, value, num = 0) => {
    if (value) {
      setInput({ ...input, [field]: parseInt(value) + num });
    } else {
      setInput({ ...input, [field]: value });
    }
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
              <Counter>
                <div>
                  <label htmlFor="key">
                    {currentAction === 'number' ? 'NUMBER' : 'BASE'}
                  </label>
                  <InputGroup>
                    <CountBtn
                      colorDisabled={(theme) => theme.color}
                      onClick={() => handleCountChange('base', input.base, -1)}
                    >
                      {' '}
                      -{' '}
                    </CountBtn>
                    <input
                      type="number"
                      value={input.base}
                      onChange={(e) =>
                        handleCountChange('base', e.target.value)
                      }
                    />
                    <CountBtn
                      colorDisabled={(theme) => theme.color}
                      onClick={() => handleCountChange('base', input.base, 1)}
                    >
                      {' '}
                      +{' '}
                    </CountBtn>
                  </InputGroup>
                </div>
              </Counter>
              {currentAction === 'power' && (
                <Counter>
                  <div>
                    <label htmlFor="key">exponent</label>
                    <InputGroup>
                      <CountBtn
                        colorDisabled={(theme) => theme.color}
                        onClick={() =>
                          handleCountChange('power', input.power, -1)
                        }
                      >
                        {' '}
                        -{' '}
                      </CountBtn>
                      <input
                        type="number"
                        value={input.power}
                        onChange={(e) =>
                          handleCountChange('power', e.target.value)
                        }
                      />
                      <CountBtn
                        colorDisabled={(theme) => theme.color}
                        onClick={() =>
                          handleCountChange('power', input.power, 1)
                        }
                      >
                        {' '}
                        +{' '}
                      </CountBtn>
                    </InputGroup>
                  </div>
                </Counter>
              )}
              <Counter>
                <div>
                  <label htmlFor="key">modulo</label>
                  <InputGroup>
                    <CountBtn
                      colorDisabled={(theme) => theme.color}
                      onClick={() =>
                        handleCountChange('modulo', input.modulo, -1)
                      }
                    >
                      {' '}
                      -{' '}
                    </CountBtn>
                    <input
                      type="number"
                      value={input.modulo}
                      onChange={(e) =>
                        handleCountChange('modulo', e.target.value)
                      }
                    />
                    <CountBtn
                      colorDisabled={(theme) => theme.color}
                      onClick={() =>
                        handleCountChange('modulo', input.modulo, 1)
                      }
                    >
                      {' '}
                      +{' '}
                    </CountBtn>
                  </InputGroup>
                </div>
              </Counter>
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
