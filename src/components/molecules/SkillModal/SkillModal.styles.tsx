import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.RGBABLACK,
  },
  modalView: {
    margin: 20,
    borderRadius: 10,
    padding: 25,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 300,
  },
  modalTitle: {
    fontSize: 20,
    textAlign: 'left',
    marginBottom: 15,
  },
  modalTitle_light: {
    color: COLORS.MIDNIGHT_BLUE,
  },
  modalTitle_dark: {
    color: COLORS.LIGHT_BLUE,
  },
  modelTextInput: {
    height: 40,
    padding: 10,
    marginBottom: 15,
    borderBottomWidth: 0.5,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  modalText: {
    marginLeft: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    borderRadius: 20,
    elevation: 2,
    marginLeft: 10,
  },
  textStyle: {
    fontSize: 13,
    textAlign: 'center',
  },
  modalView_light: {
    backgroundColor: COLORS.WHITE,
  },
  modalView_dark: {
    backgroundColor: COLORS.BLACK,
  },
  textStyle_light: {
    color: COLORS.VERY_LIGHT_GRAY,
  },
  textStyle_dark: {
    color: COLORS.LIGHT_GRAY,
  },
  button_light: {
    backgroundColor: COLORS.DARK_BLUE,
  },
  button_dark: {
    backgroundColor: COLORS.MIDNIGHT_BLUE,
  },
});

export default styles;
