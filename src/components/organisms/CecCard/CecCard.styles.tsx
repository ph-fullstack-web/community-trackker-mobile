import {StyleSheet} from 'react-native';

import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginVertical: 35,
    marginHorizontal: 10,
  },
  details_wrapper: {
    flex: 0.45,
    padding: 15,
  },
  buttonContainer: {
    marginTop: 15,
  },
  button: {
    padding: 5,
    borderRadius: 20,
    width: 130,
  },
  buttonText: {
    color: COLORS.VERY_LIGHT_GRAY,
    textAlign: 'center',
    fontSize: 13,
  },
  card_chart_container: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  chart_wrapper: {
    flexDirection: 'row',
    position: 'absolute',
    left: -10,
    paddingVertical: 15,
    paddingLeft: 15,
    paddingRight: 2,
    zIndex: 1,
    backgroundColor: COLORS.WHITE,
    height: 180,
    borderTopRightRadius: 90,
    borderBottomRightRadius: 90,
  },
  text_wrapper: {
    position: 'absolute',
    height: 180,
    width: 180,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    right: 5,
  },
  text_container: {
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