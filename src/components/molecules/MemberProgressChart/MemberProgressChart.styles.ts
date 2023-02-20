import {StyleSheet} from 'react-native';

import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    right: -30,
    paddingVertical: 15,
    paddingLeft: 15,
    paddingRight: 2,
    zIndex: 1,
    backgroundColor: COLORS.WHITE,
    height: 180,
    borderTopLeftRadius: 90,
    borderBottomLeftRadius: 90,
  },
  textWrapper: {
    position: 'absolute',
    height: 180,
    width: 180,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    right: 5,
  },
  textContainer: {
    justifyContent: 'center',
    backgroundColor: COLORS.ULTRA_LIGHT_GRAY,
    borderRadius: 40,
    width: 80,
    height: 80,
  },
  text: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '500',
  },
  percent: {
    fontSize: 14,
  },
});

export default styles;
