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
import loadingIcon from '../../components/Card/loading.gif';
import { CounterWrap } from '../affine/AffineStyles';
import { BtnLarge } from '../modulo/ModuloStyles';
import { Container, submit, Wrap } from '../Utils';
import Detail from './Detail';
import {
  decreaseA,
  decreaseK,
  decreaseP,
  decreaseX,
  getData,
  getLoading,
  increaseA,
  increaseK,
  increaseP,
  increaseX,
  resetData,
  selectElgamal,
} from './elgamalSlice';
import { BtnLargeActive } from './elgamalSlytes';

const ElGamal = () => {
  const { t } = useTranslation();
  const data = useSelector(selectElgamal);
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

  const getDataOnSubmit = (ciphertext, processes, actionType) => {
    dispatch(
      getData({
        ...data,
        ciphertext,
        processes,
        actionType,
      }),
    );
  };

  const encode = async () => {
    const { p, x, a, k, plaintext } = data;
    const params = { p, x };
    const input = { plaintext, a, k };
    try {
      dispatch(getLoading({ loadingOutput: true }));
      const { ciphertext, processes } = await submit(
        '/api/elgamal/encode',
        input,
        params,
      );
      getDataOnSubmit(ciphertext, processes, 'encode');
      dispatch(getLoading({ loadingOutput: false }));
    } catch (error) {
      console.log(error);
    }
  };

  const decode = async () => {
    // a as c1, k as c2
    const { p, x, a, k } = data;
    const params = { p, x };
    const input = { a, k };
    try {
      dispatch(getLoading({ loadingOutput: true }));
      const { ciphertext, processes } = await submit(
        '/api/elgamal/decode',
        input,
        params,
      );
      getDataOnSubmit(ciphertext, processes, 'decode');
      dispatch(getLoading({ loadingOutput: false }));
    } catch (error) {
      console.log(error);
    }
  };

  const calculate = () => {
    if (action === 'decode') {
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
        {action === 'encode' && (
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
                label="x"
                inputValue={data.x}
                handleCountChange={(e) => getParams(e, 'x')}
                increase={() => dispatch(increaseX())}
                decrease={() => dispatch(decreaseX())}
              />
              <CardCounter
                label={action === 'decode' ? 'c1' : 'a'}
                inputValue={data.a}
                handleCountChange={(e) => getParams(e, 'a')}
                increase={() => dispatch(increaseA())}
                decrease={() => dispatch(decreaseA())}
              />
              <CardCounter
                label={action === 'decode' ? 'c2' : 'k'}
                inputValue={data.k}
                handleCountChange={(e) => getParams(e, 'k')}
                increase={() => dispatch(increaseK())}
                decrease={() => dispatch(decreaseK())}
              />
            </CounterWrap>
          </Content>
        </CardContainer>

        <CardContainer textarea={true}>
          <Title>{t('output')}</Title>
          <Content>
            <OutputText>
              {data.loadingOutput ? (
                <img src={loadingIcon} alt="" />
              ) : (
                data.ciphertext
              )}
            </OutputText>
          </Content>
        </CardContainer>
      </Wrap>
      <Detail processes={data.processes} actionType={action} />
      <CardDescription
        cipher={t('elgamal')}
        desc={t('elgamal_desc')}
        link="https://en.wikipedia.org/wiki/Modular_multiplicative_inverse"
      />
    </Container>
  );
};

export default ElGamal;
