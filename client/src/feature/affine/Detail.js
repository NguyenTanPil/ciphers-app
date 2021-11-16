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
                  {t('encode_func')}: E<sub>k</sub>( x ) = ( {keys.a}x +{' '}
                  {keys.b} ) mod 26
                </ItemDetail>
                <ItemDetail>
                  {t('encoding')}: "{text}"
                </ItemDetail>
              </>
            ) : (
              <>
                <ItemDetail>
                  {t('decode_func')}: D<sub>k</sub>( x ) = {processes[0].i} * (
                  x -{processes[0].b} ) mod 26
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
                    {actionType === 'encode' ? (
                      <>
                        E<sub>k</sub>( {process.x} ) = ( {keys.a} * {process.x}{' '}
                        + {keys.b} ) ≡ {keys.a * process.x + keys.b} ≡{' '}
                        {process.mod} mod {process.n}
                      </>
                    ) : (
                      <>
                        D<sub>k</sub>( {process.x} ) = {process.i} * ({' '}
                        {process.x} - {keys.b} ) ≡{' '}
                        {process.i * (process.x - keys.b)} ≡ {process.mod} mod{' '}
                        {process.n}
                      </>
                    )}
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
