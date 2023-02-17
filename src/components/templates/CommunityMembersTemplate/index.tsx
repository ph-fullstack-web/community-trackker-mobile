import {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';

import {AppContainer, ScreenHeader} from 'components/atoms';
import {Search} from 'components/molecules';
import {MemberCard} from 'components/organisms';
import {StackScreenName} from 'constants/enums';
import {Community, Employee} from 'models/business';
import {RootNativeStackParamList} from '../../../@types/navigation';
import styles from './CommunityMembersTemplate.styles';

type CommunityMembersScreenRouteProp = RouteProp<
  RootNativeStackParamList,
  StackScreenName.CommunityMembersStack
>;

const NoResult = () => {
  return (
    <View style={styles.noResultContainer}>
      <Text style={styles.noResultText}>No Members Found</Text>
    </View>
  );
};

type CommunityMembersTemplateProps = {
  communityList: Community[] | undefined;
};

export const CommunityMembersTemplate = (
  props: CommunityMembersTemplateProps
) => {
  const route = useRoute<CommunityMembersScreenRouteProp>();
  const {communityId} = route.params as {communityId: number};

  const {communityList} = props;

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
              renderItem={({item}) => <MemberCard memberDetails={item} />}
            />
          )}
        </>
      )}
    </AppContainer>
  );
};
