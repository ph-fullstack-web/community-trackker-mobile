import {useCommunitiesDataProvider} from 'providers/CommunitiesDataProvider';
import {MembersTemplate} from 'components/templates';

export const MembersScreen = () => {
  const {communityList} = useCommunitiesDataProvider();

  return <MembersTemplate communityList={communityList} />;
};
