import {FlatList} from 'react-native';

import {AppContainer, ScreenHeader} from 'components/atoms';
import {ErrorMessage, Spinner} from 'components/molecules';
import {CommunityCard} from 'components/organisms';
import {CommunityStackScreens, ScreenTitle} from 'constants/navigation';
import {CommunityWithMembersPercentage} from 'models/business';

import styles from './CommunitiesDashboardTemplate.styles';

type CommunitiesDashboardTemplateProp = {
  isLoading: boolean;
  isError: boolean;
  error: any;
  communityList: CommunityWithMembersPercentage[] | undefined;
  navigation: CommunityStackScreenProps<CommunityStackScreens.Communities>['navigation'];
};

export const CommunitiesDashboardTemplate = ({
  isLoading,
  communityList,
  isError,
  error,
  navigation,
}: CommunitiesDashboardTemplateProp) => {
  const handleViewMembers = (communityId: number) => {
    navigation.push(CommunityStackScreens.CommunityMembers, {
      previousScreen: CommunityStackScreens.Communities,
      communityId,
    });
  };

  return (
    <AppContainer keyboardShouldPersistTaps="handled" horizontal>
      <ScreenHeader title={ScreenTitle.Communities} />
      {isError ? (
        <ErrorMessage code={error.code} message={error.message} />
      ) : isLoading ? (
        <Spinner />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
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
