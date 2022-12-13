import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

import { Button } from '@components/Button';
import { HeaderBack } from '@components/HeaderBack';
import { Input } from '@components/Input';
import { Select } from '@components/Select';

import { Body, Container, Grid, GridSelect, Label, Last } from './styles';

export function NewMeal() {
  const type = 'NEUTRAL';

  const navigation = useNavigation();

  return (
    <>
      <Container type={type}>
        <HeaderBack title="Nova refeição" />
      </Container>
      <Body>
        <Input label="Nome" />
        <View style={{ marginTop: 24 }}>
          <Input label="Descrição" multiline />
        </View>
        <Grid>
          <Input label="Data" grid isFirst />
          <Input label="Hora" grid isSecond />
        </Grid>

        <Last>
          <Label>Está dentro da dieta?</Label>
          <GridSelect style={{ marginRight: 8 }}>
            <Select text="Sim" type="POSITIVE" style={{ marginRight: 4 }} />
            <Select
              text="Não"
              type="NEGATIVE"
              style={{ marginRight: -4, marginLeft: 4 }}
            />
          </GridSelect>
        </Last>

        <Button
          title="Cadastrar refeição"
          onPress={() => navigation.navigate('feedback')}
        />
      </Body>
    </>
  );
}
