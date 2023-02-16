import {StyleSheet} from 'react-native';

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
  veticalLabel: {
    color: 'black',
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
