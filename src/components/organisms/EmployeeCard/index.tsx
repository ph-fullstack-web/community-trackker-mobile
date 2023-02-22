import {Image, View} from 'react-native';
import {useTheme} from '@rneui/themed';

import {Text} from 'components/atoms';
import styles from './EmployeeCard.styles';

const id = '0000000';
const name = 'Employee Name';
const jobtitle = 'Title';
const community = 'Community';
const defaultAvatar = 'https://via.placeholder.com/100.png';

export const EmployeeCard = () => {
  const {theme} = useTheme();
  return (
    <>
      <View style={[styles.card, {borderColor: theme.colors.grey3}]}>
        <View style={styles.horizontal_layout}>
          <Image
            style={[styles.profile_picture, {borderColor: theme.colors.grey3}]}
            source={{
              uri: defaultAvatar,
            }}
          />
          <View>
            <Text>{name}</Text>
            <Text>
              #{id} - {jobtitle}
            </Text>
            <Text>{community}</Text>
          </View>
        </View>
      </View>
    </>
  );
};
