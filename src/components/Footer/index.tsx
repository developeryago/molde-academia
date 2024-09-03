import Logo from '../Logo';
import { Container } from './styles';

const Footer = () => {
  return (
    <Container>
      <Logo />
      <a href="https://www.linkedin.com/in/developeryago/" target='blank'>
        <p>Produced with care by Yago Machado©</p>
      </a>
    </Container>
  );
}

export default Footer;
