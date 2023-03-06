import {useGetCommunitiesWithPercentage} from 'api/hooks';
import {CommunitiesDashboardTemplate} from 'components/templates';
import {CommunityStackScreens} from 'constants/navigation';

type CommunitiesDashboardScreenProps =
  CommunityStackScreenProps<CommunityStackScreens.Communities>;

export const CommunitiesDashboardScreen = ({
  navigation,
}: CommunitiesDashboardScreenProps) => {
  const {isLoading, data, error, isError} = useGetCommunitiesWithPercentage();

  return (
    <CommunitiesDashboardTemplate
      isLoading={isLoading}
      isError={isError}
      error={error}
      communityList={data}
      navigation={navigation}
    />
  );
};
