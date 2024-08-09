import { Container, Grid } from './styles';
import { Title } from '../../Title';

import ServiceCards from '../../ServiceCards';

export const ServicesSection = () => {
  return (
    <Container id='Service'>
      <Title title='What we ruined for you?' subtitle='We are known for beautiful design solutions, excellent craftsmanship and exceptional customer service'/>
      <Grid>
        <ServiceCards />
      </Grid>
    </Container>
  );
}
