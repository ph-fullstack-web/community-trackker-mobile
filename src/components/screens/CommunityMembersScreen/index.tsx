import {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';

import {MemberCard, ScreenHeader} from 'components/atoms';
import {Search} from 'components/molecules';

import {Employee} from 'models/business';
import {RootNativeStackParamList} from '../../../@types/navigation';
import {ScreenName} from 'constants/enums';

type CommunityMembersScreenRouteProp = RouteProp<
  RootNativeStackParamList,
  ScreenName.CommunityMembers
>;

export const CommunityMembersScreen = () => {
  const route = useRoute<CommunityMembersScreenRouteProp>();
  const {name, managerName, members} = route.params;

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

  return (
    <>
      <ScreenHeader title={name} subtitle={`Managed By: ${managerName}`} />
      <Search onSearch={handleSearch} viewStyle={styles.search} />
      <FlatList
        nestedScrollEnabled
        data={filteredMembers}
        keyExtractor={item => item.employeeId.toString()}
        renderItem={({item}) => {
          return <MemberCard memberDetails={item} />;
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  search: {
    paddingBottom: 10,
  },
});
