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
    color: COLORS.VERY_LIGHT_GRAY,
    textAlign: 'center',
    fontSize: 13,
  },
  card_chart_container: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
