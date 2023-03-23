import {View} from 'react-native';

import {Card, Icon, Text} from 'components/atoms';
import {COLORS} from 'constants/colors';
import {useThemeProvider} from 'providers';

import styles from './ProjectCard.styles';
import {ProjectCardProps} from './ProjectCard.types';

export const ProjectCard = ({data}: ProjectCardProps) => {
  const {mode} = useThemeProvider();

  return (
    <Card style={styles.cardContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles[`text_${mode}` as keyof typeof styles]}>
          {data.project}
        </Text>
        <View style={styles.subtitleContainer}>
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
          <Text style={styles.subtitleText}>{data.project_code}</Text>
        </View>
      </View>
      {/**TODO: uncomment when mutation would be enabled */}
      {/* <View style={styles.buttonContainer}>
        <>
          <ProjectModal data={data} onEdit={onEdit} />
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
