import styled, { css } from 'styled-components/native';

type ContainerProps = {
  grid: boolean;
  isSecond: boolean;
};

export const Container = styled.View<ContainerProps>`
  ${({ grid }) => (grid ? { width: '50%' } : { width: '100%' })}
`;

type LabelProps = {
  isSecond: boolean;
};

export const Label = styled.Text<LabelProps>`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  ${({ isSecond }) => isSecond && { marginLeft: 12 }}
`;

type InputTextProps = {
  isSecond: boolean;
  isFirst: boolean;
};

export const InputText = styled.TextInput<InputTextProps>`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};

  min-height: ${({ multiline }) => (multiline ? 120 : 48)}px;
  max-height: ${({ multiline }) => (multiline ? 120 : 48)}px;
  border-radius: 6px;
  padding: 8px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  ${({ isFirst }) => isFirst && { marginRight: 12 }}
  ${({ isSecond }) => isSecond && { marginLeft: 12 }}
`;
