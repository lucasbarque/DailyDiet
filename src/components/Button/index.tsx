
import { TouchableOpacityProps } from 'react-native';

import { ButtonTypeStyleProps, Container, Title } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  icon?: JSX.Element;
};

export function Button({ title, icon, type = 'SOLID', ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      {icon && icon}
      <Title>{title}</Title>
    </Container>
  );
}
