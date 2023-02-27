import {ProfileTemplate} from 'components/templates';
import {CommunityDrawerScreens} from 'constants/navigation';
import {useUserDataProvider} from 'providers/UserDataProvider';

type ProfileScreenProps =
  CommunityDrawerScreenProps<CommunityDrawerScreens.Profile>;

export const ProfileScreen = ({}: ProfileScreenProps) => {
  const {user} = useUserDataProvider();

  return <ProfileTemplate user={user} />;
};
