import {useGetCommunities} from 'api/hooks';
import {CommunitiesDashboardTemplate} from 'components/templates';
import {CommunityStackScreens} from 'constants/navigation';

type CommunitiesDashboardScreenProps =
  CommunityStackScreenProps<CommunityStackScreens.Communities>;

export const CommunitiesDashboardScreen = ({
  navigation,
}: CommunitiesDashboardScreenProps) => {
  const {isLoading, data} = useGetCommunities();
  return (
    <CommunitiesDashboardTemplate
      isLoading={isLoading}
      communityList={data}
      navigation={navigation}
    />
  );
};
