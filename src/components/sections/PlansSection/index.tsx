import PlansCard from '../../PlansCard';
import { Title } from '../../Title';
import { Container, FlexContainer } from './styles';

export const PlansSection = () => {
  return (
    <Container id='Plans'>
      <Title title='Planos mensais' subtitle='Temos todos os tipos de planos, desde o mais básico ao vip' />

      <FlexContainer>
        <PlansCard />
      </FlexContainer>
    </Container>
  )
}

