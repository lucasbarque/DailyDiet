import { TouchableOpacityProps } from 'react-native';

import { Amount, Container, Description } from './styles';

interface Props {
  amount: string;
  description: string;
}

export function Percent({ amount, description }: Props) {
  return (
    <Container>
      <Amount>{amount}</Amount>
      <Description>{description}</Description>
    </Container>
  );
}
