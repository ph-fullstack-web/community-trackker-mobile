import {StyleProp, View, ViewStyle} from 'react-native';
import {useThemeProvider} from 'providers';
import styles from './Card.styles';

type CardProps = ComponentWithChildren & {
  id: string;
  style?: StyleProp<ViewStyle>;
};

export const Card = (props: CardProps) => {
  const {mode} = useThemeProvider();
  return (
    <View
      id={props.id}
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
