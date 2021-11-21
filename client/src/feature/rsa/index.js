import bigInt from 'big-integer';
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
  decreaseQ,
  decreaseD,
  decreaseP,
  decreaseE,
  getData,
  increaseQ,
  increaseD,
  increaseP,
  increaseE,
  resetData,
  // getLoading,
  selectRsa,
} from './rsaSlice';
import { BtnLargeActive } from './rsaSlytes';

const Rsa = () => {
  const { t } = useTranslation();
  const data = useSelector(selectRsa);
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
    const { p, q, e, plaintext } = data;
    const n = Number(bigInt(p).multiply(q));
    const phi = Number(bigInt(p - 1).multiply(q - 1));
    const d = Number(bigInt(e).modInv(phi));
    const arrPlaintext = plaintext.split(' ');
    const intPlaintext = [];

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
      return Number(bigInt(number).pow(e).mod(n));
    });

    const ciphertext = c.join(' ');
    const processes = {
      p,
      q,
      e,
      d,
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
        actionType: 'encode',
      }),
    );
  };

  const decode = () => {
    // e as c
    const { p, q, e, plaintext } = data;
    const arrPlaintext = plaintext.split(' ');
    const n = Number(bigInt(p).multiply(q));
    const phi = Number(bigInt(p - 1).multiply(q - 1));
    const d = Number(bigInt(e).modInv(phi));
    const intPlaintext = [];

    const m = arrPlaintext.map((char) => {
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
      return Number(bigInt(number).pow(d).mod(n));
    });

    const ciphertext = m.join(' ');
    const processes = {
      p,
      q,
      e,
      d,
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
                label="q"
                inputValue={data.q}
                handleCountChange={(e) => getParams(e, 'q')}
                increase={() => dispatch(increaseQ())}
                decrease={() => dispatch(decreaseQ())}
              />
              <CardCounter
                label={data.actionType === 'decode' ? 'c' : 'e'}
                inputValue={data.e}
                handleCountChange={(e) => getParams(e, 'e')}
                increase={() => dispatch(increaseE())}
                decrease={() => dispatch(decreaseE())}
              />

              <CardCounter
                label="d"
                inputValue={data.d}
                handleCountChange={(e) => getParams(e, 'd')}
                increase={() => dispatch(increaseD())}
                decrease={() => dispatch(decreaseD())}
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
        cipher={t('rsa')}
        desc={t('rsa_desc')}
        link="https://en.wikipedia.org/wiki/Modular_multiplicative_inverse"
      />
    </Container>
  );
};

export default Rsa;
