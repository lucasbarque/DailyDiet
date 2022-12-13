import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export type FeedbackStyleProps = 'POSITIVE' | 'NEGATIVE';

interface Props {
  type: FeedbackStyleProps;
}

export const Container = styled(SafeAreaView)`
  padding: 32px;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

type TitleProps = {
  type: FeedbackStyleProps;
};

export const Title = styled.Text<TitleProps>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};

    ${type === 'POSITIVE'
      ? `color: ${theme.COLORS.GREEN_DARK}`
      : `color: ${theme.COLORS.RED_DARK}`}
  `}
`;
export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  text-align: center;
`;

export const DescriptionBold = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
