import {useContext} from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Button} from 'components/atoms';
import styles from './AppCard.styles';
import {ThemeContext} from 'providers/ThemeProviders';
import {THEME} from '../../../../theme';

export type AppCardObject = {
  title: string;
  icon: Icon;
  numColumns?: number;
  onPress: () => void;
};

export const AppCard = (props: AppCardObject) => {
  const {theme} = useContext(ThemeContext);
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
          colors: THEME[`${theme}`].GRADIENT,
          start: {x: 0, y: 0.5},
          end: {x: 1, y: 0.5},
        }}
        icon={props.icon}
        onPress={props.onPress}
      />

      <Text>{props.title}</Text>
    </View>
  );
};
