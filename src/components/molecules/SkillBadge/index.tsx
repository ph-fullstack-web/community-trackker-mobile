import {View} from 'react-native';

import {Icon} from 'components/atoms';
import {COLORS} from 'constants/colors';

import styles from './SkillBadge.styles';
import {SkillBadgeProps} from './SkillBadge.types';
import {skillBadgeMap} from 'constants/skills';

export const SkillBadge = (props: SkillBadgeProps) => {
  const skillBadge = skillBadgeMap.get(props.skillId);

  return (
    <View style={[styles.container, {width: `${100 / props.numColumns}%`}]}>
      {skillBadge ? (
        <Icon {...skillBadge} size={props.size} />
      ) : (
        <Icon
          name="help-circle-outline"
          type="material-community"
          color={COLORS.GRAY}
          size={props.size}
        />
      )}
    </View>
  );
};
