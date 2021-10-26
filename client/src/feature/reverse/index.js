import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardActions from '../../components/Card/CardActions';
import CardDescription from '../../components/Card/CardDescription';
import CardInput from '../../components/Card/CardInput';
import CardOutput from '../../components/Card/CardOutput';
import { Container, getCurrentCase, submit, Wrap } from '../Utils';
import { getData, resetData, selectReverse, getLoading } from './reverseSlice';

const Reverse = () => {
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
    try {
      dispatch(getLoading({ loadingOutput: true }));
      const { ciphertext } = await submit('/api/reverse/encode', text);
      getCiphertext(ciphertext);
      dispatch(getLoading({ loadingOutput: false }));
    } catch (error) {
      console.log(error);
    }
  };
  const decode = async (text) => {
    try {
      dispatch(getLoading({ loadingOutput: true }));
      const { ciphertext } = await submit('/api/reverse/decode', text);
      getCiphertext(ciphertext);
      dispatch(getLoading({ loadingOutput: false }));
    } catch (error) {
      console.log(error);
    }
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
          loading={data.loadingOutput}
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

export default Reverse;
