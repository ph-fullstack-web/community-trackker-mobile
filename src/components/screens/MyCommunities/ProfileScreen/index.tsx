import {ProfileTemplate} from 'components/templates';
import {useUserDataProvider} from 'providers/UserDataProvider';

export const ProfileScreen = () => {
  const {user} = useUserDataProvider();

  return <ProfileTemplate user={user} />;
};
