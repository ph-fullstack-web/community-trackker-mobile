import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  accordion_container: {
    flex: 1,
    borderWidth: 1,
    margin: 10,
    borderRadius: 15,
  },
  accordion_container_light: {
    borderColor: COLORS.LIGHT_GRAY,
  },
  accordion_container_dark: {
    borderColor: COLORS.MEDIUM_GRAY,
  },
  form_header: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  form_header_light: {
    borderBottomColor: COLORS.LIGHT_GRAY,
    backgroundColor: COLORS.LIGHT_GRAY,
  },
  form_header_dark: {
    borderBottomColor: COLORS.MEDIUM_GRAY,
    backgroundColor: COLORS.MEDIUM_GRAY,
  },
});

export default styles;
