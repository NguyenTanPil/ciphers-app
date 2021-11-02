import bigInt from 'big-integer';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RiArrowDownSFill } from 'react-icons/ri';
import CardCounter from '../../components/Card/CardCounter';
import CardDescription from '../../components/Card/CardDescription';
import {
  Btns,
  CaseStrategy,
  Container as CardContainer,
  Content,
  DropdownButton,
  DropdownList,
  OutputText,
  Title,
  WrapDropdown,
} from '../../components/Card/CardStyles';
import { Container, getCurrentCase, getCurrentIndex, Wrap } from '../Utils';
import { BtnLarge, CounterWrap, TransformInput } from './ModuloStyles';

const Modulo = () => {
  const [actions, setActions] = useState([
    { value: 'number', active: true },
    { value: 'power', active: false },
  ]);
  const currentAction = getCurrentCase(actions);
  const currentIndex = getCurrentIndex(actions);
  const [showActions, setShowActions] = useState(false);
  const [output, setOutput] = useState(5);
  const [input, setInput] = useState({
    base: 5,
    exponent: 1,
    modulo: 11,
  });
  const { t } = useTranslation();

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

  const calculate = () => {
    let result = 0;
    if (currentAction === 'number') {
      result = Number(bigInt(input.base).mod(input.modulo));
    } else {
      result = Number(bigInt(input.base).pow(input.exponent).mod(input.modulo));
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
    if (value) {
      setInput({ ...input, [field]: value + number });
    } else {
      setInput({ ...input, [field]: value });
    }
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
      exponent: 1,
      modulo: 11,
    });
    setOutput(5);
  };

  return (
    <Container>
      <Wrap>
        <CardContainer>
          <Title>{t('input_number')}</Title>
          <Content>
            <CounterWrap>
              <CardCounter
                label={currentAction === 'number' ? t('type_1') : t('type_3')}
                inputValue={input.base}
                handleCountChange={handleNumberChange}
                increase={increaseNumber}
                decrease={decreaseNumber}
              />
              {currentAction === 'power' && (
                <CardCounter
                  label={t('type_4')}
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
          <Title align="center">{t('cal_modulo')}</Title>
          <Content>
            <Btns>
              <BtnLarge onClick={calculate}>{t('cal')}</BtnLarge>
              <BtnLarge onClick={reset}>Reset</BtnLarge>
            </Btns>

            <TransformInput>
              <CaseStrategy>
                <label>{t('type_input')}</label>
                <WrapDropdown>
                  <DropdownButton onClick={() => setShowActions(!showActions)}>
                    {t(`type_${currentIndex}`)}
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
                            {t(`type_${key + 1}`)}
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
          <Title>{t('output_number')}</Title>
          <Content>
            <OutputText>{output}</OutputText>
          </Content>
        </CardContainer>
      </Wrap>
      <CardDescription
        cipher={t('oper_modulo')}
        desc={t('modulo_desc')}
        link="https://en.wikipedia.org/wiki/Modulo_operation"
        utils={t('cal_modulo')}
      />
    </Container>
  );
};

export default Modulo;
