import bigInt from 'big-integer';
// import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import CardCounter from '../../components/Card/CardCounter';
import CardDescription from '../../components/Card/CardDescription';
import CardInput from '../../components/Card/CardInput';
import {
  Btns,
  Container as CardContainer,
  Content,
  OutputText,
  Title,
} from '../../components/Card/CardStyles';
import { CounterWrap } from '../affine/AffineStyles';
import { BtnLarge } from '../modulo/ModuloStyles';
import { Container, Wrap } from '../Utils';
import Detail from './Detail';
import {
  decreaseA,
  decreaseK,
  decreaseP,
  decreaseX,
  getData,
  increaseA,
  increaseK,
  increaseP,
  increaseX,
  resetData,
  // getLoading,
  selectElgamal,
} from './elgamalSlice';
import { BtnLargeActive } from './elgamalSlytes';

const ElGamal = () => {
  const { t } = useTranslation();
  const data = useSelector(selectElgamal);
  const dispatch = useDispatch();

  const getPlaintext = (e) => {
    const value = e.target.value;
    dispatch(
      getData({
        ...data,
        plaintext: value,
      }),
    );
  };

  const getActionType = (value) => {
    dispatch(
      getData({
        ...data,
        actionType: value,
      }),
    );
  };

  const getParams = (e, params) => {
    const value = e.target.value ? parseInt(e.target.value) : '';
    dispatch(
      getData({
        ...data,
        [params]: value,
      }),
    );
  };

  const encode = () => {
    // encode
    const { p, k, a, x, plaintext } = data;
    const intPlaintext = parseInt(plaintext);
    const y = Number(bigInt(a).pow(x).mod(p));
    const key = Number(bigInt(y).pow(k).mod(p));
    const c1 = Number(bigInt(a).pow(k).mod(p));
    const c2 = Number(bigInt(key).multiply(intPlaintext).mod(p));
    const ciphertext = c1 + ' ' + c2;
    const processes = { p, k, a, x, plaintext, y, key, c1, c2, ciphertext };
    dispatch(
      getData({
        ...data,
        ciphertext,
        processes,
        actionType: 'encode',
      }),
    );
  };

  const decode = () => {
    // a as c1, k as c2
    const { p, x, a, k } = data;
    const key = Number(bigInt(a).pow(x).mod(p));
    const reverseKey = Number(bigInt(key).modInv(p));
    const ciphertext = Number(bigInt(k).multiply(reverseKey).mod(p));
    const processes = { p, x, c1: a, c2: k, key, reverseKey, ciphertext };
    dispatch(
      getData({
        ...data,
        ciphertext,
        processes,
      }),
    );
  };

  const calculate = () => {
    if (data.actionType === 'decode') {
      return decode();
    } else {
      return encode();
    }
  };

  const reset = () => {
    dispatch(resetData());
  };

  return (
    <Container>
      <Wrap>
        {data.actionType !== 'decode' && (
          <CardInput
            title={t('input')}
            titleAlign={false}
            plaintext={data.plaintext}
            getPlaintext={getPlaintext}
          />
        )}

        <CardContainer>
          <Title align="center">{t('elgamal')}</Title>
          <Content>
            <Btns>
              <BtnLargeActive
                current={data.actionType === 'decode' ? 0 : 1}
                onClick={() => getActionType('encode')}
              >
                {t('encode')}
              </BtnLargeActive>
              <BtnLargeActive
                current={data.actionType === 'decode' ? 1 : 0}
                onClick={() => getActionType('decode')}
              >
                {t('decode')}
              </BtnLargeActive>
            </Btns>
            <Btns>
              <BtnLarge onClick={calculate}>{t('cal')}</BtnLarge>
              <BtnLarge onClick={reset}>Reset</BtnLarge>
            </Btns>
            <CounterWrap>
              <CardCounter
                label="p"
                inputValue={data.p}
                handleCountChange={(e) => getParams(e, 'p')}
                increase={() => dispatch(increaseP())}
                decrease={() => dispatch(decreaseP())}
              />
              <CardCounter
                label="x"
                inputValue={data.x}
                handleCountChange={(e) => getParams(e, 'x')}
                increase={() => dispatch(increaseX())}
                decrease={() => dispatch(decreaseX())}
              />
              <CardCounter
                label={data.actionType === 'encode' ? 'a' : 'c1'}
                inputValue={data.a}
                handleCountChange={(e) => getParams(e, 'a')}
                increase={() => dispatch(increaseA())}
                decrease={() => dispatch(decreaseA())}
              />
              <CardCounter
                label={data.actionType === 'encode' ? 'k' : 'c2'}
                inputValue={data.k}
                handleCountChange={(e) => getParams(e, 'k')}
                increase={() => dispatch(increaseK())}
                decrease={() => dispatch(decreaseK())}
              />
            </CounterWrap>
          </Content>
        </CardContainer>

        <CardContainer>
          <Title>{t('output')}</Title>
          <Content>
            <OutputText>{data.ciphertext}</OutputText>
          </Content>
        </CardContainer>
      </Wrap>
      <Detail processes={data.processes} actionType={data.actionType} />
      <CardDescription
        cipher={t('elgamal')}
        desc={t('elgamal_desc')}
        link="https://en.wikipedia.org/wiki/Modular_multiplicative_inverse"
      />
    </Container>
  );
};

export default ElGamal;
