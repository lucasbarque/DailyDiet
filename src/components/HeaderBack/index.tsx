import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Container, Title } from './styles';

type Props = {
  title: string;
};

export function HeaderBack({ title }: Props) {
  const { COLORS } = useTheme();
  const navigation = useNavigation();

  return (
    <Container>
      <TouchableOpacity
        onPress={() => navigation.navigate('meals')}
        style={{ zIndex: 9 }}
      >
        <ArrowLeft size={24} color={COLORS.GRAY_200} />
      </TouchableOpacity>
      <Title>{title}</Title>
    </Container>
  );
}
