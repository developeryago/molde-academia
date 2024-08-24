import styled, { css} from 'styled-components';

export const Container = styled.section`
${({theme}) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

  p{
    font-size: var(--base);
    color: ${theme.colors.gray100};
    line-height: 1.8;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
  }

  @media (max-width: 48rem){
    width: 36rem;
  };
`}
`;
