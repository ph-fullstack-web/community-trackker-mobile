import {View} from 'react-native';

import {Chip} from 'components/atoms';
import {NoResult} from 'components/molecules';
import {SkillSet} from 'models/business';

import styles from './SkillBadgeContainer.styles';
import {SkillBadgeContainerProps} from './SkillBadgeContainer.types';

export const SkillBadgeContainer = ({
  skills = [],
}: SkillBadgeContainerProps) => {
  if (skills.length === 0) {
    return <NoResult message="No Skills Found" />;
  }

  return (
    <View style={styles.container} id="skillBadgeContainer">
      {skills?.map((item: SkillSet, index: number) => {
        return (
          <Chip
            id={`skillChip${index}`}
            key={index}
            title={item.description}
            gradient={true}
          />
        );
      })}
    </View>
  );
};
