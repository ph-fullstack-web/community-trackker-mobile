import {Pressable, View} from 'react-native';

import {Text} from '../Text';
import {COLORS} from 'constants/colors';
import styles from './TypeaheadList.styles';

type TypeaheadListProps = {
  onPress: () => void;
  text: string;
};

export const TypeaheadList = ({onPress, text}: TypeaheadListProps) => {
  return (
    <Pressable onPress={onPress} android_ripple={{color: COLORS.LIGHT_GRAY}}>
      <View>
        <Text style={styles.result}>{text}</Text>
      </View>
    </Pressable>
  );
};
