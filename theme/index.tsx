import {COLORS} from 'constants/colors';

interface platformColors {
  primary?: string;
  secondary?: string;
  grey?: string;
  searchBg?: string;
  success?: string;
  error?: string;
  warning?: string;
}

interface theme {
  colors: {
    primary?: string;
    secondary?: string;
    background?: string;
    white?: string;
    black?: string;
    blue1?: string;
    blue2?: string;
    blue3?: string;
    grey0?: string;
    grey1?: string;
    grey2?: string;
    grey3?: string;
    grey4?: string;
    grey5?: string;
    greyOutline?: string;
    searchBg?: string;
    success?: string;
    error?: string;
    warning?: string;
    divider?: string;
    platform?: {
      ios?: platformColors;
      android?: platformColors;
      web?: platformColors;
    };
  };
}

export const sampleTheme: theme = {
  colors: {
    primary: COLORS.MEDIUM_BLUE,
    white: COLORS.WHITE,
    black: COLORS.BLACK,
    blue1: COLORS.DARK_BLUE,
    blue2: COLORS.MIDNIGHT_BLUE,
    blue3: COLORS.LIGHT_BLUE,
    grey2: COLORS.MEDIUM_GRAY,
    grey3: COLORS.LIGHT_GRAY,
    grey4: COLORS.VERY_LIGHT_GRAY,
    grey5: COLORS.ULTRA_LIGHT_GRAY,
  };
};
