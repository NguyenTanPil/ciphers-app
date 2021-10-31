import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HiArrowNarrowDown } from 'react-icons/hi';
import { RiArrowDownSFill } from 'react-icons/ri';
import Alphabet from './Alphabet';
import {
  Brick,
  Btn,
  Btns,
  CaseStrategy,
  Container,
  Content,
  DropdownButton,
  DropdownList,
  ForeignChars,
  Title,
  TransformOutPut,
  WrapDropdown,
} from './CardStyles';

const CardActions = ({
  getForeignChars,
  encode,
  decode,
  plaintext,
  ciphertext,
  keys,
  currentIndex,
  getCaseStategy,
  caseStrategy,
  foreignChars,
  reset,
  titleAlign,
  title,
  extraInput,
}) => {
  const [showCase, setShowCase] = useState(false);
  const { t } = useTranslation();

  const handleSelectCase = (e) => {
    getCaseStategy(e);
    setShowCase(false);
  };
  return (
    <Container>
      <Title align={titleAlign}>{title}</Title>
      <Content>
        <Btns>
          <Btn onClick={() => encode(plaintext, keys)}>{t('encode')}</Btn>
          <Btn onClick={() => decode(plaintext, keys)}>{t('decode')}</Btn>
          <Btn onClick={reset}>Reset</Btn>
        </Btns>

        {extraInput}

        <Alphabet />

        <TransformOutPut>
          <CaseStrategy>
            <label>{t('case')}</label>
            <WrapDropdown>
              <DropdownButton onClick={() => setShowCase(!showCase)}>
                {t(`case_${currentIndex}`)}
              </DropdownButton>
              {showCase && (
                <DropdownList>
                  {caseStrategy.map((strategy, key) => {
                    return (
                      <li
                        className={strategy.active ? 'active' : ''}
                        key={key}
                        id={strategy.value}
                        onClick={handleSelectCase}
                      >
                        {t(`case_${key + 1}`)}
                      </li>
                    );
                  })}
                </DropdownList>
              )}
              <RiArrowDownSFill />
            </WrapDropdown>
          </CaseStrategy>

          <ForeignChars>
            <label>{t('foreign')}</label>
            <WrapDropdown>
              <button
                className={foreignChars === 'include' ? 'active' : ''}
                id="include"
                onClick={(e) => getForeignChars(e.target.id)}
              >
                {t('include')}
              </button>
              <button
                className={foreignChars === 'ignore' ? 'active' : ''}
                id="ignore"
                onClick={(e) => getForeignChars(e.target.id)}
              >
                {t('ignore')}
              </button>
            </WrapDropdown>
          </ForeignChars>
        </TransformOutPut>

        <Brick>
          <HiArrowNarrowDown />
          <span>{t('decoded', { length: ciphertext.length })}</span>
        </Brick>
      </Content>
    </Container>
  );
};

export default CardActions;
