import {useGetCommunityWithMembers} from 'api/hooks';
import {MembersTemplate} from 'components/templates';
import {CommunityStackScreens} from 'constants/navigation';

type MembersScreenProps =
  CommunityStackScreenProps<CommunityStackScreens.CommunityMembers>;

export const MembersScreen = ({route}: MembersScreenProps) => {
  const {communityId} = route.params!;
  const {isLoading, data, isError, error, isFetching} =
    useGetCommunityWithMembers(communityId);

  return (
    <MembersTemplate
      isLoading={isLoading}
      communityWithMembers={data}
      isError={isError}
      error={error}
      isFetching={isFetching}
    />
  );
};
