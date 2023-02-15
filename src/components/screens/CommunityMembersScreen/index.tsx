import {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';

import {AppContainer, MemberCard, ScreenHeader} from 'components/atoms';
import {Search} from 'components/molecules';
import {Community, Employee} from 'models/business';
import {RootNativeStackParamList} from '../../../@types/navigation';
import {StackScreenName} from 'constants/enums';
import styles from './CommunityMembersScreen.styles';

type CommunityMembersScreenRouteProp = RouteProp<
  RootNativeStackParamList,
  StackScreenName.CommunityMembers
>;

export const CommunityMembersScreen = () => {
  const route = useRoute<CommunityMembersScreenRouteProp>();
  const {name, managerName, members} = route.params as Community;

  const [filteredMembers, setFilteredMembers] = useState<Employee[]>(members);

  useEffect(() => {
    setFilteredMembers(() => members);
  }, [members]);

  const handleSearch = (text: string) => {
    const searchText = text.trim().toLowerCase();
    if (searchText !== '') {
      setFilteredMembers(() =>
        members.filter(
          ({fullName, csvEmail, dateHired}: Employee) =>
            fullName.toLowerCase().indexOf(searchText) !== -1 ||
            csvEmail.toLowerCase().indexOf(searchText) !== -1 ||
            dateHired.indexOf(searchText) !== -1
        )
      );
    } else {
      return setFilteredMembers(() => members);
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
      <ScreenHeader title={name} subtitle={`Managed By: ${managerName}`} />
      {members?.length === 0 ? (
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
