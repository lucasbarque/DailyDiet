import { TouchableOpacity, View } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-radius: 6px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};

  padding: 14px 12px;
  margin-bottom: 8px;
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  flex: 1;
`;

export const Separator = styled.View`
  width: 1px;
  height: 14px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  margin: 0 12px;
`;

export type MealStatusStyleProps = 'INSIDE' | 'OUTSIDE';

type StatusProps = {
  status: MealStatusStyleProps;
};

export const Status = styled(View)<StatusProps>`
  width: 14px;
  height: 14px;

  background-color: ${({ theme, status }) =>
    status === 'INSIDE' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID}


  border-radius: 100px;
`;
