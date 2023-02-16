import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  accordion_container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10,
    borderRadius: 15,
  },
  form_header: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#ddd',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  formContainer: {
    marginVertical: 15,
  },
  community_button: {
    backgroundColor: '#0d6fc3',
    borderWidth: 1,
    borderColor: 'transparent',
    paddingVertical: 7,
    paddingHorizontal: 9,
    borderRadius: 7,
    marginTop: -10,
    marginBottom: 15,
    marginRight: 10,
    width: '66%',
    alignSelf: 'flex-end',
  },
  button_text: {
    textAlign: 'center',
    fontWeight: '500',
    color: '#fff',
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
