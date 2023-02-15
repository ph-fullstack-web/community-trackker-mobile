import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingBottom: 60
  },
  accordion_container: {
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10,
    borderRadius: 15
  },
  form_header: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#ddd',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  community_button: {
    marginTop: 3,
  },
  toggle: {
    height: 30,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleText: {
    color: '#fff',
  },
});

export default styles;
