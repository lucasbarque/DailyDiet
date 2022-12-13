import { ArrowUpRight, CaretLeft, IconContext } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type PercentStyleProps = 'POSITIVE' | 'NEGATIVE' | 'NEGATIVE';

interface Props {
  type: PercentStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  background-color: ${({ theme, type }) =>
    type === 'POSITIVE' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  margin-top: 30px;
  border-radius: 8px;

  align-items: center;
  justify-content: center;

  padding: 20px 16px;
`;

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))`
  position: absolute;
  top: 13px;
  right: 13px;
`;
