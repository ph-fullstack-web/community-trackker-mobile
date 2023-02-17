import {StyleSheet} from 'react-native';

import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
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
    borderWidth: 1,
    borderColor: COLORS.TRANSPARENT,
    borderRadius: 7,
    marginTop: -10,
    marginBottom: 15,
    width: '72%',
    alignSelf: 'flex-end',
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
