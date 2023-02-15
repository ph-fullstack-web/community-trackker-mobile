import {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';

import {AppContainer, MemberCard, ScreenHeader} from 'components/atoms';
import {Search} from 'components/molecules';
import {Community, Employee} from 'models/business';
import {RootNativeStackParamList} from '../../../@types/navigation';
import {StackScreenName} from 'constants/enums';
import styles from './CommunityMembersScreen.styles';
import {useCommunitiesDataProvider} from 'providers/CommunitiesDataProvider';

type CommunityMembersScreenRouteProp = RouteProp<
  RootNativeStackParamList,
  StackScreenName.CommunityMembers
>;

export const CommunityMembersScreen = () => {
  const route = useRoute<CommunityMembersScreenRouteProp>();
  const {communityList} = useCommunitiesDataProvider();

  const {communityId} = route.params as Community;

  const [community, setCommunity] = useState<Community>();
  const [filteredMembers, setFilteredMembers] = useState<Employee[]>([]);

  useEffect(() => {
    if (communityId) {
      const communities: Community[] =
        communityList?.filter(
          community => community.communityId === communityId
        ) ?? [];

      setCommunity(() => communities[0]);
    }
  }, [communityId]);

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

  const NoResult = () => {
    return (
      <View style={styles.noResultContainer}>
        <Text style={styles.noResultText}>No Members Found</Text>
      </View>
    );
  };

  return (
    <AppContainer>
      <ScreenHeader
        title={community?.name ?? ''}
        subtitle={`Managed By: ${community?.managerName ?? ''}`}
      />
      {(community?.members ?? [])?.length === 0 ? (
        <NoResult />
      ) : (
        <>
          <Search onSearch={handleSearch} viewStyle={styles.search} />
          {filteredMembers?.length === 0 ? (
            <NoResult />
          ) : (
            <FlatList
              nestedScrollEnabled
              data={filteredMembers}
              keyExtractor={item => item.employeeId.toString()}
              renderItem={({item}) => {
                return <MemberCard memberDetails={item} />;
              }}
            ></FlatList>
          )}
        </>
      )}
    </AppContainer>
  );
};
