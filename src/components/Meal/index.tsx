import {
  Container,
  Hour,
  MealStatusStyleProps,
  Separator,
  Status,
  Title,
} from './styles';

type Props = {
  title: string;
  hour: string;
  status: MealStatusStyleProps;
};

export function Meal({ title, hour, status }: Props) {
  return (
    <Container>
      <Hour>{hour}</Hour>
      <Separator />
      <Title>{title}</Title>
      <Status status={status} />
    </Container>
  );
}
