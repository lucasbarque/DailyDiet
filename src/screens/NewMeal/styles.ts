import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export type StatiticsStyleProps = 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL';

type ContainerStyleProps = {
  type: StatiticsStyleProps;
};

export const Container = styled(SafeAreaView)<ContainerStyleProps>`
  ${({ theme, type }) =>
    type === 'POSITIVE' &&
    css`
      background-color: ${theme.COLORS.GREEN_LIGHT};
    `};
  ${({ theme, type }) =>
    type === 'NEGATIVE' &&
    css`
      background-color: ${theme.COLORS.RED_LIGHT};
    `};
  ${({ theme, type }) =>
    type === 'NEUTRAL' &&
    css`
      background-color: ${theme.COLORS.GRAY_500};
    `};
`;

export const Body = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 40px 24px;
  flex: 1;
  margin-top: -24px;
`;

export const Grid = styled.View`
  margin-top: 24px;
  flex-direction: row;
`;

export const GridSelect = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const Last = styled.View`
  flex: 1;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-top: 24px;
`;
