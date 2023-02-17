import {useCommunitiesDataProvider} from 'providers/CommunitiesDataProvider';
import {CommunityMembersTemplate} from 'components/templates';

export const CommunityMembersScreen = () => {
  const {communityList} = useCommunitiesDataProvider();

  return <CommunityMembersTemplate communityList={communityList} />;
};
