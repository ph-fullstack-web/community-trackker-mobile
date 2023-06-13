import {View} from 'react-native';

import {Card, Icon, Text} from 'components/atoms';
import {COLORS} from 'constants/colors';
import {useThemeProvider} from 'providers';

import styles from './SkillCard.styles';
import {SkillCardProps} from './SkillCard.types';

export const SkillCard = ({data}: SkillCardProps) => {
  const {mode} = useThemeProvider();

  return (
    <Card id="skillCard" style={styles.cardContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles[`text_${mode}` as keyof typeof styles]}>
          {data.peopleskills_desc}
        </Text>
        <View style={styles.statusContainer}>
          <Icon
            type="simple-line-icon"
            name={data.is_active ? 'check' : 'close'}
            color={
              mode === 'light' ? COLORS.MIDNIGHT_BLUE : COLORS.VERY_LIGHT_GRAY
            }
            size={12}
          />
          <Text style={styles.statusText}>
            {data.is_active ? 'Active' : 'Inactive'}
          </Text>
        </View>
      </View>
      {/**TODO: uncomment when mutation would be enabled */}
      {/* <View style={styles.buttonContainer}>
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
      </View> */}
    </Card>
  );
};
