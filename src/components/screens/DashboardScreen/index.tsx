import {ScreenHeader} from 'components/atoms';
import {MemberDetailForm} from 'components/organisms';
import {useUserDataProvider} from 'providers/UserDataProvider';

export const DashboardScreen = () => {
  const {user} = useUserDataProvider();

  const dashboardTitle = `Hi, ${user?.username}`;
  return (
    <>
      <ScreenHeader title={dashboardTitle} />
      <MemberDetailForm />
    </>
  );
};
