import {StyleSheet} from 'react-native';

import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  accordion_container: {
    flex: 1,
    borderWidth: 1,

    margin: 10,
    borderRadius: 15,
  },
  form_header: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
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
    textAlign: 'center',
    fontSize: 13,
  },
});

export default styles;
