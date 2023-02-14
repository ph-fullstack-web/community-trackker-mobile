import {User} from 'models/business';

export type UserContextState = {
  user: User | undefined;
  isDataLoading: boolean;
};

export type UserContextPayload = {
  user?: User;
  isDataLoading?: boolean;
};

export enum UserContextActionTypes {
  Login,
  Logout,
}

export type UserContextAction = {
  type: UserContextActionTypes;
  payload: UserContextPayload;
};

export const initialUserState: UserContextState = {
  user: undefined,
  isDataLoading: true,
};

export const userReducer = (
  state: UserContextState,
  action: UserContextAction
): UserContextState => {
  switch (action.type) {
    case UserContextActionTypes.Login: {
      return {
        ...state,
        isDataLoading: false,
        user: action.payload.user,
      };
    }

    case UserContextActionTypes.Logout: {
      return {
        ...state,
        isDataLoading: false,
        user: undefined,
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
