import { Plus } from 'phosphor-react-native';
import { SectionList, Text } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Meal } from '@components/Meal';
import { Percent } from '@components/Percent';

import { Container, Date, Title } from './styles';

export function Meals() {
  const { COLORS } = useTheme();

  const meals = [
    {
      title: '12.08.22',
      data: ['X Tudo', 'Whey', 'Salada'],
    },
    {
      title: '11.08.22',
      data: ['Whey', 'X Tudo', 'Salada'],
    },
    {
      title: '10.08.22',
      data: ['Whey', 'X Tudo', 'Salada'],
    },
  ];

  return (
    <Container>
      <Header />
      <Percent />
      <Title>Refeições</Title>
      <Button
        title="Nova refeição"
        icon={
          <Plus color={COLORS.WHITE} size={18} style={{ marginRight: 12 }} />
          // TODO: Como passar só o nome do botão?
        }
        style={{ marginBottom: 32 }}
      />
      <SectionList
        sections={meals}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Meal key={item} hour="20:00" title="X-tudo" status="INSIDE" />
        )}
        renderSectionHeader={({ section: { title } }) => <Date>{title}</Date>}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
