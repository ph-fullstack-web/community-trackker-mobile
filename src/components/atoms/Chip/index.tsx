import {View} from 'react-native';
import {Chip as DefaultChip} from '@rneui/base';

import styles from './Chip.styles';

type ChipProps = {
  onPress?: () => void;
  title: string;
};

export const Chip = ({onPress, title}: ChipProps) => {
  return (
    <View style={styles.container}>
      <DefaultChip
        title={title}
        icon={{
          name: 'close',
          type: 'material',
          size: 20,
        }}
        onPress={onPress}
        iconRight
        type="outline"
        titleStyle={styles.chipTitle}
        containerStyle={styles.chip}
      />
    </View>
  );
};
