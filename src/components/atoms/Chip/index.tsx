import {View} from 'react-native';
import {Chip as DefaultChip} from '@rneui/base';
import {useThemeProvider} from 'providers';

import styles from './Chip.styles';
import {COLORS} from 'constants/colors';

type ChipProps = {
  onPress?: () => void;
  title: string;
  type?: 'solid' | 'outline';
};

export const Chip = ({onPress, title, type = 'outline'}: ChipProps) => {
  const {mode} = useThemeProvider();
  return (
    <View style={styles.container}>
      <DefaultChip
        title={title}
        icon={
          onPress && {
            name: 'close',
            type: 'material',
            size: 20,
            color: mode === 'light' ? COLORS.BLACK : COLORS.ULTRA_LIGHT_GRAY,
          }
        }
        onPress={onPress}
        iconRight
        type={type}
        titleStyle={[
          styles.chipTitle,
          styles[`chipTitle_${mode}` as keyof typeof styles],
        ]}
        containerStyle={[
          styles.chip,
          styles[`chip_${mode}` as keyof typeof undefined],
        ]}
      />
    </View>
  );
};
