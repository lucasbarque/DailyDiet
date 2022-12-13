import { TouchableOpacityProps } from 'react-native';

import { Bullet, Container, SelectStyleProps, Title } from './styles';

type Props = TouchableOpacityProps & {
  text: string;
  type: SelectStyleProps;
  isSelected?: boolean;
};

export function Select({ text, type, isSelected = false, ...rest }: Props) {
  return (
    <Container {...rest} type={type} isSelected={isSelected}>
      <Bullet type={type} />
      <Title>{text}</Title>
    </Container>
  );
}
