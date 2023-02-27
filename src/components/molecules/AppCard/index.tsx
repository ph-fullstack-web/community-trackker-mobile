import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {useThemeProvider} from 'providers/ThemeProvider';
import {Button, Text} from 'components/atoms';
import {COLORS} from 'constants/colors';
import styles from './AppCard.styles';
import {AppCardProps} from './AppCard.types';

export const AppCard = (props: AppCardProps) => {
  const {mode} = useThemeProvider();
  const {numColumns = 3, icon, title, onPress} = props;

  return (
    <View style={[styles.appCardContainer, {width: `${100 / numColumns}%`}]}>
      <Button
        title=""
        buttonStyle={styles.appCardButton}
        containerStyle={styles.appCardButtonContainer}
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: [COLORS.DARK_PLUM, COLORS.DARK_BLUE, COLORS.MEDIUM_BLUE],
          start: {x: 0, y: 0.5},
          end: {x: 1, y: 0.5},
        }}
        icon={icon}
        onPress={onPress}
      />

      <Text style={styles[`text_${mode}` as keyof typeof styles]}>{title}</Text>
    </View>
  );
};

export * from './AppCard.types';
