import {CommunitiesDashboardTemplate} from 'components/templates';
import {useCommunitiesDataProvider} from 'providers/CommunitiesDataProvider';

type CommunitiesDashboardScreenProps = CommunityStackScreenProps<'Communities'>;

export const CommunitiesDashboardScreen = ({
  navigation,
}: CommunitiesDashboardScreenProps) => {
  const {communityList} = useCommunitiesDataProvider();

  return (
    <CommunitiesDashboardTemplate
      communityList={communityList}
      navigation={navigation}
    />
  );
};
