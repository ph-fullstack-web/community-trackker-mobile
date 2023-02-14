import {MutableRefObject, ReactNode} from 'react';

declare global {
  export type ApprovedAny = any;

  export interface ComponentWithChildren<T = ReactNode> {
    children?: T;
  }

  export interface ComponentWithRef<T = unknown> {
    ref?: MutableRefObject<T>;
  }

  export interface ServiceModel {
    isDataLoading?: boolean;
  }

  export interface Icon {
    name: string;
    type?: string;
  }
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootDrawerParamList {}
  }
}
