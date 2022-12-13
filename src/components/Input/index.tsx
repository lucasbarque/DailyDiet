import { TextInputProps } from 'react-native';

import { Container, InputText, Label } from './styles';

type Props = TextInputProps & {
  label: string;
  grid?: boolean;
  isFirst?: boolean;
  isSecond?: boolean;
};

export function Input({
  label,
  grid = false,
  isFirst = false,
  isSecond = false,
  ...rest
}: Props) {
  return (
    <Container grid={grid} isSecond={isSecond}>
      <Label isSecond={isSecond}>{label}</Label>
      <InputText isFirst={isFirst} isSecond={isSecond} {...rest} />
    </Container>
  );
}
