import {ProfileTemplate} from 'components/templates';
import {useUserDataProvider} from 'providers/UserDataProvider';

type ProfileScreenProps = CommunityDrawerScreenProps<'Profile'>;

export const ProfileScreen = ({}: ProfileScreenProps) => {
  const {user} = useUserDataProvider();

  return <ProfileTemplate user={user} />;
};
