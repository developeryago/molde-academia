import { Button } from '../Button';
import { Container, ButtonContainer, TitleContainer } from './styles';

const HeroTitle = () => {
  return (
    <Container>
      <TitleContainer>
        <h1>
          Building your <br />
          visions <br />
          <b>Constructing reality.</b>
        </h1>
        
        <ButtonContainer>
          <Button href='#Service'>View more</Button>
        </ButtonContainer>
      </TitleContainer>
    </Container>
  );
}

export default HeroTitle;
