import {Text} from 'react-native';

type ProgressChartProps = {
  title: string;
};

export const ProgressChart = ({title}: ProgressChartProps) => {
  return <Text>{title}</Text>;
};
