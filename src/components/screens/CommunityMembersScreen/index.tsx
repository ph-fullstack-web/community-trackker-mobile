import {FlatList, Text, StyleSheet, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

import {MemberCard, ScreenHeader} from 'components/atoms';

export const CommunityMembersScreen = () => {
  const route = useRoute<any>();
  const {name, managerName, members} = route.params;

  return (
    <>
      <ScreenHeader
        title={name}
        subtitle={`Managed By: ${managerName}`}
      ></ScreenHeader>
      <FlatList
        style={styles.listContainer}
        nestedScrollEnabled
        data={members}
        keyExtractor={item => item.employeeId.toString()}
        renderItem={({item}) => {
          return <MemberCard memberDetails={item} />;
        }}
      ></FlatList>
    </>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    margin: 10,
  },
});
