import {FlatList} from 'react-native';

import {AppContainer, ScreenHeader} from 'components/atoms';
import {CommunityCard} from 'components/organisms';
import {CommunityStackScreens, ScreenTitle} from 'constants/navigation';
import {CommunityWithMembersPercentage} from 'models/business';

import styles from './CommunitiesDashboardTemplate.styles';
import {Spinner} from 'components/molecules';

type CommunitiesDashboardTemplateProp = {
  isLoading: boolean;
  communityList: CommunityWithMembersPercentage[] | undefined;
  navigation: CommunityStackScreenProps<CommunityStackScreens.Communities>['navigation'];
};

export const CommunitiesDashboardTemplate = ({
  isLoading,
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
      {isLoading ? (
        <Spinner />
      ) : (
        <FlatList
          scrollEnabled={false}
          data={communityList}
          contentContainerStyle={styles.listContentContainer}
          keyExtractor={item => item.community_id.toString()}
          renderItem={({item}) => (
            <CommunityCard
              community={item}
              onViewMembers={() => handleViewMembers(item.community_id)}
            />
          )}
        />
      )}
    </AppContainer>
  );
};
