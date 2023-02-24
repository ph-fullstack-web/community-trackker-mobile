import {MembersTemplate} from 'components/templates';
import {CommunityStackScreens} from 'constants/navigation';
import {useCommunitiesDataProvider} from 'providers/CommunitiesDataProvider';

type MembersScreenProps =
  CommunityStackScreenProps<CommunityStackScreens.CommunityMembers>;

export const MembersScreen = ({route}: MembersScreenProps) => {
  const {communityList} = useCommunitiesDataProvider();

  return <MembersTemplate communityList={communityList} route={route} />;
};
