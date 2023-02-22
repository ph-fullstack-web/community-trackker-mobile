import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 65,
    width: '100%',
    paddingVertical: 10,
    borderBottomColor: '#b9b9b9',
    borderBottomWidth: 2,
    backgroundColor: '#f0f0f0',
  },
  logoContainer: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'center',
    height: '100%',
  },
});

export default styles;
