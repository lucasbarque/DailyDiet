import { TouchableOpacityProps } from 'react-native';

import { Percent } from '@components/Percent';

import { Container, Icon, PercentStyleProps } from './styles';

interface Props extends TouchableOpacityProps {
  amount: string;
  description: string;
  type?: PercentStyleProps;
}

export function PercentCard({
  type = 'POSITIVE',
  amount,
  description,
  ...rest
}: Props) {
  return (
    <Container type={type} {...rest}>
      <Icon />
      {/* TODO: Como passar o atributo do pai "Container" para o filho Icon*/}

      <Percent amount={amount} description={description} />
    </Container>
  );
}
