import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import CardActions from '../../components/Card/CardActions';
import CardDescription from '../../components/Card/CardDescription';
import CardInput from '../../components/Card/CardInput';
import CardOutput from '../../components/Card/CardOutput';
import {
  Container,
  getCurrentCase,
  getCurrentIndex,
  submit,
  Wrap,
} from '../Utils';
import Detail from './Detail';
import ExtraInput from './ExtraInput';
import {
  getData,
  getLoading,
  resetData,
  selectVigenere,
} from './vigenereSlice';

const Vigenere = () => {
  const data = useSelector(selectVigenere);
  const dispatch = useDispatch();
  const currentCase = getCurrentCase(data.caseStrategy);
  const currentIndex = getCurrentIndex(data.caseStrategy);
  const { t } = useTranslation();

  const getPlaintext = (e) => {
    const value = e.target.value;
    dispatch(
      getData({
        ...data,
        plaintext: value,
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
    try {
      dispatch(getLoading({ loadingOutput: true }));
      const { ciphertext, processes } = await submit(
        '/api/vigenere/encode',
        text,
        key,
      );

      getDataOnSubmit(ciphertext, processes, 'encode');
      dispatch(getLoading({ loadingOutput: false }));
    } catch (error) {
      console.log(error);
    }
  };

  const decode = async (text, key) => {
    try {
      dispatch(getLoading({ loadingOutput: true }));
      const { ciphertext, processes } = await submit(
        '/api/vigenere/decode',
        text,
        key,
      );

      getDataOnSubmit(ciphertext, processes, 'decode');
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
          title={t('input')}
          titleAlign={false}
          plaintext={data.plaintext}
          getPlaintext={getPlaintext}
        />
        <CardActions
          title={t('vigenere')}
          titleAlign="center"
          keys={data.key}
          getKey={getKey}
          getForeignChars={getForeignChars}
          encode={encode}
          decode={decode}
          plaintext={data.plaintext}
          ciphertext={data.ciphertext}
          currentIndex={currentIndex}
          getCaseStategy={getCaseStategy}
          caseStrategy={data.caseStrategy}
          foreignChars={data.foreignChars}
          reset={reset}
          extraInput={<ExtraInput />}
        />
        <CardOutput
          title={t('output')}
          currentCase={currentCase}
          foreignChars={data.foreignChars}
          ciphertext={data.ciphertext}
          loading={data.loadingOutput}
        />
      </Wrap>
      <Detail
        keys={data.key}
        text={data.plaintext}
        processes={data.processes}
        actionType={data.actionType}
      />
      <CardDescription
        cipher={t('vigenere')}
        desc={t('vigenere_desc')}
        link="https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher"
      />
    </Container>
  );
};

export default Vigenere;
