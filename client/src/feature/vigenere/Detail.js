import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Btn } from '../../components/Card/CardStyles';
import {
  ContainerDetail,
  ContentDetail,
  ItemDetail,
  SmallBlock,
} from '../Utils';

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
            <ItemDetail>
              K ={' '}
              {keysAsInt.map((item, index) => {
                if (item < 10) {
                  item = '0' + item;
                }
                return <SmallBlock key={index}>{item}</SmallBlock>;
              })}
            </ItemDetail>
            <ItemDetail>
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
            <ItemDetail>
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
            <ItemDetail>
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
            <ItemDetail>
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
