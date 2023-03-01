import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    flex: 1,
  },
  headerBackground: {
    padding: 16,
  },
  headerTextContainer: {
    marginTop: 5,
    marginHorizontal: 6,
  },
  greetingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.WHITE,
    textShadowColor: COLORS.DARK_GRAY,
    textShadowOffset: {
      width: -1,
      height: 1,
    },
    textShadowRadius: 1,
  },
  emailText: {
    fontSize: 12,
    color: COLORS.ULTRA_LIGHT_GRAY,
    textShadowColor: COLORS.DARK_GRAY,
    textShadowOffset: {
      width: -1,
      height: 1,
    },
    textShadowRadius: 1,
  },
  itemsContainer: {
    flex: 1,
    marginVertical: 16,
  },
  footerContainer: {
    marginVertical: 16,
  },
  themeContainer: {
    flexDirection: 'row',
    margin: 14,
    alignItems: 'center',
    backgroundColor: COLORS.TRANSPARENT,
  },
  themeLabel: {
    fontSize: 16,
    fontWeight: '400',
    marginHorizontal: 10,
  },
  container_light: {
    backgroundColor: COLORS.WHITE,
  },
  container_dark: {
    backgroundColor: COLORS.BLACK,
  },
  itemsContainer_light: {
    backgroundColor: COLORS.WHITE,
  },
  itemsContainer_dark: {
    backgroundColor: COLORS.BLACK,
  },
  themeLabel_light: {
    color: COLORS.MIDNIGHT_BLUE,
  },
  themeLabel_dark: {
    color: COLORS.LIGHT_BLUE,
  },
});

export default styles;
