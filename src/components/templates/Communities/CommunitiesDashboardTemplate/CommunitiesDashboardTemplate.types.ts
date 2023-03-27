import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from 'react-query';
import {CommunityStackScreens} from 'constants/navigation';
import {CommunityWithMembersPercentage} from 'models/business';

export type CommunitiesDashboardTemplateProp = {
  isLoading: boolean;
  isError: boolean;
  error: any;
  communityList: CommunityWithMembersPercentage[] | undefined;
  navigation: CommunityStackScreenProps<CommunityStackScreens.Communities>['navigation'];
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<CommunityWithMembersPercentage[], unknown>>;
};
