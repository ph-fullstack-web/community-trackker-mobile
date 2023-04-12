import {ScrollView, ScrollViewProps, StatusBar} from 'react-native';

import {useThemeProvider} from 'providers';
import styles from './AppContainer.styles';
import {COLORS} from 'constants/colors';

type AppContainerProps = ComponentWithChildren & ScrollViewProps;

export const AppContainer = ({
  children,
  style,
  ...otherProps
}: AppContainerProps) => {
  const {mode} = useThemeProvider();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      {...otherProps}
      style={[
        styles.scrollStyle,
        style,
        styles[`container_${mode}` as keyof typeof styles],
      ]}
      contentContainerStyle={[
        styles.scrollContentContainer,
        otherProps.contentContainerStyle,
      ]}
      keyboardShouldPersistTaps="handled"
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.MIDNIGHT_BLUE}
      />
      {children}
    </ScrollView>
  );
};
