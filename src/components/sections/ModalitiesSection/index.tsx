import { useNavigate } from 'react-router-dom';
import { Button } from '../../Button';
import ModalitiesCards from '../../ModalitiesCards';
import { Title } from '../../Title';
import { Container, ModalitiesContainer } from './styles';

export const ModalitiesSection = () => {
  const navigate = useNavigate();

  return (
    <Container id='Modalities'>
      <Title title='Modalities' subtitle='We have the best service options to meet and exceed your expectations'/>
      
      <ModalitiesContainer>
        <ModalitiesCards 
          image='/images/Cozinha.png'
          title='Large kitchens '
          emphasis='Specials'
          description='O Bike Indoor ou Spinning é um exercício cardiovascular em bicicletas estacionárias, simulando pedal ao ar livre. Aulas em grupo, treinos intervalados e resistência ajustável são características-chave. Popular para melhorar resistência física.'
        />
        <ModalitiesCards 
          image='/images/Staircase.png'
          title='Staircase'
          emphasis='Triple H'
          description='Staircases constitute a non-mechanical means of vertical circulation that allows connections between planes at different levels. Here at Triple H we make moving between environments practical and functional, come and see our work'
          alingend={true}
        />
        <div className='btn-container'>
          <Button href='#' border={true} onClick={() => navigate('/modalities', {replace: true})}>
            Ver todas modalidades
          </Button>
        </div>
      </ModalitiesContainer>
      
    </Container>
  );
}
