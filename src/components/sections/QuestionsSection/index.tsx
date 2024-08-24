import Form from '../../Form';
import { Title } from '../../Title';
import { Container } from './styles';

export const QuestionsSection = () => {
  return (
    <Container id='Questions'>
      <Title title='Contact us' subtitle="Tell us about what you want to design and we'll get in touch"/>

      <Form />
    </Container>
  );
}
