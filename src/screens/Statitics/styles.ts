import { SafeAreaView } from 'react-native';
import styled, { css } from 'styled-components/native';

export type StatiticsStyleProps = 'POSITIVE' | 'NEGATIVE';

type ContainerStyleProps = {
  type: StatiticsStyleProps;
};

export const Container = styled(SafeAreaView)<ContainerStyleProps>`
  background-color: ${({ theme, type }) =>
    type === 'POSITIVE' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Header = styled.View`
  padding: 24px;
`;

export const Body = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 20px;
  padding: 30px 24px;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-bottom: 11px;
`;
