import {
  Amount,
  Container,
  Description,
  StatiticCardStyleProps,
} from './styles';

type Props = {
  type: StatiticCardStyleProps;
  amount: number;
  description: string;
};

export function StatiticCard({ type = 'NEUTRAL', amount, description }: Props) {
  return (
    <Container type={type}>
      <Amount>{amount}</Amount>
      <Description>{description}</Description>
    </Container>
  );
}
