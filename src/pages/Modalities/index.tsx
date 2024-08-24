import ModalitiesCards from '../../components/ModalitiesCards';
import { Title } from '../../components/Title';
import { modalitiesInfoOne } from '../../modules/modalities-info';
import { Container } from './styles';
import * as Section from '../../components/sections';

const Modalities = () => {
  return (
    <Container>
      <Title title='All our specialties' subtitle='Be surprised by what we can offer you' />

      {modalitiesInfoOne.map((item) => 
        <ModalitiesCards 
          title={item.title}
          emphasis={item.emphasis}
          description={item.description}
          image={item.image}
          alingend={item.alingEnd}
          key={item.id}
        />
      )}

      <Section.QuestionsSection />
    </Container>
  )
}

export default Modalities;
