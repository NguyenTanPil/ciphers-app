import bigInt from 'big-integer';
import { useState } from 'react';
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
import ExtraInput from './ExtraInput';
import {
  decreaseP,
  decreaseQ,
  getData,
  increaseP,
  increaseQ,
  resetData,
  selectRsa,
} from './rsaSlice';
import { BtnLargeActive } from './rsaSlytes';

const Rsa = () => {
  const { t } = useTranslation();
  const data = useSelector(selectRsa);
  const dispatch = useDispatch();
  const [action, setAction] = useState('encode');

  const getPlaintext = (e) => {
    const value = e.target.value;
    dispatch(
      getData({
        ...data,
        plaintext: value,
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

  const calculate = () => {
    const { p, q, e, d, plaintext } = data;
    const n = Number(bigInt(p).multiply(q));
    const phi = Number(bigInt(p - 1).multiply(q - 1));
    let newD = d;
    let newE = e;

    if (d === 1) {
      try {
        // encode
        newD = Number(bigInt(e).modInv(phi));
      } catch (error) {
        const errorMess = t('error_prime', { a: e, b: phi });
        dispatch(
          getData({
            ...data,
            ciphertext: errorMess,
            actionType: '',
          }),
        );
        return;
      }
    } else {
      // decode
      try {
        newE = Number(bigInt(d).modInv(phi));
      } catch (error) {
        const errorMess = t('error_prime', { a: d, b: phi });
        dispatch(
          getData({
            ...data,
            ciphertext: errorMess,
            actionType: '',
          }),
        );
        return;
      }
    }
    const arrPlaintext = plaintext.split(' ');
    const intPlaintext = [];
    const chars = [];

    const c = arrPlaintext.map((char) => {
      // 26 length of alphabet
      let number = parseInt(char);

      // char is letter
      if (char.match(/[a-z]/i)) {
        let charAscii = char.charCodeAt(0);
        if (char === char.toUpperCase()) {
          // A => unicode
          charAscii -= 65;
        } else {
          // a => unicode
          charAscii -= 97;
        }
        number = charAscii;
      }
      intPlaintext.push(number);

      if (action === 'encode') {
        const result = Number(bigInt(number).pow(newE).mod(n));
        chars.push(String.fromCharCode((result % 26) + 65));
        return result;
      } else {
        const result = Number(bigInt(number).pow(newD).mod(n));
        chars.push(String.fromCharCode((result % 26) + 65));
        return result;
      }
    });

    const ciphertext = c.join(' ');
    const processes = {
      p,
      q,
      e,
      d,
      newD,
      newE,
      chars,
      n,
      phi,
      plaintext,
      intPlaintext,
      ciphertext,
    };

    dispatch(
      getData({
        ...data,
        ciphertext,
        processes,
        actionType: action,
      }),
    );
  };

  const reset = () => {
    dispatch(resetData());
  };

  return (
    <Container>
      <Wrap>
        <CardInput
          title={t('input')}
          titleAlign={false}
          plaintext={data.plaintext}
          getPlaintext={getPlaintext}
        />

        <CardContainer>
          <Title align="center">{t('rsa')}</Title>
          <Content>
            <Btns>
              <BtnLargeActive
                current={action === 'decode' ? 0 : 1}
                onClick={() => setAction('encode')}
              >
                {t('encode')}
              </BtnLargeActive>
              <BtnLargeActive
                current={action === 'decode' ? 1 : 0}
                onClick={() => setAction('decode')}
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
                label="q"
                inputValue={data.q}
                handleCountChange={(e) => getParams(e, 'q')}
                increase={() => dispatch(increaseQ())}
                decrease={() => dispatch(decreaseQ())}
              />
              <ExtraInput getParams={getParams} />
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
        cipher={t('rsa')}
        desc={t('rsa_desc')}
        link="https://en.wikipedia.org/wiki/Modular_multiplicative_inverse"
      />
    </Container>
  );
};

export default Rsa;
