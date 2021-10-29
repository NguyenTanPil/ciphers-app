import { useDispatch, useSelector } from 'react-redux';
import CardActions from '../../components/Card/CardActions';
import CardDescription from '../../components/Card/CardDescription';
import CardInput from '../../components/Card/CardInput';
import CardOutput from '../../components/Card/CardOutput';
import { getCurrentCase, submit, Container, Wrap } from '../Utils';
import {
  getData,
  resetData,
  selectSimpleSubstitution,
  getLoading,
} from './simpleSubstitutionSlice';
import ExtraInput from './ExtraInput';

const Transposition = () => {
  const data = useSelector(selectSimpleSubstitution);
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
          title="Text Input"
          titleAlign={false}
          plaintext={data.plaintext}
          getPlaintext={getPlaintext}
        />
        <CardActions
          title="Simple Substitution Cipher"
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
          loading={data.loadingOutput}
        />
      </Wrap>
      <CardDescription
        cipher="Simple substitution"
        desc={
          ' can be demonstrated by writing out the alphabet in some order to represent the substitution. This is termed a substitution alphabet. The cipher alphabet may be shifted or reversed (creating the Caesar and Atbash ciphers, respectively) or scrambled in a more complex fashion, in which case it is called a mixed alphabet or deranged alphabet.'
        }
        more="Traditionally, mixed alphabets may be created by first writing out a keyword, removing repeated letters in it, then writing all the remaining letters in the alphabet in the usual order."
        link="https://en.wikipedia.org/wiki/Substitution_cipher#Simple_substitution"
      />
    </Container>
  );
};

export default Transposition;
