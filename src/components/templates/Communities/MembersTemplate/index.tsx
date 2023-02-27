import {useCallback, useRef, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {AppContainer, ScreenHeader} from 'components/atoms';
import {NoResult, Search} from 'components/molecules';
import {MemberCard} from 'components/organisms';
import {CommunityStackScreens} from 'constants/navigation';
import {Community, Employee} from 'models/business';

import styles from './MembersTemplate.styles';

type MembersTemplateProps = {
  communityList?: Community[];
  route: CommunityStackScreenProps<CommunityStackScreens.CommunityMembers>['route'];
};

export const MembersTemplate = ({
  communityList,
  route,
}: MembersTemplateProps) => {
  const {communityId} = route.params;
  const community = useRef<Partial<Community>>(
    communityList?.filter(item => item.communityId === communityId)[0] ?? {}
  );
  const [filteredMembers, setFilteredMembers] = useState<Employee[]>(
    community.current.members ?? []
  );
  const itemKey = (item: Employee) => item.employeeId.toString();

  const handleSearch = (text: string) => {
    const searchText = text.trim().toLowerCase();

    if (searchText !== '') {
      setFilteredMembers(() =>
        (community.current.members ?? [])?.filter(
          ({fullName, csvEmail, dateHired}: Employee) =>
            fullName.toLowerCase().indexOf(searchText) !== -1 ||
            csvEmail.toLowerCase().indexOf(searchText) !== -1 ||
            dateHired.indexOf(searchText) !== -1
        )
      );
    } else {
      return setFilteredMembers(() => community.current.members ?? []);
    }
  };

  const renderItems = useCallback(
    ({item}: ListRenderItemInfo<Employee>) => (
      <MemberCard memberDetails={item} />
    ),
    []
  );

  return (
    <AppContainer>
      <ScreenHeader
        title={community.current.name ?? ''}
        subtitle={`Managed By: ${community.current.managerName ?? ''}`}
      />
      {!community.current.members?.length ? (
        <NoResult message="No Members Found" />
      ) : (
        <>
          <Search onSearch={handleSearch} viewStyle={styles.search} />
          {filteredMembers?.length === 0 ? (
            <NoResult message="No Members Found" />
          ) : (
            <FlatList
              scrollEnabled={false}
              data={filteredMembers}
              keyExtractor={itemKey}
              renderItem={renderItems}
              style={styles.listContentContainer}
            />
          )}
        </>
      )}
    </AppContainer>
  );
};
