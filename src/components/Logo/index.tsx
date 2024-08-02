import { Link } from 'react-router-dom';
import { Container } from './styles';

const Logo = () => {
  return (
    <Container>
      <Link to={'/'}>
        <img src="/assets/Logo01.PNG" alt="Logo Academia XHealth" />
      </Link>
    </Container>
  )
}

export default Logo;
