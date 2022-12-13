import styled, { css } from 'styled-components/native';

export type StatiticCardStyleProps = 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL';

interface Props {
  type: StatiticCardStyleProps;
}

export const Container = styled.View<Props>`
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
      background-color: ${theme.COLORS.GRAY_600};
    `};

  padding: 16px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 100%;
  margin-top: 12px;
`;

export const Amount = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;
