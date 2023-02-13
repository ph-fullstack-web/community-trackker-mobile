import {StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import {Icon, Tooltip} from '@rneui/base';

import {CommunityCard} from 'components/organisms';
import {useCommunitiesDataProvider} from 'providers/CommunitiesDataProvider';

export const CommunitiesDashboardScreen = () => {
  const [open, setOpen] = useState(false);

  const {communityList} = useCommunitiesDataProvider();

  console.log(
    '🚀 ~ file: index.tsx:12 ~ CommunitiesDashboardScreen ~ communityList',
    communityList
  );

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

      <CommunityCard />
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
