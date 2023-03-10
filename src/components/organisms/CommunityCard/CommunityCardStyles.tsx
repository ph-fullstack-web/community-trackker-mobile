import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bold_text: {
      fontWeight: 'bold',
    },
    card_template: {
      borderColor: '#c5c5c5',
      borderStyle: 'solid',
      borderWidth: 1,
      flex: 1,
      backgroundColor: '#ddd',
      margin: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
    },
  
    header: {
      paddingVertical: 15,
      paddingHorizontal: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
  
    thumbnail: {
      paddingRight: 20,
    },
  
    footer: {
      padding: 10,
    },
  
    horizontal_layout: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });

export default styles;
