import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from '@rneui/themed';

import {Button, Text} from 'components/atoms';
import styles from './AppCard.styles';
import {COLORS} from 'constants/colors';

export type AppCardObject = {
  title: string;
  icon: Icon;
  numColumns?: number;
  onPress: () => void;
};

export const AppCard = (props: AppCardObject) => {
  const {theme} = useTheme();

  return (
    <View
      style={[
        styles.appCardContainer,
        {width: `${100 / (props.numColumns ?? 3)}%`},
      ]}
    >
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
        icon={props.icon}
        onPress={props.onPress}
      />

      <Text style={{color: theme.colors.blue2}}>{props.title}</Text>
    </View>
  );
};
