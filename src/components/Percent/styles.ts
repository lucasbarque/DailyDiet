import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Amount = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XG}px;
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
