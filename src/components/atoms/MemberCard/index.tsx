import {View, Text, StyleSheet, Image} from 'react-native';
import {Icon} from '@rneui/themed';

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

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#dadce0',
    borderStyle: 'solid',
    borderWidth: 1,
    margin: 5,
    padding: 20,
  },
  avatarContainer: {
    flex: 0.25,
  },
  detailsContainer: {
    flex: 0.75,
  },
  nameContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  email: {
    fontSize: 13,
  },
  dateHired: {
    fontSize: 13,
  },
});
