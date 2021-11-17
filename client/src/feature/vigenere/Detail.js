import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Btn } from '../../components/Card/CardStyles';
import { ContainerDetail, ContentDetail } from '../Utils';

const Detail = ({ keys, text, processes, actionType }) => {
  const container = useRef(null);
  const content = useRef(null);
  const [show, setShow] = useState(false);
  const { t } = useTranslation();
  let keysAsInt = [];

  if (actionType) {
    keysAsInt = processes['key_as_int'].slice(0, keys.length);
  }

  const handlShowDetail = () => {
    const contentEl = content.current;
    const containerEl = container.current;
    if (contentEl) {
      const heightContent = contentEl.getBoundingClientRect().height;

      if (show) {
        containerEl.style.height = `46px`;
        setShow(false);
      } else {
        containerEl.style.height = `${heightContent + 46 + 20}px`;
        setShow(true);
      }
    } else {
      containerEl.style.height = `46px`;
      setShow(false);
    }
  };

  return (
    <ContainerDetail>
      <div ref={container}>
        <Btn onClick={handlShowDetail}>{show ? t('hide') : t('detail')}</Btn>
        {actionType && (
          <ContentDetail ref={content}>
            {actionType === 'encode' ? (
              <>
                <ItemDetail>
                  {t('encode_func')}: E<sub>k</sub>( x ) = ( x<sub>i</sub> + k
                  <sub>i</sub> ) mod 26, i = (1, 2, ..., m)
                </ItemDetail>
                <ItemDetail>
                  {t('encoding')}: "{text}"
                </ItemDetail>
              </>
            ) : (
              <>
                <ItemDetail>
                  {t('encode_func')}: D<sub>k</sub>( x ) = ( x<sub>i</sub> - k
                  <sub>i</sub> ) mod 26, i = (1, 2, ..., m)
                </ItemDetail>
                <ItemDetail>
                  {t('decoding')}: "{text}"
                </ItemDetail>
              </>
            )}
            <ItemDetail level="second">
              K ={' '}
              {keysAsInt.map((item, index) => {
                if (item < 10) {
                  item = '0' + item;
                }
                return <SmallBlock key={index}>{item}</SmallBlock>;
              })}
            </ItemDetail>
            <ItemDetail level="second">
              P ={' '}
              {processes['string_as_int'].map((item, index) => {
                if (item < 10) {
                  item = '0' + item;
                }
                if ((index + 1) % keys.length === 0) {
                  return (
                    <SmallBlock type="double" key={index}>
                      <span>{item}</span>
                      <span>||</span>
                    </SmallBlock>
                  );
                } else {
                  return <SmallBlock key={index}>{item}</SmallBlock>;
                }
              })}
            </ItemDetail>
            <ItemDetail level="second">
              K ={' '}
              {processes['key_as_int'].map((item, index) => {
                if (item < 10) {
                  item = '0' + item;
                }
                if ((index + 1) % keys.length === 0) {
                  return (
                    <SmallBlock type="double" key={index}>
                      <span>{item}</span>
                      <span>||</span>
                    </SmallBlock>
                  );
                } else {
                  return <SmallBlock key={index}>{item}</SmallBlock>;
                }
              })}
            </ItemDetail>
            <ItemDetail level="second">
              C ={' '}
              {processes['result_as_int'].map((item, index) => {
                if (item < 10) {
                  item = '0' + item;
                }
                if ((index + 1) % keys.length === 0) {
                  return (
                    <SmallBlock type="double" key={index}>
                      <span>{item}</span>
                      <span>||</span>
                    </SmallBlock>
                  );
                } else {
                  return <SmallBlock key={index}>{item}</SmallBlock>;
                }
              })}
            </ItemDetail>
            <ItemDetail level="second">
              R ={'  '}
              {processes['result_as_char'].map((item, index) => {
                if (item < 10) {
                  item = '0' + item;
                }
                if ((index + 1) % keys.length === 0) {
                  return (
                    <SmallBlock type="double" key={index}>
                      <span>{item}</span>
                      <span>||</span>
                    </SmallBlock>
                  );
                } else {
                  return <SmallBlock key={index}>{item}</SmallBlock>;
                }
              })}
            </ItemDetail>
          </ContentDetail>
        )}
      </div>
    </ContainerDetail>
  );
};

export default Detail;

// Styled
const SmallBlock = styled.span`
  display: inline-block;
  min-width: ${(props) =>
    props.type === 'double' ? '4.8rem' : '2.4rem'} !important;
  text-align: center;
  width: ${(props) => (props.type === 'double' ? '4.8rem' : '2.4rem')};

  & > span {
    display: inline-block;
    min-width: 2.4rem;
    width: 2.4rem;
  }
`;

export const ItemDetail = styled.li`
  color: ${({ theme }) => theme.text};
  font-size: 1.4rem;
  font-weight: 590;
  margin-bottom: 1rem;
  padding-left: ${(props) => (props.level === 'second' ? '2rem' : '0')};
  width: 100%;
`;
