import {View} from 'react-native';

import styles from './UserDetailsCard.styles';
import {Avatar, Text} from 'components/atoms';
import {User} from 'models/business';

type UserDetailsCardProps = {
  user: User | undefined;
};

export const UserDetailsCard = (props: UserDetailsCardProps) => {
  const {user} = props;

  return (
    <View style={styles.container}>
      <Avatar size={120} />
      <View style={styles.userDetails}>
        <Text type="title" style={styles.fullname}>
          {user?.fullname}
        </Text>
        <Text type="subtitle" style={styles.email}>
          {user?.csvEmail}
        </Text>
      </View>
    </View>
  );
};
