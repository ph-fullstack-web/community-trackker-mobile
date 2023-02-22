import {ScrollView, ScrollViewProps} from 'react-native';
import {useTheme} from '@rneui/themed';

import styles from './AppContainer.styles';

type AppContainerProps = ComponentWithChildren & ScrollViewProps;

export const AppContainer = ({
  children,
  style,
  ...otherProps
}: AppContainerProps) => {
  const {theme} = useTheme();
  return (
    <ScrollView
      {...otherProps}
      style={[styles.container, style, {backgroundColor: theme.colors.white}]}
    >
      {children}
    </ScrollView>
  );
};
