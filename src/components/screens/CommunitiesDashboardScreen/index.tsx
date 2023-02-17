import {CommunitiesDashboardTemplate} from 'components/templates';
import {useCommunitiesDataProvider} from 'providers/CommunitiesDataProvider';

export const CommunitiesDashboardScreen = () => {
  const {communityList} = useCommunitiesDataProvider();

  return <CommunitiesDashboardTemplate communityList={communityList} />;
};
