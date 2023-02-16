import {ReactNode} from 'react';
import {ViewStyle} from 'react-native';

export type ProgressChartLayout = 'vertical' | 'horizontal';
export type ProgressChartData = {
  labels?: Array<string>;
  colors?: Array<string>;
  data: Array<number>;
};

export type ProgressChartProps = {
  data: ProgressChartData;
  strokeColor: string;
  backgroundColor: string;
  width: number;
  height: number;
  radius?: number;
  strokeWidth?: number;
  children?: ReactNode;
  layout: ProgressChartLayout;
  styles?: Partial<ViewStyle>;
};
