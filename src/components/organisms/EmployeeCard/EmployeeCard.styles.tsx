import {StyleSheet} from 'react-native';

import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 15,
    borderWidth: 1,
    borderColor: COLORS.MEDIUM_GRAY,
    borderRadius: 15,
  },
  horizontal_layout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile_picture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
    borderWidth: 1,
    borderColor: COLORS.LIGHT_GRAY,
  },
});

export default styles;
