import styled from 'styled-components';

export const submit = async (url, mess, k) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      text: mess,
      key: k,
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
  const result = await response.json();
  return result;
};

export const getCurrentIndex = (cases) => {
  const index = cases.findIndex((c) => c.active);
  return index + 1;
};

export const getCurrentCase = (cases) => {
  return cases.filter((c) => c.active)[0].value;
};

export const handlShowDetail = (
  container,
  content,
  show,
  setShow,
  height = 46,
  paddingBottom = 20,
) => {
  const contentEl = content.current;
  const containerEl = container.current;
  if (contentEl) {
    const heightContent = contentEl.getBoundingClientRect().height;

    if (show) {
      containerEl.style.height = `${height}px`;
      setShow(false);
    } else {
      const extraHeight = paddingBottom ? height + paddingBottom : 0;
      containerEl.style.height = `${heightContent + extraHeight}px`;
      setShow(true);
    }
  } else {
    containerEl.style.height = `${height}px`;
    setShow(false);
  }
};

// Styles
export const Container = styled.div`
  background-color: ${({ theme }) => theme.body};
  width: 100%;
`;

export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  padding-bottom: 1.6rem;
  padding-top: 4.8rem;
  width: 90%;

  @media only screen and (min-width: 576px) {
    width: 80%;
  }

  @media only screen and (min-width: 1200px) {
    justify-content: space-between;
  }
`;

export const ContainerDetail = styled.div`
  background-color: ${({ theme }) => theme.background};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  display: none;
  padding: 3.6rem 0;
  text-align: justify;

  div {
    height: 4.6rem;
    line-height: 1.5;
    letter-spacing: 0.1rem;
    margin: 0 auto;
    overflow: hidden;
    transition: all 0.2s ease 0s;
    width: 80%;
  }

  @media only screen and (min-width: 768px) {
    display: block;
  }

  @media only screen and (min-width: 1200px) {
    margin-top: 2rem;
  }
`;

export const ContentDetail = styled.ul`
  margin-top: 2rem;
  height: auto;
  overflow: hidden;
`;

export const ItemDetail = styled.li`
  ${(props) =>
    props.level === 'second'
      ? 'display: flex; justify-content: space-between;'
      : ''}
  color: ${({ theme }) => theme.text};
  font-size: 1.4rem;
  font-weight: 590;
  margin-bottom: 1rem;
  padding-left: ${(props) => (props.level === 'second' ? '2rem' : '0')};
  width: 100%;

  & > span:first-child {
    display: inline-block;
    min-width: 24rem;
  }

  & > span:last-child {
    display: inline-block;
    min-width: 34rem;
  }

  @media only screen and (min-width: 1200px) {
    display: block;
  }
`;
