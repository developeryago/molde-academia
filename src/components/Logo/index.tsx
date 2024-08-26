import { Link } from 'react-router-dom';
import { Container } from './styles';

const Logo = () => {
  return (
    <Container>
      <Link to={'/'}>
        <img src="/assets/Logo01.PNG" alt="Logo Triple H" />
      </Link>
    </Container>
  )
}

export default Logo;
