import {StyleProp, View, ViewStyle} from 'react-native';
import {useThemeProvider} from 'providers/ThemeProvider';
import styles from './Card.styles';

type CardProps = ComponentWithChildren & {
  style?: StyleProp<ViewStyle>;
};

export const Card = (props: CardProps) => {
  const {mode} = useThemeProvider();
  return (
    <View
      style={[
        styles.container,
        props.style,
        styles[`container_${mode}` as keyof typeof styles],
      ]}
    >
      {props.children}
    </View>
  );
};
