import { TouchableOpacityProps } from 'react-native';

import {
  Amount,
  Container,
  Description,
  Icon,
  PercentStyleProps,
} from './styles';

interface Props extends TouchableOpacityProps {
  type?: PercentStyleProps;
}

export function Percent({ type = 'POSITIVE' }: Props) {
  return (
    <Container type={type}>
      <Icon />
      {/* TODO: Como passar o atributo do pai "Container" para o filho Icon*/}

      <Amount>90,86%</Amount>
      <Description>das refeições dentro da dieta</Description>
    </Container>
  );
}
