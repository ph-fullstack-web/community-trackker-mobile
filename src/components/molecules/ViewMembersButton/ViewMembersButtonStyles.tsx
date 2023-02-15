import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  uppercase_text: {
    textTransform: 'uppercase',
  },
  container: {
    width: 200,
  },
  layout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  not_pressed: {
    paddingVertical: 3,
    paddingHorizontal: 9,
    borderColor: 'rgb(10, 117, 120)',
    borderStyle: 'solid',
    borderWidth: 2,
    color: 'rgb(10, 117, 120)',
  },
  is_pressed: {
    paddingVertical: 3,
    paddingHorizontal: 9,
    borderColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 2,
    color: '#fff',
  },
});

export default styles;
