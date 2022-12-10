import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type ButtonTypeStyleProps = 'SOLID' | 'OUTLINE';

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  min-height: 50px;
  max-height: 50px;

  background-color: ${({ theme, type }) =>
    type === 'SOLID' ? theme.COLORS.GRAY_200 : theme.COLORS.RED_DARK};

  border-radius: 6px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
