import {FlatList} from 'react-native';

import {AppContainer, ScreenHeader} from 'components/atoms';
import {ErrorMessage, NoResult, Spinner} from 'components/molecules';
import {CommunityCard} from 'components/organisms';
import {CommunityStackScreens, ScreenTitle} from 'constants/navigation';

import styles from './CommunitiesDashboardTemplate.styles';
import {CommunitiesDashboardTemplateProp} from './CommunitiesDashboardTemplate.types';

export const CommunitiesDashboardTemplate = ({
  isLoading,
  isError,
  error,
  communityList = [],
  navigation,
  refetch,
}: CommunitiesDashboardTemplateProp) => {
  const handleViewMembers = (communityId: number) => {
    navigation.push(CommunityStackScreens.CommunityMembers, {
      previousScreen: CommunityStackScreens.Communities,
      communityId,
    });
  };

  return (
    <AppContainer horizontal>
      <ScreenHeader title={ScreenTitle.Communities} />
      {isError ? (
        <ErrorMessage status={error.status} message={error.message} />
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
          ListEmptyComponent={<NoResult message="No Communities Found" />}
          refreshing={isLoading}
          onRefresh={refetch}
        />
      )}
    </AppContainer>
  );
};
