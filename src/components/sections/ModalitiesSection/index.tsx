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
          description='Large-scale kitchens guarantee maximum functionality for every square meter of the room and are designed to meet your needs, creating your meals and interacting with important people.Our role is to create an environment that facilitates movement for all family members.'
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
            View More
          </Button>
        </div>
      </ModalitiesContainer>
      
    </Container>
  );
}
