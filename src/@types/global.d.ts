import {MutableRefObject, ReactNode} from 'react';
import {IconProps as DefaultIconProps} from '@rneui/base';

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

  export type IconProps = DefaultIconProps & {
    type:
      | 'antdesign'
      | 'entypo'
      | 'evilicon'
      | 'feather'
      | 'font-awesome'
      | 'font-awesome-5'
      | 'fontisto'
      | 'foundation'
      | 'ionicon'
      | 'material'
      | 'material-community'
      | 'octicon'
      | 'simple-line-icon'
      | 'zocial';
  };
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootDrawerParamList {}
  }
}
