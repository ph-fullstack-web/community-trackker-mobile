import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  appCardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  appCardButtonContainer: {
    paddingBottom: 10,
  },
  appCardButton: {
    borderRadius: 20,
    width: 80,
    padding: 15,
  },
  appCardTitle: {
    color: COLORS.MIDNIGHT_BLUE,
  },
});

export default styles;
