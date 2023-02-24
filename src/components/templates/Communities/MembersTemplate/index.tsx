import {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

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
  const {communityId} = route.params!;
  const [community, setCommunity] = useState<Community>();
  const [filteredMembers, setFilteredMembers] = useState<Employee[]>([]);

  useEffect(() => {
    if (communityId) {
      const communities: Community[] =
        communityList?.filter(item => item.communityId === communityId) ?? [];

      setCommunity(() => communities[0]);
    }
  }, [communityId, communityList]);

  useEffect(() => {
    setFilteredMembers(() => community?.members ?? []);
  }, [community?.members]);

  const handleSearch = (text: string) => {
    const searchText = text.trim().toLowerCase();
    if (searchText !== '') {
      setFilteredMembers(() =>
        (community?.members ?? [])?.filter(
          ({fullName, csvEmail, dateHired}: Employee) =>
            fullName.toLowerCase().indexOf(searchText) !== -1 ||
            csvEmail.toLowerCase().indexOf(searchText) !== -1 ||
            dateHired.indexOf(searchText) !== -1
        )
      );
    } else {
      return setFilteredMembers(() => community?.members ?? []);
    }
  };

  return (
    <AppContainer>
      <ScreenHeader
        title={community?.name ?? ''}
        subtitle={`Managed By: ${community?.managerName ?? ''}`}
      />
      {(community?.members ?? [])?.length === 0 ? (
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
              keyExtractor={item => item.employeeId.toString()}
              renderItem={({item}) => <MemberCard memberDetails={item} />}
              style={styles.listContentContainer}
            />
          )}
        </>
      )}
    </AppContainer>
  );
};
