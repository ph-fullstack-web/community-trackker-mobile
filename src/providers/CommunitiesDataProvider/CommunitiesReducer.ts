import {Community} from 'models/business';

export type CommunitiesContextState = {
  communityList: Community[];
  isDataLoading: boolean;
};

export type CommunitiesContextPayload = {
  communityList?: Community[];
  isDataLoading?: boolean;
};

export enum CommunitiesContextActionTypes {
  LoadComplete,
}

export type CommunitiesContextAction = {
  type: CommunitiesContextActionTypes;
  payload: CommunitiesContextPayload;
};

export const initialCommunityListState: CommunitiesContextState = {
  communityList: [],
  isDataLoading: true,
};

export const communitiesReducer = (
  state: CommunitiesContextState,
  action: CommunitiesContextAction
): CommunitiesContextState => {
  switch (action.type) {
    case CommunitiesContextActionTypes.LoadComplete: {
      return {
        ...state,
        isDataLoading: false,
        communityList: action.payload.communityList ?? [],
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
