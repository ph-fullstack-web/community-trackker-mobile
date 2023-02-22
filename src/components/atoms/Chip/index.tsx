import {View} from 'react-native';
import {Chip as DefaultChip} from '@rneui/base';
import {useTheme} from '@rneui/themed';

import styles from './Chip.styles';

type ChipProps = {
  onPress?: () => void;
  title: string;
};

export const Chip = ({onPress, title}: ChipProps) => {
  const {theme} = useTheme();
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
        titleStyle={[styles.chipTitle, {color: theme.colors.blue1}]}
        containerStyle={[styles.chip, {borderColor: theme.colors.blue1}]}
      />
    </View>
  );
};
