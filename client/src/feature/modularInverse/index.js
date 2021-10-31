import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CardCounter from '../../components/Card/CardCounter';
import CardDescription from '../../components/Card/CardDescription';
import {
  Btns,
  Container as CardContainer,
  Content,
  OutputText,
  Title,
} from '../../components/Card/CardStyles';
import { BtnLarge, CounterWrap } from '../modulo/ModuloStyles';
import { Container, Wrap } from '../Utils';

const ModularInverse = () => {
  const [output, setOutput] = useState(9);
  const [input, setInput] = useState({
    number: 5,
    modulo: 11,
  });
  const { t } = useTranslation();

  const getModularInverse = () => {
    for (let i = 0; i < input.modulo; i++) {
      if ((Math.abs(input.number) * i) % input.modulo === 1) {
        return i;
      }
    }
    return t('not_found');
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
          <Title>{t('input_number')}</Title>
          <Content>
            <CounterWrap>
              <CardCounter
                label={t('type_1')}
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
          <Title align="center">{t('mod_inverse')}</Title>
          <Content>
            <Btns>
              <BtnLarge onClick={calculate}>{t('cal')}</BtnLarge>
              <BtnLarge onClick={reset}>Reset</BtnLarge>
            </Btns>
          </Content>
        </CardContainer>

        <CardContainer>
          <Title>{t('output_number')}</Title>
          <Content>
            <OutputText>{output}</OutputText>
          </Content>
        </CardContainer>
      </Wrap>
      <CardDescription
        cipher={t('mod_inverse')}
        desc={t('mod_inverse_desc')}
        link="https://en.wikipedia.org/wiki/Modular_multiplicative_inverse"
        utils={t('oper_mod_inverse')}
      />
    </Container>
  );
};

export default ModularInverse;
