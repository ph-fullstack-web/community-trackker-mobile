import {COLORS} from 'constants/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingBottom: 60,
  },
  accordion_container: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.LIGHT_GRAY,
    margin: 10,
    borderRadius: 15,
  },
  form_header: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.LIGHT_GRAY,
    backgroundColor: COLORS.LIGHT_GRAY,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  formContainer: {
    marginVertical: 15,
  },
  community_button: {
    flex: 1,
    flexDirection: 'row',
  },
  community_button_empty_container: {
    flex: 0.3,
  },
  community_button_view_container: {
    flex: 0.7,
  },
  community_button_container: {
    paddingVertical: 5,
    paddingHorizontal: 9,
  },
  community_button_style: {
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
    color: COLORS.WHITE,
  },
});

export default styles;
