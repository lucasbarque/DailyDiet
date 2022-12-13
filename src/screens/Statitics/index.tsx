import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Percent } from '@components/Percent';
import { StatiticCard } from '@components/StatiticCard';

import { Body, Container, Header, Title } from './styles';

export function Statitics() {
  const { COLORS } = useTheme();
  const navigation = useNavigation();
  const type = 'POSITIVE';

  return (
    <>
      <Container type={type}>
        <Header>
          <TouchableOpacity onPress={() => navigation.navigate('meals')}>
            <ArrowLeft
              size={24}
              color={type === 'POSITIVE' ? COLORS.GREEN_DARK : COLORS.RED_DARK}
            />
          </TouchableOpacity>
          <Percent
            amount="90,86%"
            description="das refeições dentro da dieta"
          />
        </Header>
      </Container>
      <Body>
        <Title>Estatísticas gerais</Title>
        <StatiticCard
          type="NEUTRAL"
          amount={22}
          description="melhor sequência de pratos dentro da dieta"
        />
        <StatiticCard
          type="NEUTRAL"
          amount={109}
          description="refeições registradas"
        />
        <StatiticCard
          type="POSITIVE"
          amount={99}
          description="refeições dentro da dieta"
        />
        <StatiticCard
          type="NEGATIVE"
          amount={10}
          description="refeições fora da dieta"
        />
      </Body>
    </>
  );
}
