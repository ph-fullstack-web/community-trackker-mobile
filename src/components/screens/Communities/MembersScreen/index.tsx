import {MembersTemplate} from 'components/templates';
import {useCommunitiesDataProvider} from 'providers/CommunitiesDataProvider';

type MembersScreenProps = CommunityStackScreenProps<'CommunityMembers'>;

export const MembersScreen = ({route}: MembersScreenProps) => {
  const {communityList} = useCommunitiesDataProvider();

  return <MembersTemplate communityList={communityList} route={route} />;
};
