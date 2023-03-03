import {useCallback, useEffect, useState} from 'react';
import {ListRenderItemInfo} from 'react-native';

import {AppContainer, InfiniteScroll, ScreenHeader} from 'components/atoms';
import {NoResult, Search, Spinner} from 'components/molecules';
import {MemberCard} from 'components/organisms';
import {CommunityMembers, People} from 'models/business';

import styles from './MembersTemplate.styles';

type MembersTemplateProps = {
  isLoading: boolean;
  communityWithMembers: CommunityMembers;
};

const LIMIT = 10;

export const MembersTemplate = ({
  isLoading,
  communityWithMembers,
}: MembersTemplateProps) => {
  const [filteredMembers, setFilteredMembers] = useState<People[]>([]);
  const [members, setMembers] = useState<People[]>(
    communityWithMembers?.members ?? []
  );
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [lastPageCount, setLastPageCount] = useState(0);
  const [page, setPage] = useState(0);

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
    setIsLoadingMore(true);
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
    loadMore().then(() => setIsLoadingMore(false));
  }, [loadMore]);

  return (
    <AppContainer
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
      horizontal
    >
      <ScreenHeader
        title={communityWithMembers?.community_name ?? ''}
        subtitle={`Managed By: ${communityWithMembers?.manager?.name ?? ''}`}
      />
      <>
        {!!communityWithMembers?.members.length && (
          <Search onSearch={handleSearch} viewStyle={styles.search} />
        )}
        {isLoading || isLoadingMore ? (
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
    </AppContainer>
  );
};
