import {COLORS} from './colors';

export const skillBadgeMap = new Map<number, Icon>([
  [1, {type: 'material-community', name: 'dot-net'}],
  [
    2,
    {type: 'material-community', name: 'dot-net', color: COLORS.DOTNET_PURPLE},
  ],
  [
    6,
    {type: 'material-community', name: 'angular', color: COLORS.AMERICAN_RED},
  ],
  [92, {type: 'material-community', name: 'react', color: COLORS.SKY_BLUE}],
  [128, {type: 'material-community', name: 'vuejs', color: COLORS.MINT_GREEN}],
  [
    47,
    {
      type: 'material-community',
      name: 'language-javascript',
      color: COLORS.MINION_YELLOW,
    },
  ],
  [
    45,
    {
      type: 'material-community',
      name: 'language-java',
      color: COLORS.AMERICAN_RED,
    },
  ],
  [
    46,
    {
      type: 'material-community',
      name: 'language-java',
      color: COLORS.JAVA_ORANGE,
    },
  ],
]);
