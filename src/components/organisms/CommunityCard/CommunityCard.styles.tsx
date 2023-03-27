import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  card_container_template: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginVertical: 25,
    marginHorizontal: 10,
  },
  card_details_container: {
    flex: 0.55,
    padding: 15,
  },
  card_title_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 15,
  },
  button: {
    padding: 5,
    borderRadius: 20,
    width: 130,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 13,
  },
  card_chart_container: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  card_container_template_light: {
    backgroundColor: COLORS.VERY_LIGHT_GRAY,
  },
  card_container_template_dark: {
    backgroundColor: COLORS.DARK_GRAY,
  },
  buttonText_light: {
    color: COLORS.VERY_LIGHT_GRAY,
  },
  buttonText_dark: {
    color: COLORS.ULTRA_LIGHT_GRAY,
  },
  button_light: {
    backgroundColor: COLORS.MEDIUM_BLUE,
  },
  button_dark: {
    backgroundColor: COLORS.MIDNIGHT_BLUE,
  },
  info_button: {
    backgroundColor: COLORS.TRANSPARENT,
  },
});

export default styles;
