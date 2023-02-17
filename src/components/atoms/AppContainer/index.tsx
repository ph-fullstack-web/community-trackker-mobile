import {ScrollView, ScrollViewProps} from 'react-native';

import styles from './AppContainer.styles';

type AppContainerProps = ComponentWithChildren & ScrollViewProps;

export const AppContainer = ({
  children,
  style,
  ...otherProps
}: AppContainerProps) => {
  return (
    <ScrollView {...otherProps} style={[styles.container, style]}>
      {children}
    </ScrollView>
  );
};
