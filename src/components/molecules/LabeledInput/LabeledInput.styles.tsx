import {COLORS} from 'constants/colors';
import {StyleSheet} from 'react-native';

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
    borderColor: COLORS.LIGHT_GRAY,
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
});

export default styles;
