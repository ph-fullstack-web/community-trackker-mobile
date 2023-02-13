import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useState} from 'react';
import {Icon, Tooltip} from '@rneui/base';

import {CommunityCard} from 'components/organisms';
import {useCommunitiesDataProvider} from 'providers/CommunitiesDataProvider';

export const CommunitiesDashboardScreen = () => {
  const [open, setOpen] = useState(false);

  const {communityList} = useCommunitiesDataProvider();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>
          Communities
          <Tooltip
            skipAndroidStatusBar
            withOverlay={false}
            visible={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            popover={<Text style={styles.tooltipText}>Insert info here!</Text>}
          >
            <Icon name="info" type="material" />
          </Tooltip>
        </Text>
      </View>
      <FlatList
        nestedScrollEnabled
        data={communityList}
        keyExtractor={item => item.communityId.toString()}
        renderItem={({item}) => {
          return <CommunityCard {...item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 24,
    marginRight: 4,
  },
  tooltipText: {
    color: 'white',
  },
});
