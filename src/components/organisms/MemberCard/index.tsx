import {memo, useMemo} from 'react';
import {View} from 'react-native';

import styles from './MemberCard.styles';
import {Avatar, Card, defaultAvatar, Icon, Text} from 'components/atoms';
import {COLORS} from 'constants/colors';

type MemberCardProps = {
  memberDetails: {
    image?: string;
    fullName: string;
    csvEmail: string;
    dateHired: string;
    isActive: boolean;
  };
};

export const MemberCard = memo(({memberDetails}: MemberCardProps) => {
  const {image, fullName, csvEmail, dateHired, isActive} = memberDetails;
  const avatar = useMemo(() => ({uri: image ?? defaultAvatar}), [image]);
  const UserIcon = useMemo(
    () => (
      <Icon
        name={isActive ? 'user-following' : 'user-unfollow'}
        type="simple-line-icon"
        color={isActive ? COLORS.DARK_BLUE : COLORS.DARK_GRAY}
      />
    ),
    [isActive]
  );

  return (
    <Card style={styles.cardContainer}>
      <View style={styles.avatarContainer}>
        <Avatar size={70} source={avatar} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.nameContainer}>
          <Text type="title" style={styles.name}>
            {fullName}
          </Text>
          {UserIcon}
        </View>

        <Text style={styles.email}>{csvEmail}</Text>
        <Text style={styles.dateHired}>{dateHired}</Text>
      </View>
    </Card>
  );
});
