import { Button } from '../Button';
import Form from '../Form';
import { Container, TextContainer, Mask } from './styles';

export type ModalitiesProps = {
  image: string,
  title: string,
  emphasis: string,
  description: string,
  alingend?: boolean | undefined | string,
}

const ModalitiesCards = ({image, title, emphasis, description, alingend}: ModalitiesProps) => {
  return (
    <Container>
      <img src={image} alt={title} />
      
      <TextContainer alingend={alingend}>
        <Mask alingend={alingend}></Mask>
        <h4>{title} <b>{emphasis}</b></h4>
        <p>
          {description}
        </p>
        <Button href='#Questions' border={true}>Contact now</Button>
      </TextContainer>
    </Container>
  )
}
<Form />

export default ModalitiesCards;
