import {createContext} from 'react';

import {Community} from 'models/business';

export interface CommunitiesDataContextProps {
  communityList: Community[] | undefined;
  isDataLoading: boolean;
}

export const CommunitiesDataContext = createContext<
  CommunitiesDataContextProps | undefined
>(undefined);
