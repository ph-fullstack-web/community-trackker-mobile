import {ViewStyle} from 'react-native';
import {ProgressChartProps as DefaultProgressChartProps} from 'react-native-chart-kit/dist/ProgressChart';

export type ProgressChartLayout = 'vertical' | 'horizontal';

export type ProgressChartData = {
  labels?: Array<string>;
  colors?: Array<string>;
  data: Array<number>;
};

export type ProgressChartProps = ComponentWithChildren &
  DefaultProgressChartProps & {
    id: string;
    strokeColor: string;
    layout: ProgressChartLayout;
    styles?: Partial<ViewStyle>;
  };
