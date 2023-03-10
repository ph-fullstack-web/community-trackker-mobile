import {useEffect, useMemo, useState} from 'react';

import {useGetCommunityWithMembersSearch} from 'api/hooks';
import {MembersTemplate} from 'components/templates';
import {CommunityStackScreens} from 'constants/navigation';

type MembersScreenProps =
  CommunityStackScreenProps<CommunityStackScreens.CommunityMembers>;

export const MembersScreen = ({route}: MembersScreenProps) => {
  const communityId: number = useMemo(
    () => route.params.communityId,
    [route.params.communityId]
  );

  const rows = 10;
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');

  const {isLoading, data, isError, error, isFetching, refetch} =
    useGetCommunityWithMembersSearch(communityId, page, rows, search);

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search]);

  return (
    <MembersTemplate
      rows={rows}
      setSearch={setSearch}
      setPage={setPage}
      currentPage={page}
      lastPage={data?.last_page}
      membersList={data?.community?.members}
      community_name={data?.community?.community_name}
      manager_name={data?.community?.manager.name}
      isLoading={isLoading}
      isError={isError}
      error={error}
      isFetching={isFetching}
    />
  );
};
