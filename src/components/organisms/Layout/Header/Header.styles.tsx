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
    borderBottomColor: COLORS.MEDIUM_GRAY,
    borderBottomWidth: 2,
    backgroundColor: COLORS.DEFAULT_BACKGROUND,
  },
  logoContainer: {
    zIndex: -1,
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'center',
    height: '100%',
    marginLeft: -60,
  },
});

export default styles;
