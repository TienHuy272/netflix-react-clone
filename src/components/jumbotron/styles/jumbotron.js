import styled from 'styled-components/macro';

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ direction, ...restProps }) => direction};
  align-items: center;
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Container = styled.div``;

export const Pane = styled.div`
  width: 50%;
`;

export const Title = styled.h1``;

export const SubTitle = styled.h2``;

export const Image = styled.img``;
