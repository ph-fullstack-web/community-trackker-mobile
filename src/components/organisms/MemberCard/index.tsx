import {View} from 'react-native';

import {Avatar, Card, defaultAvatar, Icon, Text} from 'components/atoms';
import {COLORS} from 'constants/colors';
import {useThemeProvider} from 'providers/ThemeProvider';

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
  const {mode} = useThemeProvider();

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

        <Text style={styles.email}>{csvEmail}</Text>
        <Text style={styles.dateHired}>{dateHired}</Text>
      </View>
    </Card>
  );
};
