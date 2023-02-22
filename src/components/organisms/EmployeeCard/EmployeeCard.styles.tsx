import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 15,
  },
  horizontal_layout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile_picture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
    borderWidth: 1,
    borderColor: '#bbb',
  },
});

export default styles;