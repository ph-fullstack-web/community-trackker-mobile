import {useCallback, useEffect, useState} from 'react';
import {ListRenderItemInfo} from 'react-native';

import {AppContainer, InfiniteScroll, ScreenHeader} from 'components/atoms';
import {ErrorMessage, NoResult, Search, Spinner} from 'components/molecules';
import {MemberCard} from 'components/organisms';
import {CommunityMembers, People} from 'models/business';

import styles from './MembersTemplate.styles';

type MembersTemplateProps = {
  isLoading: boolean;
  communityWithMembers: CommunityMembers;
  isError: boolean;
  error: any;
  isFetching: boolean;
};

const LIMIT = 10;

export const MembersTemplate = ({
  isLoading,
  communityWithMembers,
  isError,
  error,
  isFetching,
}: MembersTemplateProps) => {
  const [filteredMembers, setFilteredMembers] = useState<People[]>([]);
  const [members, setMembers] = useState<People[]>([]);
  const [lastPageCount, setLastPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (!isFetching) {
      setMembers(communityWithMembers?.members ?? []);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

  const handleSearch = (text: string) => {
    const searchText = text.trim().toLowerCase();
    let result = communityWithMembers?.members ?? [];

    if (searchText) {
      result = result.filter(
        ({full_name, csv_email, hired_date}: People) =>
          full_name.toLowerCase().indexOf(searchText) !== -1 ||
          csv_email.toLowerCase().indexOf(searchText) !== -1 ||
          hired_date.indexOf(searchText) !== -1
      );
    }

    setMembers(result);
    setPage(0);
    setFilteredMembers([]);
  };

  const loadMore = useCallback(
    () =>
      new Promise<void>(resolve => {
        setTimeout(() => {
          const startIndex = LIMIT * page;
          const filterMembers =
            members.filter(
              (_, i) => i >= startIndex && i < startIndex + LIMIT
            ) || [];

          setFilteredMembers(prevState => [...prevState, ...filterMembers]);
          setLastPageCount(filterMembers.length);
          resolve();
        }, 0);
      }),
    [members, page]
  );

  const renderItem = ({item}: ListRenderItemInfo<People>) => (
    <MemberCard memberDetails={item} />
  );

  useEffect(() => {
    loadMore();
  }, [loadMore]);

  return (
    <AppContainer keyboardShouldPersistTaps="handled" horizontal>
      <ScreenHeader
        title={communityWithMembers?.community_name ?? ''}
        subtitle={
          communityWithMembers?.manager?.name
            ? `Managed By: ${communityWithMembers?.manager?.name}`
            : ''
        }
      />
      {isError ? (
        <ErrorMessage code={error.code} message={error.message} />
      ) : (
        <>
          {communityWithMembers?.members.length ? (
            <Search onSearch={handleSearch} viewStyle={styles.search} />
          ) : (
            <></>
          )}
          {isLoading || isFetching ? (
            <Spinner />
          ) : (
            <InfiniteScroll<People>
              data={filteredMembers}
              keyExtractor={item => item.people_id.toString()}
              renderItem={renderItem}
              style={styles.listContentContainer}
              lastPageCount={lastPageCount}
              limit={LIMIT}
              ListEmptyComponent={<NoResult message="No Members Found" />}
              setPage={setPage}
            />
          )}
        </>
      )}
    </AppContainer>
  );
};
