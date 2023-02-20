import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info_button: {
    backgroundColor: COLORS.TRANSPARENT,
  },
  modalView: {
    margin: 20,
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'left',
  },
  buttonContainer: {
    paddingHorizontal: 9,
    paddingVertical: 5,
  },
  button: {
    backgroundColor: COLORS.DARK_BLUE,
    borderRadius: 20,
    elevation: 2,
  },
  textStyle: {
    fontSize: 13,
    color: COLORS.VERY_LIGHT_GRAY,
    textAlign: 'center',
  },
});

export default styles;
