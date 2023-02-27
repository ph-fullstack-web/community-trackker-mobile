import {StyleSheet} from 'react-native';

import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 65,
    width: '100%',
    paddingVertical: 10,
    backgroundColor: COLORS.MIDNIGHT_BLUE,
  },
  logoContainer: {
    zIndex: -1,
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    marginLeft: -60,
  },
});

export default styles;
