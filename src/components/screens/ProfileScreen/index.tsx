import {ScrollView} from 'react-native-gesture-handler';

import {AppContainer, ScreenHeader} from 'components/atoms';
import {MemberDetailForm} from 'components/organisms';
import {useUserDataProvider} from 'providers/UserDataProvider';

export const ProfileScreen = () => {
  const {user} = useUserDataProvider();
  const dashboardTitle = `Hi, ${user?.username}`;

  return (
    <AppContainer>
      <ScrollView keyboardShouldPersistTaps="handled">
        <ScreenHeader title={dashboardTitle} />
        <MemberDetailForm />
      </ScrollView>
    </AppContainer>
  );
};
