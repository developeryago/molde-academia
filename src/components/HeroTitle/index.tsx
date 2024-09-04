import { ButtonHero } from '../ButtonHero';
import { Container, ButtonContainer, TitleContainer } from './styles';

const HeroTitle = () => {
  return (
    <Container>
      <TitleContainer>
        <h1>
          Building your <br />
          visions <br />
          <b>Constructing reality</b>
        </h1>
        
        <ButtonContainer>
          <ButtonHero href='#Service'>View more</ButtonHero>
        </ButtonContainer>
      </TitleContainer>
    </Container>
  );
}

export default HeroTitle;
