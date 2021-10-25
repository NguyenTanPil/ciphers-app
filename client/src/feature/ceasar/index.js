import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardActions from '../../components/Card/CardActions';
import CardDescription from '../../components/Card/CardDescription';
import CardInput from '../../components/Card/CardInput';
import CardOutput from '../../components/Card/CardOutput';
import { getCurrentCase, submit } from '../Utils';
import { getData, resetData, selectCeasar } from './ceasarSlice';
import { Container, Wrap } from './CeasarStyles';
import ExtraInput from './ExtraInput';

const Ceasar = () => {
  const data = useSelector(selectCeasar);
  const dispatch = useDispatch();
  const currentCase = getCurrentCase(data.caseStrategy);

  const getPlaintext = (value) => {
    dispatch(
      getData({
        ...data,
        plaintext: value,
      }),
    );
  };

  const getCiphertext = (value) => {
    dispatch(
      getData({
        ...data,
        ciphertext: value,
      }),
    );
  };

  const getKey = (value) => {
    dispatch(
      getData({
        ...data,
        key: value,
      }),
    );
  };

  const getForeignChars = (value) => {
    dispatch(
      getData({
        ...data,
        foreignChars: value,
      }),
    );
  };

  const encode = async (text, key) => {
    const { ciphertext } = await submit(
      '/api/ceasar/encode',
      text,
      parseInt(key),
    );
    getCiphertext(ciphertext);
  };

  const decode = async (text, key) => {
    const { ciphertext } = await submit(
      '/api/ceasar/decode',
      text,
      parseInt(key),
    );
    getCiphertext(ciphertext);
  };

  const getCaseStategy = (e) => {
    const value = e.target.id;
    const newCases = data.caseStrategy.map((item) => {
      if (item.value === value) {
        return { ...item, active: true };
      } else {
        return { ...item, active: false };
      }
    });

    dispatch(
      getData({
        ...data,
        caseStrategy: newCases,
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
          title="Text Input"
          titleAlign={false}
          plaintext={data.plaintext}
          getPlaintext={getPlaintext}
        />
        <CardActions
          title="Ceasar Cipher"
          titleAlign="center"
          keys={data.key}
          getKey={getKey}
          getForeignChars={getForeignChars}
          encode={encode}
          decode={decode}
          plaintext={data.plaintext}
          ciphertext={data.ciphertext}
          currentCase={currentCase}
          getCaseStategy={getCaseStategy}
          caseStrategy={data.caseStrategy}
          foreignChars={data.foreignChars}
          reset={reset}
          extraInput={<ExtraInput />}
        />
        <CardOutput
          title="Text Output"
          currentCase={currentCase}
          foreignChars={data.foreignChars}
          ciphertext={data.ciphertext}
        />
      </Wrap>
      <CardDescription
        cipher="Ceasar"
        desc={
          ' is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet.'
        }
        link="https://en.wikipedia.org/wiki/Caesar_cipher"
      />
    </Container>
  );
};

export default Ceasar;
