import {CommunitiesDashboardTemplate} from 'components/templates';
import {CommunityStackScreens} from 'constants/navigation';
import {useCommunitiesDataProvider} from 'providers/CommunitiesDataProvider';

type CommunitiesDashboardScreenProps =
  CommunityStackScreenProps<CommunityStackScreens.Communities>;

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
