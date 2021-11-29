import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Btn } from '../../components/Card/CardStyles';
import {
  ContainerDetail,
  ContentDetail,
  handlShowDetail,
  ItemDetail,
} from '../Utils';

const Detail = ({ keys, text, processes, actionType }) => {
  const container = useRef(null);
  const content = useRef(null);
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  return (
    <ContainerDetail>
      <div ref={container}>
        <Btn onClick={() => handlShowDetail(container, content, show, setShow)}>
          {show ? t('hide') : t('detail')}
        </Btn>
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
                    {actionType === 'encode' ? 'E' : 'D'}
                    <sub>k</sub>( {process.x} ) = ( {process.x}{' '}
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
