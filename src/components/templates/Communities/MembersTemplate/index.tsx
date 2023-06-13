import {useEffect, useState} from 'react';
import {ListRenderItemInfo} from 'react-native';

import {AppContainer, InfiniteScroll, ScreenHeader} from 'components/atoms';
import {ErrorMessage, NoResult, Search, Spinner} from 'components/molecules';
import {MemberCard} from 'components/organisms';

import styles from './MembersTemplate.styles';
import {MembersTemplateProps} from './MembersTemplate.types';
import {PeopleUnderCommunitySearch} from 'models/business';

export const MembersTemplate = ({
  rows,
  setSearch,
  setPage,
  currentPage = 1,
  lastPage = 0,
  membersList = [],
  community_name = '',
  manager_name = '',
  isLoading,
  isError,
  error,
  isFetching,
}: MembersTemplateProps) => {
  const [displayedMembers, setDisplayedMembers] =
    useState<PeopleUnderCommunitySearch[]>(membersList);

  useEffect(() => {
    if (!isFetching) {
      setDisplayedMembers(prevState =>
        currentPage > 1 ? [...prevState, ...membersList] : membersList
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

  const handleSearch = (text: string) => {
    setSearch(() => text.trim().toLowerCase());
    setPage(() => 1);
  };

  const handleEndReached = () => {
    setPage(prevState => prevState + 1);
  };

  const renderItem = ({
    item,
  }: ListRenderItemInfo<PeopleUnderCommunitySearch>) => (
    <MemberCard memberDetails={item} />
  );

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
            <Search
              id="search_members"
              onSearch={handleSearch}
              viewStyle={styles.search}
            />
          ) : (
            <></>
          )}
          {isLoading || (isFetching && currentPage === 1) ? (
            <Spinner />
          ) : (
            <InfiniteScroll<PeopleUnderCommunitySearch>
              id="peopleList"
              data={displayedMembers}
              keyExtractor={item => item.people_id.toString()}
              renderItem={renderItem}
              style={styles.listContentContainer}
              currentPage={currentPage}
              lastPage={lastPage}
              limit={rows}
              ListEmptyComponent={<NoResult message="No Members Found" />}
              handleEndReached={handleEndReached}
            />
          )}
        </>
      )}
    </AppContainer>
  );
};
