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
import ExtraInput from './ExtraInput';
import {
  getData,
  getLoading,
  resetData,
  selectSimpleSubstitution,
} from './simpleSubstitutionSlice';

const Transposition = () => {
  const data = useSelector(selectSimpleSubstitution);
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
    try {
      dispatch(getLoading({ loadingOutput: true }));
      const { ciphertext } = await submit(
        '/api/simple-substitution/encode',
        text,
        key,
      );
      getCiphertext(ciphertext);
      dispatch(getLoading({ loadingOutput: false }));
    } catch (error) {
      console.log(error);
    }
  };

  const decode = async (text, key) => {
    try {
      dispatch(getLoading({ loadingOutput: true }));
      const { ciphertext } = await submit(
        '/api/simple-substitution/decode',
        text,
        key,
      );
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
          title={t('input')}
          titleAlign={false}
          plaintext={data.plaintext}
          getPlaintext={getPlaintext}
        />
        <CardActions
          title={t('simple_substitution')}
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
      <CardDescription
        cipher={t('simple_substitution')}
        desc={t('simple_substitution_desc')}
        link="https://en.wikipedia.org/wiki/Substitution_cipher#Simple_substitution"
      />
    </Container>
  );
};

export default Transposition;
