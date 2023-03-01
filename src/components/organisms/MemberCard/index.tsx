import {View} from 'react-native';

import {Avatar, Card, defaultAvatar, Icon, Text} from 'components/atoms';
import {COLORS} from 'constants/colors';

import styles from './MemberCard.styles';

type MemberCardProps = {
  memberDetails: {
    image?: string;
    fullName: string;
    csvEmail: string;
    dateHired: string;
    isActive: boolean;
  };
};

export const MemberCard = (prop: MemberCardProps) => {
  const {image, fullName, csvEmail, dateHired, isActive} = prop.memberDetails;

  return (
    <Card style={styles.cardContainer}>
      <View style={styles.avatarContainer}>
        <Avatar size={70} source={{uri: image ?? defaultAvatar}} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.nameContainer}>
          <Text type="title" style={styles.name}>
            {fullName}
          </Text>
          {isActive ? (
            <Icon
              name="user-following"
              type="simple-line-icon"
              color={COLORS.DARK_BLUE}
            />
          ) : (
            <Icon
              name="user-unfollow"
              type="simple-line-icon"
              color={COLORS.DARK_GRAY}
            />
          )}
        </View>

        <Text style={styles.email}>{csvEmail}</Text>
        <Text style={styles.dateHired}>{dateHired}</Text>
      </View>
    </Card>
  );
};
