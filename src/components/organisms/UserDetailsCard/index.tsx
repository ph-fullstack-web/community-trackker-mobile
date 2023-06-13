import {View} from 'react-native';

import styles from './UserDetailsCard.styles';
import {Avatar, Text} from 'components/atoms';

type UserDetailsCardProps = {
  full_name: string;
  csv_email: string;
};

export const UserDetailsCard = (props: UserDetailsCardProps) => {
  const {full_name, csv_email} = props;

  return (
    <View id="userDetailsCard" style={styles.container}>
      <Avatar id="userAvatar" size={120} />
      <View style={styles.userDetails}>
        <Text type="title" style={styles.fullname}>
          {full_name}
        </Text>
        <Text type="subtitle" style={styles.email}>
          {csv_email}
        </Text>
      </View>
    </View>
  );
};
