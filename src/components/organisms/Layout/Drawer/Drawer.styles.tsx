import {StyleSheet, useWindowDimensions} from 'react-native';
import {COLORS} from 'constants/colors';

export const useStyle = () => {
  const {height} = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      paddingTop: 0,
      flex: 1,
    },
    headerContainer: {
      flex: height < 750 ? 0.3 : 0.25,
    },
    headerBackground: {
      flex: 1,
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
      flex: height < 750 ? 0.7 : 0.8,
      marginVertical: 16,
    },
    footerContainer: {
      flex: height < 750 ? 0.2 : 0.15,
      marginVertical: 16,
    },
    themeContainer: {
      flexDirection: 'row',
      margin: 14,
      alignItems: 'center',
    },
    themeLabel: {
      fontSize: 16,
      fontWeight: '400',
      marginHorizontal: 10,
      color: COLORS.MIDNIGHT_BLUE,
    },
  });
  return {styles};
};
