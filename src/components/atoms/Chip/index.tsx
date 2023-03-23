import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Chip as DefaultChip} from '@rneui/themed';
import {useThemeProvider} from 'providers';

import styles from './Chip.styles';
import {COLORS, GRADIENT} from 'constants/colors';

type ChipProps = {
  onPress?: () => void;
  title: string;
  type?: 'solid' | 'outline';
  gradient?: boolean;
};

export const Chip = ({
  onPress,
  title,
  type = 'outline',
  gradient = false,
}: ChipProps) => {
  const {mode} = useThemeProvider();

  return (
    <View style={styles.container}>
      {gradient ? (
        <DefaultChip
          title={title}
          icon={
            onPress && {
              name: 'close',
              type: 'material',
              size: 20,
              color:
                type === 'outline'
                  ? mode === 'light'
                    ? COLORS.BLACK
                    : COLORS.ULTRA_LIGHT_GRAY
                  : COLORS.ULTRA_LIGHT_GRAY,
            }
          }
          onPress={onPress}
          iconRight
          titleStyle={[styles.chipTitle, styles.chipTitle_gradient]}
          containerStyle={[styles.chip, styles.chip_gradient]}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: GRADIENT[`${mode}_theme` as keyof typeof GRADIENT],
            start: {x: 0, y: 0.5},
            end: {x: 1, y: 0.5},
          }}
        />
      ) : (
        <DefaultChip
          title={title}
          icon={
            onPress && {
              name: 'close',
              type: 'material',
              size: 20,
              color:
                type === 'outline'
                  ? mode === 'light'
                    ? COLORS.BLACK
                    : COLORS.ULTRA_LIGHT_GRAY
                  : COLORS.ULTRA_LIGHT_GRAY,
            }
          }
          onPress={onPress}
          iconRight
          type={type}
          titleStyle={[
            styles.chipTitle,
            styles[`chipTitle_${type}_${mode}` as keyof typeof styles],
          ]}
          containerStyle={[
            styles.chip,
            styles[`chip_${type}_${mode}` as keyof typeof undefined],
          ]}
        />
      )}
    </View>
  );
};
