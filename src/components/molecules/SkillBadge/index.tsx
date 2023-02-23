import {View} from 'react-native';

import styles from './SkillBadge.styles';
import {Avatar, Icon} from 'components/atoms';
import {COLORS} from 'constants/colors';

type SkillBadgeProps = {
  size: number;
  skillId: number;
  numColumns?: number;
};

export const SkillBadge = (props: SkillBadgeProps) => {
  const skillBadgeMap = new Map<number, Icon>([
    [
      1,
      {type: 'material-community', name: 'angular', color: COLORS.SCARLET_RED},
    ],
    [2, {type: 'material-community', name: 'react', color: COLORS.SKY_BLUE}],
    [3, {type: 'material-community', name: 'vuejs', color: COLORS.MINT_GREEN}],
    [
      4,
      {
        type: 'material-community',
        name: 'language-javascript',
        color: COLORS.MINION_YELLOW,
      },
    ],
    [
      5,
      {
        type: 'material-community',
        name: 'language-java',
        color: COLORS.JAVA_ORANGE,
      },
    ],
  ]);

  const skillBadge = skillBadgeMap.get(props.skillId);

  return (
    <View
      style={[styles.container, {width: `${100 / (props.numColumns ?? 3)}%`}]}
    >
      {skillBadge ? (
        <Icon {...skillBadge} size={props.size} />
      ) : (
        <Avatar size={props.size} />
      )}
    </View>
  );
};
