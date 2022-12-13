import IllustrationNegativeImg from '@assets/illustration-negative.png';
import IllustrationPositiveImg from '@assets/illustration-positive.png';
import { Image, View } from 'react-native';

import { Button } from '@components/Button';

import {
  Container,
  Description,
  DescriptionBold,
  FeedbackStyleProps,
  Title,
} from './styles';

type Props = {
  type: FeedbackStyleProps;
};

export function Feedback({ type }: Props) {
  return (
    <Container>
      {type === 'POSITIVE' ? (
        <Title type={type}>Continue assim!</Title>
      ) : (
        <Title type={type}>Que Pena!</Title>
      )}
      {type === 'POSITIVE' ? (
        <Description>
          Você continua <DescriptionBold>dentro da dieta</DescriptionBold>.
          Muito bem!
        </Description>
      ) : (
        <Description>
          Você <DescriptionBold>saiu da dieta</DescriptionBold> dessa vez, mas
          continue se esforçando e não desista!
        </Description>
      )}

      <View>
        {type === 'POSITIVE' ? (
          <Image source={IllustrationPositiveImg} style={{ marginTop: 40 }} />
        ) : (
          <Image source={IllustrationNegativeImg} style={{ marginTop: 40 }} />
        )}

        <Button title="Ir para a página inicial" style={{ marginTop: 30 }} />
      </View>
    </Container>
  );
}
