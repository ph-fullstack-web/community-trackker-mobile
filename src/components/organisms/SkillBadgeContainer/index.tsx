import {View} from 'react-native';

import {NoResult, SkillBadge} from 'components/molecules';
import {Peopleskills} from 'models/business';

import styles from './SkillBadgeContainer.styles';
import {SkillBadgeContainerProps} from './SkillBadgeContainer.types';

export const SkillBadgeContainer = (props: SkillBadgeContainerProps) => {
  const {user} = props;

  if (user?.skills?.length === 0) {
    return <NoResult message="No Skills Found" />;
  }

  return (
    <View style={styles.row}>
      {user?.skills?.map((item: Peopleskills, index: number) => {
        return (
          <SkillBadge
            key={index}
            size={props.size}
            skillId={item.peopleskills_id}
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
