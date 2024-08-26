import { Container, UpContainer, VideoContainer } from './styles';
import HeroTitle from '../../HeroTitle';
import { SocialMedia } from '../../SocialMedia';

export const HeroSection = () => {
  return (
    <Container>
      <VideoContainer>
        <iframe 
          title="Body workout" 
          src="https://www.youtube.com/embed/HW2epAOGUxI?autoplay=1&loop=1&playlist=HW2epAOGUxI&controls=0&end=142&mute=1&amp;start=27&end=58" 
          allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        >
        </iframe>
      </VideoContainer>
            
      <UpContainer>
        <HeroTitle />

        <SocialMedia />
      </UpContainer>

    </Container>
  );
}

