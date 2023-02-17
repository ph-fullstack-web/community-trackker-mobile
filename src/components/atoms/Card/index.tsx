import {StyleProp, View, ViewStyle} from 'react-native';
import styles from './Card.styles';

type CardProps = ComponentWithChildren & {
  style?: StyleProp<ViewStyle>;
};

export const Card = (props: CardProps) => {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
};
