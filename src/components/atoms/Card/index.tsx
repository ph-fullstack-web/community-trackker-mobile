import {StyleProp, View, ViewStyle} from 'react-native';
import {useTheme} from '@rneui/themed';
import styles from './Card.styles';

type CardProps = ComponentWithChildren & {
  style?: StyleProp<ViewStyle>;
};

export const Card = (props: CardProps) => {
  const {theme} = useTheme();
  return (
    <View
      style={[
        styles.container,
        props.style,
        {
          backgroundColor: theme.colors.white,
          shadowColor: theme.colors.black,
        },
      ]}
    >
      {props.children}
    </View>
  );
};
