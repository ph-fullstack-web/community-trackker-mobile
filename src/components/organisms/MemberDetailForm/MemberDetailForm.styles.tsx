import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  accordion_container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10,
  },
  form_header: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#ddd',
  },
  formContainer: {
    marginVertical: 15,
  },
  community_button: {
    marginTop: -10,
    marginBottom: 15,
    paddingRight: 10,
    paddingLeft: 4,
    width: '70%',
    alignSelf: 'flex-end',
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
