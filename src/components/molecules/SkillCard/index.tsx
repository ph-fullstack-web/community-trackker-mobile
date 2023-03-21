import {View} from 'react-native';

import {Card, Icon, Text} from 'components/atoms';
import {COLORS} from 'constants/colors';
import {useThemeProvider} from 'providers';

import styles from './SkillCard.styles';
import {SkillCardProps} from './SkillCard.types';
import {SkillModal} from '../SkillModal';

export const SkillCard = ({data, onEdit, onDelete}: SkillCardProps) => {
  const {mode} = useThemeProvider();

  return (
    <Card style={styles.cardContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles[`text_${mode}` as keyof typeof styles]}>
          {data.peopleskills_desc}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        {data.is_active ? (
          <>
            <SkillModal data={data} onEdit={onEdit} />
            <Icon
              type="material"
              name="delete"
              color={
                mode === 'light' ? COLORS.MIDNIGHT_BLUE : COLORS.VERY_LIGHT_GRAY
              }
              size={25}
              onPress={() => onDelete(data)}
            />
          </>
        ) : (
          <></>
        )}
      </View>
    </Card>
  );
};

export * from './SkillCard.types';
