import {View} from 'react-native';

import {Avatar, Button, Card, defaultAvatar, Text} from 'components/atoms';
import {PersonBySkills} from 'models/business';

import styles from './MemberSkillCard.styles';

type MemberSkillCardProps = {
  memberDetails: PersonBySkills;
};

export const MemberSkillCard = (prop: MemberSkillCardProps) => {
  const {full_name, skills} = prop.memberDetails;

  return (
    <Card id="memberSkillCard" style={styles.cardContainer}>
      <View style={styles.avatarContainer}>
        <Avatar id="memberAvatar" size={70} source={{uri: defaultAvatar}} />
      </View>
      <View style={styles.detailsContainer}>
        <Text type="title" style={styles.name}>
          {full_name}
        </Text>
        <View style={styles.chipsContainer}>
          {skills?.map((skill, index) => (
            <Button
              id={`btn_memberSkill${index}`}
              key={index}
              title={skill}
              titleStyle={styles.buttonTitleStyle}
              size="sm"
              buttonStyle={styles.buttonStyle}
              gradient
            />
          ))}
        </View>
      </View>
    </Card>
  );
};
