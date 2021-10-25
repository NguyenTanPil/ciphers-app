import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardActions from '../../components/Card/CardActions';
import CardInput from '../../components/Card/CardInput';
import CardOutput from '../../components/Card/CardOutput';
import CardDescription from '../../components/Card/CardDescription';
import { Container, Wrap } from '../ceasar/CeasarStyles';
import { getData, resetData, selectAffine } from './affineSlice';
import ExtraInput from './ExtraInput';
import { getCurrentCase, submit } from '../Utils';

const Affine = () => {
  const data = useSelector(selectAffine);
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
    const { ciphertext } = await submit('/api/affine/encode', text, key);
    getCiphertext(ciphertext);
  };

  const decode = async (text, key) => {
    const { ciphertext } = await submit('/api/affine/decode', text, key);
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
          title="Affine Cipher"
          titleAlign="center"
          getKey={getKey}
          getForeignChars={getForeignChars}
          encode={encode}
          decode={decode}
          plaintext={data.plaintext}
          ciphertext={data.ciphertext}
          keys={data.key}
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
        cipher="Affine"
        desc={
          'is a type of monoalphabetic substitution cipher, where each letter in an alphabet is mapped to its numeric equivalent, encrypted using a simple mathematical function, and converted back to a letter. Each letter is enciphered with the function (ax + b) mod 26, where b is the magnitude of the shift.'
        }
        link="https://en.wikipedia.org/wiki/Affine_cipher"
      />
    </Container>
  );
};

export default Affine;
