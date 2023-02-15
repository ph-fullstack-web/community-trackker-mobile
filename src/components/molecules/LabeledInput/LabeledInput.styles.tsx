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
    borderColor: '#bbb',
    borderStyle: 'solid',
    paddingHorizontal: 9,
    paddingVertical: 3,
  },
  label_width: {
    width: '30%',
  },
  textinput_width: {
    width: '70%',
  },
});

export default styles;
