import {FlatList} from 'react-native';

import {AppContainer, ScreenHeader} from 'components/atoms';
import {CommunityCard} from 'components/organisms';
import {CommunityStackScreens, ScreenTitle} from 'constants/navigation';
import {Community} from 'models/business';

import styles from './CommunitiesDashboardTemplate.styles';

type CommunitiesDashboardTemplateProp = {
  communityList: Community[] | undefined;
  navigation: CommunityStackScreenProps<CommunityStackScreens.Communities>['navigation'];
};

export const CommunitiesDashboardTemplate = ({
  communityList,
  navigation,
}: CommunitiesDashboardTemplateProp) => {
  const handleViewMembers = (communityId: number) => {
    navigation.push(CommunityStackScreens.CommunityMembers, {
      previousScreen: CommunityStackScreens.Communities,
      communityId,
    });
  };

  return (
    <AppContainer>
      <ScreenHeader title={ScreenTitle.Communities} />
      <FlatList
        scrollEnabled={false}
        data={communityList}
        contentContainerStyle={styles.listContentContainer}
        keyExtractor={item => item.communityId.toString()}
        renderItem={({item}) => (
          <CommunityCard
            onViewMembers={() => handleViewMembers(item.communityId)}
            {...item}
          />
        )}
      />
    </AppContainer>
  );
};
