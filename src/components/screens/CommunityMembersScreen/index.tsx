import {useRoute} from '@react-navigation/native';
import {ScreenHeader} from 'components/atoms';
import {Text} from 'react-native';

export const CommunityMembersScreen = () => {
  const route = useRoute<any>();
  const { communityId, name, managerName } = route.params;

  return (
    <>
      <ScreenHeader title={name} subtitle={`Managed By: ${managerName}`}></ScreenHeader>
      <Text>{communityId}</Text>
    </>
  );
};
