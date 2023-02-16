import {Pressable, Text, View} from 'react-native';

import styles from './TypeaheadList.styles';

type TypeaheadListProps = {
  onPress: () => void;
  text: string;
};

export const TypeaheadList = ({onPress, text}: TypeaheadListProps) => {
  return (
    <Pressable onPress={onPress} android_ripple={{color: '#ccc'}}>
      <View>
        <Text style={styles.result}>{text}</Text>
      </View>
    </Pressable>
  );
};
