import {useMemo} from 'react';

import {useGetCommunityWithMembers} from 'api/hooks';
import {MembersTemplate} from 'components/templates';
import {CommunityStackScreens} from 'constants/navigation';

type MembersScreenProps =
  CommunityStackScreenProps<CommunityStackScreens.CommunityMembers>;

export const MembersScreen = ({route}: MembersScreenProps) => {
  const communityId: number = useMemo(
    () => route.params.communityId,
    [route.params.communityId]
  );

  const {isLoading, data, isError, error, isFetching} =
    useGetCommunityWithMembers(communityId);

  return (
    <MembersTemplate
      membersList={data?.members}
      community_name={data?.community_name}
      manager_name={data?.manager.name}
      isLoading={isLoading}
      isError={isError}
      error={error}
      isFetching={isFetching}
    />
  );
};
