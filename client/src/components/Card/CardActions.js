import { useState } from 'react';
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
  currentCase,
  getCaseStategy,
  caseStrategy,
  foreignChars,
  reset,
  titleAlign,
  title,
  extraInput,
}) => {
  const [showCase, setShowCase] = useState(false);

  const handleSelectCase = (e) => {
    getCaseStategy(e);
    setShowCase(false);
  };
  return (
    <Container>
      <Title align={titleAlign}>{title}</Title>
      <Content>
        <Btns>
          <Btn onClick={() => encode(plaintext, keys)}>encode</Btn>
          <Btn onClick={() => decode(plaintext, keys)}>decode</Btn>
          <Btn onClick={reset}>Reset</Btn>
        </Btns>

        {extraInput}

        <Alphabet />

        <TransformOutPut>
          <CaseStrategy>
            <label>CASE STRATEGY</label>
            <WrapDropdown>
              <DropdownButton onClick={() => setShowCase(!showCase)}>
                {currentCase}
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
                        {strategy.value}
                      </li>
                    );
                  })}
                </DropdownList>
              )}
              <RiArrowDownSFill />
            </WrapDropdown>
          </CaseStrategy>

          <ForeignChars>
            <label>FOREIGN CHARS</label>
            <WrapDropdown>
              <button
                className={foreignChars === 'include' ? 'active' : ''}
                id="include"
                onClick={(e) => getForeignChars(e.target.id)}
              >
                include
              </button>
              <button
                className={foreignChars === 'ignore' ? 'active' : ''}
                id="ignore"
                onClick={(e) => getForeignChars(e.target.id)}
              >
                ignore
              </button>
            </WrapDropdown>
          </ForeignChars>
        </TransformOutPut>

        <Brick>
          <HiArrowNarrowDown />
          <span>Decoded {ciphertext.length} chars</span>
        </Brick>
      </Content>
    </Container>
  );
};

export default CardActions;
