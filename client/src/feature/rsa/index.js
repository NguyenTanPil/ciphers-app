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
import ExtraInput from './ExtraInput';
import {
  decreaseP,
  decreaseQ,
  getData,
  getLoading,
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
    const { p, q, e, d, plaintext } = data;
    const params = {
      p,
      q,
      e,
      d,
    };
    try {
      dispatch(getLoading({ loadingOutput: true }));
      const { ciphertext, processes } = await submit(
        '/api/rsa/encode',
        plaintext,
        params,
      );

      if (ciphertext === 'error prime') {
        let errorMess = '';
        if (d === 1) {
          errorMess = t('error_prime', { a: e, b: processes.phi });
        } else {
          errorMess = t('error_prime', { a: d, b: processes.phi });
        }
        dispatch(
          getData({
            ...data,
            ciphertext: errorMess,
            actionType: '',
          }),
        );
        return;
      } else {
        getDataOnSubmit(ciphertext, processes, 'encode');
      }
      dispatch(getLoading({ loadingOutput: false }));
    } catch (error) {
      console.log(error);
    }
  };

  const decode = async () => {
    const { p, q, e, d, plaintext } = data;
    const params = {
      p,
      q,
      e,
      d,
    };
    try {
      dispatch(getLoading({ loadingOutput: true }));
      const { ciphertext, processes } = await submit(
        '/api/rsa/decode',
        plaintext,
        params,
      );

      if (ciphertext === 'error prime') {
        let errorMess = '';
        if (d === 1) {
          errorMess = t('error_prime', { a: e, b: processes.phi });
        } else {
          errorMess = t('error_prime', { a: d, b: processes.phi });
        }
        dispatch(
          getData({
            ...data,
            ciphertext: errorMess,
            actionType: '',
          }),
        );
        return;
      } else {
        getDataOnSubmit(ciphertext, processes, 'decode');
      }
      dispatch(getLoading({ loadingOutput: false }));
    } catch (error) {
      console.log(error);
    }
  };

  const calculate = () => {
    if (action === 'encode') {
      encode();
    } else {
      decode();
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
