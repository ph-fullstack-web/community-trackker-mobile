import {View, Text, Image} from 'react-native';

import {Icon} from '../Icon';
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
  const defaultAvatar = 'https://via.placeholder.com/30.png';

  return (
    <View style={styles.cardContainer}>
      <View style={styles.avatarContainer}>
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 50,
          }}
          source={{
            uri: image ?? defaultAvatar,
          }}
        />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{fullName}</Text>
          {isActive ? (
            <Icon name="user-following" type="simple-line-icon" color="gray" />
          ) : (
            <Icon name="user-unfollow" type="simple-line-icon" color="gray" />
          )}
        </View>

        <Text style={styles.email}>{csvEmail}</Text>
        <Text style={styles.dateHired}>{dateHired}</Text>
      </View>
    </View>
  );
};
