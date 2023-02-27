import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
    zIndex: 1,
  },
  input: {
    borderWidth: 1,
    borderRadius: 7,
    paddingLeft: 20,
    fontSize: 14,
    paddingVertical: 5,
    zIndex: 2,
  },
  resultContainer: {
    elevation: 4,
    position: 'absolute',
    left: 5,
    top: 40,
    width: '97%',
    zIndex: 1,
    maxHeight: 150,
  },
  resultContentContainer: {
    width: '100%',
    paddingVertical: 5,
  },
  input_light: {
    borderColor: COLORS.LIGHT_GRAY,
  },
  input_dark: {
    borderColor: COLORS.MEDIUM_GRAY,
  },
  resultContainer_light: {
    backgroundColor: COLORS.WHITE,
  },
  resultContainer_dark: {
    backgroundColor: COLORS.BLACK,
  },
});

export default styles;
