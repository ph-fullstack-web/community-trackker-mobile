import {FlatList} from 'react-native';

import {AppContainer, ScreenHeader} from 'components/atoms';
import {CommunityCard} from 'components/organisms';
import {ScreenTitle} from 'constants/navigation';
import {Community} from 'models/business';

import styles from './CommunitiesDashboardTemplate.styles';

type CommunitiesDashboardTemplateProp = {
  communityList: Community[] | undefined;
  navigation: CommunityStackScreenProps<'Communities'>['navigation'];
};

export const CommunitiesDashboardTemplate = ({
  communityList,
  navigation,
}: CommunitiesDashboardTemplateProp) => {
  const handleViewMembers = (communityId: number) => {
    navigation.navigate('CommunityMembers', {communityId});
  };

  return (
    <AppContainer>
      <ScreenHeader title={ScreenTitle.Communities} />
      <FlatList
        scrollEnabled={false}
        data={communityList}
        contentContainerStyle={styles.listContentContainer}
        keyExtractor={item => item.communityId.toString()}
        renderItem={({item}) => {
          return <CommunityCard onViewMembers={handleViewMembers} {...item} />;
        }}
      />
    </AppContainer>
  );
};
