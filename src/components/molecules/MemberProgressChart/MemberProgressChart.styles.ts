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
  container_light: {
    backgroundColor: COLORS.WHITE,
  },
  container_dark: {
    backgroundColor: COLORS.BLACK,
  },
  textContainer_light: {
    backgroundColor: COLORS.MEDIUM_GRAY,
  },
  textContainer_dark: {
    backgroundColor: COLORS.LIGHT_GRAY,
  },
});

export default styles;
