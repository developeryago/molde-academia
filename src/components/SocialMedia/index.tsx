import { Container } from './styles';
import { FacebookIcon, InstagramIcon, MailIcon } from '../CustomIcons/SocialIcons';


export function SocialMedia() {
  return (
    <Container>
      <a href='https://www.instagram.com/tripleh_boston' target='_blank'>
        <InstagramIcon />
      </a>
      <a href='https://api.whatsapp.com/send/?phone=17819249820&text&type=phone_number&app_absent=0' target='_blank'>
        <FacebookIcon />
      </a>
      <a href='https://linktr.ee/triplehconstruction' target='_blank'>
        <MailIcon />
      </a>
    </Container>
  );
}
