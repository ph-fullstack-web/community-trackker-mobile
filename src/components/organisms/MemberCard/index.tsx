import {View} from 'react-native';

import {Avatar, Card, defaultAvatar, Icon, Text} from 'components/atoms';
import {COLORS} from 'constants/colors';
import {PeopleUnderCommunitySearch} from 'models/business';
import {useThemeProvider} from 'providers';

import styles from './MemberCard.styles';

type MemberCardProps = {
  memberDetails: PeopleUnderCommunitySearch;
};

export const MemberCard = (prop: MemberCardProps) => {
  const {full_name, csv_email, hired_date, is_active} = prop.memberDetails;
  const {mode} = useThemeProvider();

  return (
    <Card style={styles.cardContainer}>
      <View style={styles.avatarContainer}>
        <Avatar size={70} source={{uri: defaultAvatar}} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.nameContainer}>
          <Text type="title" style={styles.name}>
            {full_name}
          </Text>
          {is_active ? (
            <Icon
              name="user-following"
              type="simple-line-icon"
              color={mode === 'light' ? COLORS.DARK_BLUE : COLORS.MEDIUM_TEAL}
            />
          ) : (
            <Icon
              name="user-unfollow"
              type="simple-line-icon"
              color={mode === 'light' ? COLORS.DARK_GRAY : COLORS.LIGHT_GRAY}
            />
          )}
        </View>

        <Text style={styles.email}>{csv_email}</Text>
        <Text style={styles.dateHired}>
          {new Date(hired_date).toLocaleDateString()}
        </Text>
      </View>
    </Card>
  );
};
