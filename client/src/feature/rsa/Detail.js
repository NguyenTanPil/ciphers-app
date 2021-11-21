import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Btn } from '../../components/Card/CardStyles';
import { ContainerDetail, ContentDetail } from '../Utils';

const Detail = ({ processes, actionType }) => {
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
            {actionType !== 'decode' ? (
              <>
                <ItemDetail>
                  {t('encode_func')}: C = M<sup>e</sup> mod N
                </ItemDetail>
              </>
            ) : (
              <>
                <ItemDetail>
                  {t('decode_func')}: M = C<sup>d</sup> mod N
                </ItemDetail>
              </>
            )}
            <ItemDetail>
              {t('params')}: p = {processes.p}; q = {processes.q}; e ={' '}
              {processes.e}; d = {processes.d}
            </ItemDetail>
            <ItemDetail>
              {t('encoding')}: "{processes.plaintext}"
            </ItemDetail>
            <ItemDetail level="second">
              n = p * q = {processes.p} * {processes.q} = {processes.n}
            </ItemDetail>
            <ItemDetail level="second">
              φ(N) = φ( {processes.p}, {processes.q} ) = {processes.p - 1} *{' '}
              {processes.q - 1} = {(processes.p - 1) * (processes.q - 1)}
            </ItemDetail>
            <ItemDetail level="second">
              ( {processes.e}, {processes.phi}) = 1 nên áp dụng thuật toán
              Euclide mở rộng ta tìm được d = {processes.d}
            </ItemDetail>
            <ItemDetail level="second">
              K<sub>p</sub> = ( e, N ) = ( {processes.e}, {processes.n} )
            </ItemDetail>
            <ItemDetail level="second">
              K<sub>s</sub> = K<sub>p</sub>
              <sup>-1</sup> ( d, p, q ) = ( {processes.d}, {processes.p} ,{' '}
              {processes.q} )
            </ItemDetail>
            {processes.intPlaintext.map((num, index) => {
              return (
                <ItemDetail key={index} level="second">
                  {actionType === 'encode' ? 'C' : 'M'} ={' '}
                  {actionType === 'encode' ? 'M' : 'C'}
                  <sup>e</sup> mod N = {num}
                  <sup>
                    {actionType === 'encode' ? processes.e : processes.d}
                  </sup>{' '}
                  = {processes.ciphertext.split(' ')[index]}
                </ItemDetail>
              );
            })}
          </ContentDetail>
        )}
      </div>
    </ContainerDetail>
  );
};

export default Detail;

// Styled

export const ItemDetail = styled.li`
  color: ${({ theme }) => theme.text};
  font-size: 1.4rem;
  font-weight: 590;
  margin-bottom: 1rem;
  padding-left: ${(props) => (props.level === 'second' ? '2rem' : '0')};
  width: 100%;
`;
