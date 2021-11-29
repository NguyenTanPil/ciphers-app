import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Btn } from '../../components/Card/CardStyles';
import { ContainerDetail, ContentDetail, handlShowDetail } from '../Utils';

const Detail = ({ processes, actionType }) => {
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
            {actionType !== 'decode' ? (
              <>
                <ItemDetail>
                  {t('encode_func')}: C<sub>1</sub> = a<sup>k</sup> mod p - C
                  <sub>2</sub> = k * M mod p
                </ItemDetail>
                <ItemDetail>
                  {t('params')}: p = {processes.p}; a = {processes.a}; x ={' '}
                  {processes.x}; k = {processes.k}
                </ItemDetail>
                <ItemDetail>
                  {t('encoding')}: "{processes.plaintext}"
                </ItemDetail>
                <ItemDetail level="second">
                  y = a<sup>x</sup> mod p = {processes.a}
                  <sup>{processes.x}</sup> mod {processes.p} = {processes.y}
                </ItemDetail>
                <ItemDetail level="second">
                  k = y<sup>k</sup> mod p = {processes.y}
                  <sup>{processes.k}</sup> mod {processes.p} = {processes.key}
                </ItemDetail>
                <ItemDetail level="second">
                  C<sub>1</sub> = a<sup>k</sup> mod p = {processes.a}
                  <sup>{processes.k}</sup> mod {processes.p} = {processes.c1}
                </ItemDetail>
                <ItemDetail level="second">
                  C<sub>2</sub> = k * M mod p = {processes.key} *{' '}
                  {processes.plaintext} mod {processes.p} = {processes.c2}
                </ItemDetail>
                <ItemDetail level="second">
                  C = ( C<sub>1</sub>, C<sub>2</sub> ) = ( {processes.c1},{' '}
                  {processes.c2} )
                </ItemDetail>
              </>
            ) : (
              <>
                <ItemDetail>
                  {t('decode_func')}: M = C<sub>2</sub> * k mod p
                </ItemDetail>
                <ItemDetail>
                  {t('params')}: p = {processes.p}; x = {processes.x}; c1 ={' '}
                  {processes.c1}; c2 = {processes.c2}
                </ItemDetail>
                <ItemDetail level="second">
                  k = C<sub>1</sub>
                  <sup>x</sup> mod p = {processes.c1}
                  <sup>{processes.x}</sup> mod {processes.p} = {processes.key}
                </ItemDetail>
                <ItemDetail level="second">
                  M = C<sub>2</sub> * k mod p = {processes.c2} *{' '}
                  {processes.reverseKey} mod {processes.p} ={' '}
                  {processes.ciphertext} {'  '} ( k<sup>-1</sup> ={' '}
                  {processes.reverseKey} )
                </ItemDetail>
              </>
            )}
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
