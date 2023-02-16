import {COLORS} from 'constants/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingBottom: 60,
  },
  accordion_container: {
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10,
    borderRadius: 15,
  },
  form_header: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#ddd',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  community_button_container: {
    marginTop: 3,
    paddingVertical: 5,
    paddingHorizontal: 9,
  },
  community_button: {
    borderRadius: 20,
  },
  button_text: {
    color: COLORS.VERY_LIGHT_GRAY,
    textAlign: 'center',
    fontSize: 13,
  },
  toggle: {
    height: 30,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleText: {
    color: '#fff',
  },
});

export default styles;
