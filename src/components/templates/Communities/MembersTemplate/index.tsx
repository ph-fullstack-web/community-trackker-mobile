import {useCallback, useEffect, useState} from 'react';
import {ListRenderItemInfo} from 'react-native';

import {AppContainer, InfiniteScroll, ScreenHeader} from 'components/atoms';
import {ErrorMessage, NoResult, Search, Spinner} from 'components/molecules';
import {MemberCard} from 'components/organisms';
import {People} from 'models/business';

import styles from './MembersTemplate.styles';
import {MembersTemplateProps} from './MembersTemplate.types';

const LIMIT = 10;

export const MembersTemplate = ({
  membersList = [],
  community_name = '',
  manager_name = '',
  isLoading,
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
      setMembers(membersList);
      if (!members.length) {
        setFilteredMembers(membersList);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

  const handleSearch = (text: string) => {
    const searchText = text.trim().toLowerCase();
    let result = membersList;

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
    <AppContainer horizontal>
      <ScreenHeader
        title={community_name}
        subtitle={manager_name ? `Managed By: ${manager_name}` : ''}
      />
      {isError ? (
        <ErrorMessage status={error.status} message={error.message} />
      ) : (
        <>
          {membersList.length ? (
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
