import {ViewStyle} from 'react-native';

export type ProgressChartLayout = 'vertical' | 'horizontal';

export type ProgressChartData = {
  labels?: Array<string>;
  colors?: Array<string>;
  data: Array<number>;
};

export type ProgressChartProps = ComponentWithChildren & {
  data: ProgressChartData;
  strokeColor: string;
  backgroundColor: string;
  width: number;
  height: number;
  radius?: number;
  strokeWidth?: number;
  layout: ProgressChartLayout;
  styles?: Partial<ViewStyle>;
};
