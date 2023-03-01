import {useCallback, useEffect, useRef, useState} from 'react';
import {ActivityIndicator, ListRenderItemInfo, View} from 'react-native';

import {AppContainer, InfiniteScroll, ScreenHeader} from 'components/atoms';
import {NoResult, Search} from 'components/molecules';
import {MemberCard} from 'components/organisms';
import {CommunityStackScreens} from 'constants/navigation';
import {Community, Employee} from 'models/business';

import styles from './MembersTemplate.styles';

type MembersTemplateProps = {
  communityList?: Community[];
  route: CommunityStackScreenProps<CommunityStackScreens.CommunityMembers>['route'];
};

const LIMIT = 10;

export const MembersTemplate = ({
  communityList,
  route,
}: MembersTemplateProps) => {
  const {communityId} = route.params!;
  const communityRef = useRef<Community | null>(
    communityList?.filter(item => item.communityId === communityId)[0] ?? null
  );
  const community = communityRef.current;
  const [filteredMembers, setFilteredMembers] = useState<Employee[]>([]);
  const [members, setMembers] = useState<Employee[]>(community?.members ?? []);
  const [isLoading, setIsLoading] = useState(true);
  const [lastPageCount, setLastPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const handleSearch = (text: string) => {
    const searchText = text.trim().toLowerCase();
    let result = community?.members ?? [];

    if (searchText) {
      result = result.filter(
        ({fullName, csvEmail, dateHired}: Employee) =>
          fullName.toLowerCase().indexOf(searchText) !== -1 ||
          csvEmail.toLowerCase().indexOf(searchText) !== -1 ||
          dateHired.indexOf(searchText) !== -1
      );
    }

    setMembers(result);
    setIsLoading(true);
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

  const renderItem = ({item}: ListRenderItemInfo<Employee>) => (
    <MemberCard memberDetails={item} />
  );

  const Spinner = useCallback(() => {
    return (
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size={75} />
      </View>
    );
  }, []);

  useEffect(() => {
    loadMore().then(() => setIsLoading(false));
  }, [loadMore]);

  return (
    <AppContainer
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
      horizontal
    >
      <ScreenHeader
        title={community?.name ?? ''}
        subtitle={`Managed By: ${community?.managerName ?? ''}`}
      />
      <>
        {!!community?.members.length && (
          <Search onSearch={handleSearch} viewStyle={styles.search} />
        )}
        {isLoading ? (
          <Spinner />
        ) : (
          <InfiniteScroll<Employee>
            data={filteredMembers}
            keyExtractor={item => item.employeeId.toString()}
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
