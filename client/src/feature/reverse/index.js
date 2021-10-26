import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardActions from '../../components/Card/CardActions';
import CardDescription from '../../components/Card/CardDescription';
import CardInput from '../../components/Card/CardInput';
import CardOutput from '../../components/Card/CardOutput';
import { getCurrentCase, submit } from '../Utils';
import { getData, resetData, selectReverse } from './reverseSlice';
import { Container, Wrap } from '../ceasar/CeasarStyles';

const Ceasar = () => {
  const data = useSelector(selectReverse);
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

  const getForeignChars = (value) => {
    dispatch(
      getData({
        ...data,
        foreignChars: value,
      }),
    );
  };

  const encode = async (text) => {
    const { ciphertext } = await submit('/api/reverse/encode', text);
    getCiphertext(ciphertext);
  };

  const decode = async (text) => {
    const { ciphertext } = await submit('/api/reverse/decode', text);
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
          title="Reverse Cipher"
          titleAlign="center"
          keys={data.key}
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
        />
        <CardOutput
          title="Text Output"
          currentCase={currentCase}
          foreignChars={data.foreignChars}
          ciphertext={data.ciphertext}
        />
      </Wrap>
      <CardDescription
        cipher="Reverse"
        desc={
          ' uses a pattern of reversing the string of plain text to convert as cipher text. The process of encryption and decryption is same. To decrypt cipher text, the user simply needs to reverse the cipher text to get the plain text.'
        }
        link="https://www.tutorialspoint.com/cryptography_with_python/cryptography_with_python_reverse_cipher.htm"
      />
    </Container>
  );
};

export default Ceasar;
