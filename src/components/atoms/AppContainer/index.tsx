import {StyleProp, View, ViewStyle} from 'react-native';
import styles from './AppContainer.styles';

type AppContainerProps = ComponentWithChildren & {
  style?: StyleProp<ViewStyle>;
};

export const AppContainer = (props: AppContainerProps) => {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
};
