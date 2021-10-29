import { useState } from 'react';
import CardCounter from '../../components/Card/CardCounter';
import CardDescription from '../../components/Card/CardDescription';
import {
  Container as CardContainer,
  Content,
  OutputText,
  Title,
  Btns,
} from '../../components/Card/CardStyles';
import { Container, Wrap } from '../Utils';
import { CounterWrap, BtnLarge } from '../modulo/ModuloStyles';

const ModularInverse = () => {
  const [output, setOutput] = useState(9);
  const [input, setInput] = useState({
    number: 5,
    modulo: 11,
  });

  const getModularInverse = () => {
    for (let i = 0; i < input.modulo; i++) {
      if ((input.number * i) % input.modulo === 1) {
        return i;
      }
    }
    return 'Not Found. Please Check Your Input!';
  };

  const calculate = () => {
    setOutput(getModularInverse());
  };

  const handleCountChange = (value, field) => {
    if (value) {
      setInput({ ...input, [field]: parseInt(value) });
    } else {
      setInput({ ...input, [field]: value });
    }
  };

  const inOrDecrease = (value, field, number) => {
    if (value) {
      setInput({ ...input, [field]: value + number });
    } else {
      setInput({ ...input, [field]: value });
    }
  };

  const handleNumberChange = (e) => {
    handleCountChange(e.target.value, 'number');
  };

  const increaseNumber = () => {
    const value = input.number;
    inOrDecrease(value, 'number', 1);
  };

  const decreaseNumber = () => {
    const value = input.number;
    inOrDecrease(value, 'number', -1);
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
      number: 5,
      modulo: 11,
    });
    setOutput(9);
  };

  return (
    <Container>
      <Wrap>
        <CardContainer>
          <Title>Numbers Input</Title>
          <Content>
            <CounterWrap>
              <CardCounter
                label={'NUMBER'}
                inputValue={input.number}
                handleCountChange={handleNumberChange}
                increase={increaseNumber}
                decrease={decreaseNumber}
              />
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
          <Title align="center">Modular Inverse</Title>
          <Content>
            <Btns>
              <BtnLarge onClick={calculate}>calculate</BtnLarge>
              <BtnLarge onClick={reset}>Reset</BtnLarge>
            </Btns>
          </Content>
        </CardContainer>

        <CardContainer>
          <Title>Number Output</Title>
          <Content>
            <OutputText>{output}</OutputText>
          </Content>
        </CardContainer>
      </Wrap>
      <CardDescription
        cipher="Modular multiplicative inverse"
        desc={
          '  of an integer a is an integer x such that the product ax is congruent to 1 with respect to the modulus m. In the standard notation of modular arithmetic this congruence is written as ax ≡ 1 (mod m ), which is the shorthand way of writing the statement that m divides (evenly) the quantity ax − 1, or, put another way, the remainder after dividing ax by the integer m is 1.'
        }
        link="https://en.wikipedia.org/wiki/Modular_multiplicative_inverse"
        utils={true}
        more={
          'Finding modular multiplicative inverses also has practical applications in the field of cryptography, i.e. public-key cryptography and the RSA Algorithm. A benefit for the computer implementation of these applications is that there exists a very fast algorithm (the extended Euclidean algorithm) that can be used for the calculation of modular multiplicative inverses.'
        }
      />
    </Container>
  );
};

export default ModularInverse;
