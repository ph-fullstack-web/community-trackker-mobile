import * as React from 'react'
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Icon } from '@rneui/themed';

export type ViewMembersButtonProps = {
  placeholderNumber: number;
};

export const ViewMembersButton = (props: ViewMembersButtonProps) => {
  var [ isPress, setIsPress ] = React.useState(false);

  const touchProps = {
    activeOpacity: 1,
    underlayColor: 'rgb(19, 221,227)',
    style: isPress ? styles.is_pressed : styles.not_pressed,
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => console.log('HELLO'),
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        {...touchProps}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
            <Icon
              name='eye'
              type='font-awesome'
              style={{
                marginRight:8
              }}
            />
            <Text style={styles.uppercase_text}>View ({props.placeholderNumber}) Members</Text>
        </View>
      </TouchableHighlight>    
    </View>
  )
}

const styles = StyleSheet.create({
  uppercase_text: {
    textTransform:'uppercase'
  },
  container: {
    width: 200
  },
  not_pressed: {
    paddingVertical: 3,
    paddingHorizontal: 9,

    borderColor: 'rgb(10, 117, 120)',
    borderStyle: 'solid',
    borderWidth: 2,
    color: 'rgb(10, 117, 120)',
  },
  is_pressed: {
    paddingVertical: 3,
    paddingHorizontal: 9,

    borderColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 2,
    color: '#fff'
  }
})