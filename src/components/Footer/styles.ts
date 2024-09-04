import styled from 'styled-components';
import { FlexCSS } from '../../styles/mixins';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  ${FlexCSS}
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2rem max(calc((100% - 144rem) / 2), 2rem);
  background: ${({theme}) => theme.colors.secundaryGradient};

  p{
    font-size: var(--lg);
    text-align: center;
    color: ${({theme}) => theme.colors.gray200};
    cursor: pointer;
  }

  span{
    color: ${({theme}) => theme.colors.primary};
    font-size: var(--1g);
    font-weight: 900;
    font-style: italic
  }

  @media (max-width: 48rem) {
    justify-content: center;
    gap: 3rem;
  }
`;
