import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Btn } from '../../components/Card/CardStyles';
import { ContainerDetail, ContentDetail, ItemDetail } from '../Utils';

const Detail = ({ keys, text, processes, actionType }) => {
  const container = useRef(null);
  const content = useRef(null);
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  const handlShowDetail = () => {
    const contentEl = content.current;
    if (contentEl) {
      const containerEl = container.current;
      const heightContent = contentEl.getBoundingClientRect().height;

      if (show) {
        containerEl.style.height = `46px`;
        setShow(false);
      } else {
        containerEl.style.height = `${heightContent + 46 + 20}px`;
        setShow(true);
      }
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
                  {t('encode_func')}: E<sub>k</sub>( x ) = ( x + {keys} ) mod 26
                </ItemDetail>
                <ItemDetail>
                  {t('encoding')}: "{text}"
                </ItemDetail>
              </>
            ) : (
              <>
                <ItemDetail>
                  {t('decode_func')}: D<sub>k</sub>( x ) = ( x - {keys} ) mod 26
                </ItemDetail>
                <ItemDetail>
                  {t('decoding')}: "{text}"
                </ItemDetail>
              </>
            )}

            {processes.map((process, key) => {
              return (
                <ItemDetail key={key} level="second">
                  <span>
                    "{process.char}" {t('ordinal')} {process.x}
                  </span>
                  <span>
                    E<sub>k</sub>( {process.x} ) = ( {process.x}{' '}
                    {process.k < 0 ? '-' : '+'} {Math.abs(process.k)} ) ={' '}
                    {process.x + process.k} ≡ {process.mod} mod {process.n}{' '}
                  </span>{' '}
                  {process.result}
                </ItemDetail>
              );
            })}
          </ContentDetail>
        )}

        {/* <Btn onClick={handlShowDetail}>Detail</Btn> */}
      </div>
    </ContainerDetail>
  );
};

export default Detail;
