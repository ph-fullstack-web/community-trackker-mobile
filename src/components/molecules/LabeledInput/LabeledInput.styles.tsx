import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  bold_text: {
    fontWeight: '500',
  },
  fieldSet: {
    marginHorizontal: 10,
    marginVertical: 15,
  },
  horizontal_layout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textfield: {
    borderWidth: 1,
    borderStyle: 'solid',
    paddingHorizontal: 9,
    paddingVertical: 3,
    borderRadius: 7,
  },
  label_width: {
    width: '30%',
  },
  textinput_width: {
    width: '70%',
  },
  textfield_light: {
    color: COLORS.BLACK,
    borderColor: COLORS.LIGHT_GRAY,
  },
  textfield_dark: {
    borderColor: COLORS.VERY_LIGHT_GRAY,
    color: COLORS.VERY_LIGHT_GRAY,
  },
});

export default styles;
