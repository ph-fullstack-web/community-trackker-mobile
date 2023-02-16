import {COLORS} from 'constants/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card_container_template: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    backgroundColor: COLORS.WHITE,
    shadowColor: COLORS.MEDIUM_GRAY,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 20,
  },

  card_details_container: {
    flex: 0.8,
    paddingVertical: 15,
    paddingRight: 15,
    paddingLeft: 30,
  },
  card_title_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  card_title: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 15,
  },
  button: {
    padding: 5,
    borderRadius: 20,
    width: 130,
    backgroundColor: COLORS.TRANSPARENT,
  },
  buttonText: {
    color: COLORS.VERY_LIGHT_GRAY,
    textAlign: 'center',
    fontSize: 13,
  },

  card_chart_container: {
    flex: 0.2,
    paddingVertical: 15,
    paddingLeft: 15,
    paddingRight: 30,
  },
});

export default styles;
