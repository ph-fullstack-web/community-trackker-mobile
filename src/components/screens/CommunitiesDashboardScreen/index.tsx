import {StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import {Icon, Tooltip} from '@rneui/base';
import {CommunityCard} from 'components/organisms';
import {FlatList} from 'react-native-gesture-handler';
import {mockCommunities} from 'data/mockCommunities';

export const CommunitiesDashboardScreen = () => {
  const [open, setOpen] = useState(false);

  return (
    <View>
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
        data={mockCommunities}
        renderItem={({
          item: {
            community_name,
            community_description,
            percentage,
            members,
            manager_full_name,
          },
        }) => {
          return (
            <CommunityCard
              communityName={community_name}
              communityDescription={community_description}
              communityManager={manager_full_name}
              percentage={percentage}
              membersCount={members}
            />
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
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
