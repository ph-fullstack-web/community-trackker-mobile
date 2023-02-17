import {ScrollView} from 'react-native-gesture-handler';

import {AppContainer, ScreenHeader} from 'components/atoms';
import {MemberDetailForm} from 'components/organisms';
import {User} from 'models/business';

type ProfileTemplateProp = {
  user: User | undefined;
};

export const ProfileTemplate = (props: ProfileTemplateProp) => {
  const dashboardTitle = `Hi, ${props?.user?.username}`;

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <AppContainer>
        <ScreenHeader title={dashboardTitle} />
        <MemberDetailForm />
      </AppContainer>
    </ScrollView>
  );
};
