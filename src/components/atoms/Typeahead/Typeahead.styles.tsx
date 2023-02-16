import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
    zIndex: 1,
  },
  input: {
    borderWidth: 1,
    borderRadius: 50,
    paddingLeft: 20,
    fontSize: 16,
    paddingVertical: 5,
    zIndex: 2,
  },
  resultContainer: {
    elevation: 4,
    position: 'absolute',
    left: 5,
    top: 40,
    width: '97%',
    zIndex: 1,
    backgroundColor: 'white',
    maxHeight: 150,
  },
  resultContentContainer: {
    width: '100%',
    paddingVertical: 5,
  },
});

export default styles;
