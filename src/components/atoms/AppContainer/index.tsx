import {ScrollView, ScrollViewProps, StatusBar} from 'react-native';
import {useTheme} from '@rneui/themed';

import styles from './AppContainer.styles';
import {COLORS} from 'constants/colors';

type AppContainerProps = ComponentWithChildren & ScrollViewProps;

export const AppContainer = ({
  children,
  style,
  ...otherProps
}: AppContainerProps) => {
  const {theme} = useTheme();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      {...otherProps}
      style={[styles.container, style, {backgroundColor: theme.colors.white}]}
    >
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.WHITE} />
      {children}
    </ScrollView>
  );
};
