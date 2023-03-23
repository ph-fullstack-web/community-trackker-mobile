import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Avatar, Button, Card, defaultAvatar, Text} from 'components/atoms';
import {GRADIENT} from 'constants/colors';
import {PersonBySkills} from 'models/business';
import {useThemeProvider} from 'providers';

import styles from './MemberSkillCard.styles';

type MemberSkillCardProps = {
  memberDetails: PersonBySkills;
};

export const MemberSkillCard = (prop: MemberSkillCardProps) => {
  const {full_name, skills} = prop.memberDetails;
  const {mode} = useThemeProvider();

  return (
    <Card style={styles.cardContainer}>
      <View style={styles.avatarContainer}>
        <Avatar size={70} source={{uri: defaultAvatar}} />
      </View>
      <View style={styles.detailsContainer}>
        <Text type="title" style={styles.name}>
          {full_name}
        </Text>
        <View style={styles.chipsContainer}>
          {skills?.map((skill, index) => (
            <Button
              key={index}
              title={skill}
              titleStyle={styles.buttonTitleStyle}
              size="sm"
              buttonStyle={styles.buttonStyle}
              ViewComponent={LinearGradient}
              linearGradientProps={{
                colors: GRADIENT[`${mode}_theme` as keyof typeof GRADIENT],
                start: {x: 0, y: 0.5},
                end: {x: 1, y: 0.5},
              }}
            />
          ))}
        </View>
      </View>
    </Card>
  );
};
