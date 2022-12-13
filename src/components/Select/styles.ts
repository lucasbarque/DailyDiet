import styled, { css } from 'styled-components/native';

export type SelectStyleProps = 'POSITIVE' | 'NEGATIVE';

type ContainerProps = {
  type: SelectStyleProps;
  isSelected: boolean;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  min-height: 50px;
  max-height: 50px;

  ${({ isSelected, theme, type }) => css`
    ${!isSelected
      ? `background-color: ${theme.COLORS.GRAY_600}`
      : type === 'POSITIVE'
      ? `background-color: ${theme.COLORS.GREEN_LIGHT};border: 1px solid ${theme.COLORS.GREEN_DARK}`
      : `background-color: ${theme.COLORS.RED_LIGHT};border: 1px solid ${theme.COLORS.RED_DARK}`}
  `};

  width: 50%;
  border-radius: 6px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

type BulletProps = {
  type: SelectStyleProps;
};

export const Bullet = styled.View<BulletProps>`
  background-color: ${({ theme, type }) =>
    type === 'POSITIVE' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  width: 8px;
  height: 8px;
  margin-right: 8px;
  border-radius: 50px;
`;
