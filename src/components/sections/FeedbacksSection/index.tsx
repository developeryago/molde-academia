import FeedbacksCard from '../../FeedbacksCard';
import { Title } from '../../Title';
import { Container } from './styles';

export const FeedbacksSection = () => {
  return (
    <Container>
      <Title title='Our customers' subtitle='What our clients think of our work'/>

      <FeedbacksCard />
    </Container>
  );
}

