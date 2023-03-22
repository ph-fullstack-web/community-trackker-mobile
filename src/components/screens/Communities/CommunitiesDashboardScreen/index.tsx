import {useGetCommunitiesWithPercentage} from 'api/hooks';
import {CommunitiesDashboardTemplate} from 'components/templates';
import {CommunityStackScreens} from 'constants/navigation';

type CommunitiesDashboardScreenProps =
  CommunityStackScreenProps<CommunityStackScreens.Communities>;

export const CommunitiesDashboardScreen = ({
  navigation,
}: CommunitiesDashboardScreenProps) => {
  const {isLoading, isFetching, data, refetch, error, isError} =
    useGetCommunitiesWithPercentage();

  return (
    <CommunitiesDashboardTemplate
      isLoading={isLoading || isFetching}
      isError={isError}
      error={error}
      communityList={data}
      navigation={navigation}
      refetch={refetch}
    />
  );
};
