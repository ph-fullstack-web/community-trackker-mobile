import {StyleSheet} from 'react-native';
import {COLORS} from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  chart: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  verticalLabel: {
    color: COLORS.BLACK,
    display: 'flex',
    position: 'absolute',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalLabel: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 20,
  },
});

export default styles;
