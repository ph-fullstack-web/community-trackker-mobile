import {View} from 'react-native';

import {Card, Icon, Text} from 'components/atoms';
import {COLORS} from 'constants/colors';
import {useThemeProvider} from 'providers';

import styles from './SkillCard.styles';
import {SkillCardProps} from './SkillCard.types';

export const SkillCard = ({
  numColumns = 2,
  data: {peopleskills_id, peopleskills_desc, is_active},
  onEdit,
  onDelete,
}: SkillCardProps) => {
  const {mode} = useThemeProvider();

  return (
    <Card style={[styles.cardContainer, {width: `${100 / numColumns}%`}]}>
      <View style={styles.titleContainer}>
        <Text style={styles[`text_${mode}` as keyof typeof styles]}>
          {peopleskills_desc}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        {is_active ? (
          <>
            <Icon
              type="material"
              name="edit"
              color={
                mode === 'light' ? COLORS.MIDNIGHT_BLUE : COLORS.VERY_LIGHT_GRAY
              }
              size={25}
              onPress={() => onEdit(peopleskills_id)}
            />
            <Icon
              type="material"
              name="delete"
              color={
                mode === 'light' ? COLORS.MIDNIGHT_BLUE : COLORS.VERY_LIGHT_GRAY
              }
              size={25}
              onPress={() => onDelete(peopleskills_id)}
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
