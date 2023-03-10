import {View} from 'react-native';

import {NoResult, SkillBadge} from 'components/molecules';
import {SkillSet} from 'models/business';

import styles from './SkillBadgeContainer.styles';
import {SkillBadgeContainerProps} from './SkillBadgeContainer.types';

export const SkillBadgeContainer = (props: SkillBadgeContainerProps) => {
  const {skills = []} = props;

  if (skills.length === 0) {
    return <NoResult message="No Skills Found" />;
  }

  return (
    <View style={styles.row}>
      {skills?.map((item: SkillSet, index: number) => {
        return (
          <SkillBadge
            key={index}
            size={props.size}
            skillId={item.id}
            numColumns={props.numColumns}
          />
        );
      })}
    </View>
  );
};

SkillBadgeContainer.defaultProps = {
  numColumns: 4,
  size: 75,
};
