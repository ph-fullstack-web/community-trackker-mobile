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
    backgroundColor: COLORS.ULTRA_LIGHT_GRAY,
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
  button: {
    elevation: 2,
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 7,
  },
  buttonClose: {
    backgroundColor: COLORS.DARK_BLUE,
  },
  textStyle: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
