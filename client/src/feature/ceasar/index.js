import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import CardActions from '../../components/Card/CardActions';
import CardDescription from '../../components/Card/CardDescription';
import CardInput from '../../components/Card/CardInput';
import CardOutput from '../../components/Card/CardOutput';
import Detail from './Detail';
import {
  Container,
  getCurrentCase,
  getCurrentIndex,
  submit,
  Wrap,
} from '../Utils';
import { getData, getLoading, resetData, selectCeasar } from './ceasarSlice';
import ExtraInput from './ExtraInput';

const Ceasar = () => {
  const data = useSelector(selectCeasar);
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
        '/api/ceasar/encode',
        text,
        parseInt(key),
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
        '/api/ceasar/decode',
        text,
        parseInt(key),
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
          title={t('ceasar')}
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
        cipher={t('ceasar')}
        desc={t('ceasar_desc')}
        link="https://en.wikipedia.org/wiki/Caesar_cipher"
      />
    </Container>
  );
};

export default Ceasar;
