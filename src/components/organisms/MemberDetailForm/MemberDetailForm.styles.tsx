import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
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
    textAlign: 'center',
    fontSize: 13,
  },
  button_text_light: {
    color: COLORS.VERY_LIGHT_GRAY,
  },
  button_text_dark: {
    color: COLORS.ULTRA_LIGHT_GRAY,
  },
});

export default styles;
