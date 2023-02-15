import {useState} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';

import {Icon} from 'components/atoms';

import styles from './ViewMembersButton.styles';

interface ViewMembersButtonProps {
  totalMembers: number;
  onPress: () => void;
}

export const ViewMembersButton = (props: ViewMembersButtonProps) => {
  var [isPress, setIsPress] = useState(false);

  const touchProps = {
    activeOpacity: 1,
    underlayColor: 'rgb(19, 221,227)',
    style: isPress ? styles.is_pressed : styles.not_pressed,
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: props.onPress,
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight {...touchProps}>
        <View style={styles.layout}>
          <Icon name="eye" type="font-awesome" style={{marginRight: 8}} />
          <Text style={styles.uppercase_text}>
            View ({props.totalMembers}) Members
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};
