import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Btn } from '../../components/Card/CardStyles';
import styled from 'styled-components';
import { ContainerDetail, ContentDetail, handlShowDetail } from '../Utils';

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
                <ItemDetail>{t('encode_func')}: C = P * k</ItemDetail>
                <ItemDetail>
                  {t('encoding')}: "{text}"
                </ItemDetail>
              </>
            ) : (
              <>
                <ItemDetail>
                  {t('decode_func')}: P = C * k<sup>-1</sup>
                </ItemDetail>
                <ItemDetail>
                  {t('decoding')}: "{text}"
                </ItemDetail>
              </>
            )}

            <ItemDetail level="second">
              {actionType === 'encode' ? 'P' : 'C'} =
              {processes.matrix_chars.map((item, index) => {
                return (
                  <SmallBlock key={index} type="double">
                    [ {item[0]} {item[1]} ]
                  </SmallBlock>
                );
              })}
              =
              {processes.matrix_chars_as_int.map((item, index) => {
                return (
                  <SmallBlock key={index} type="triple">
                    [{item[0]} {item[1]}]
                  </SmallBlock>
                );
              })}
            </ItemDetail>
            <ItemDetail level="second">
              det(k) = {keys.a} * {keys.d} - {keys.b} * {keys.c} ={' '}
              {keys.a * keys.d - keys.b * keys.c}
            </ItemDetail>
            <ItemDetail level="second">
              1 / det(k) = {processes.inverse_det}
            </ItemDetail>
            <ItemDetail level="second">
              Cof(k) = [ [ {processes.reverse_key[0][0][0]}{' '}
              {processes.reverse_key[0][0][1]} ] [{' '}
              {processes.reverse_key[0][1][0]} {processes.reverse_key[0][1][1]}{' '}
              ] ] = [ [ {processes.reverse_key[1][0][0]}{' '}
              {processes.reverse_key[1][0][1]} ] [{' '}
              {processes.reverse_key[1][1][0]} {processes.reverse_key[1][1][1]}{' '}
              ] ]
            </ItemDetail>
            <ItemDetail level="second">
              Cof(k)<sup>-1</sup> = [ [ {processes.reverse_key[2][0][0]}{' '}
              {processes.reverse_key[2][0][1]} ] [{' '}
              {processes.reverse_key[2][1][0]} {processes.reverse_key[2][1][1]}{' '}
              ] ]
            </ItemDetail>
            <ItemDetail level="second">
              k<sup>-1</sup> = {processes.inverse_det} * [ [{' '}
              {processes.reverse_key[2][0][0]} {processes.reverse_key[2][0][1]}{' '}
              ] [ {processes.reverse_key[2][1][0]}{' '}
              {processes.reverse_key[2][1][1]} ] ] = [ [{' '}
              {processes.reverse_key[3][0][0]} {processes.reverse_key[3][0][1]}{' '}
              ] [ {processes.reverse_key[3][1][0]}{' '}
              {processes.reverse_key[3][1][1]} ] ]
            </ItemDetail>
            {processes.steps.map((item, index) => {
              return (
                <ItemDetail level="second" key={index}>
                  {actionType === 'encode' ? 'P' : 'C'}
                  <sub>{index + 1}</sub> = [ {item.p[0]} {item.p[1]} ] :{' '}
                  {actionType === 'encode' ? 'C' : 'P'}
                  <sub>{index + 1}</sub> = {actionType === 'encode' ? 'P' : 'C'}
                  <sub>{index + 1}</sub> *{' '}
                  {actionType === 'encode' ? (
                    'k'
                  ) : (
                    <span>
                      k<sup>{-1}</sup>
                    </span>
                  )}{' '}
                  = [ {item.p[0]} {item.p[1]} ] * [ [ {item.k[0][0]}{' '}
                  {item.k[0][1]} ] [ {item.k[1][0]} {item.k[1][1]} ] ] = [{' '}
                  {item.result_as_int[0]} {item.result_as_int[1]} ] = [{' '}
                  {item.result_as_char[0]} {item.result_as_char[1]} ]
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
const SmallBlock = styled.span`
  display: inline-block;
  min-width: ${(props) =>
    props.type === 'double'
      ? '4.8rem'
      : props.type === 'triple'
      ? '5.2rem'
      : '2.4rem'} !important;
  text-align: center;
  width: ${(props) =>
    props.type === 'double'
      ? '4.8rem'
      : props.type === 'triple'
      ? '5.2rem'
      : '2.4rem'};

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
