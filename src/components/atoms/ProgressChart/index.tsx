import {View} from 'react-native';
import {ProgressChart as RNProgressChart} from 'react-native-chart-kit';

import styles from './ProgressChart.styles';
import {ProgressChartProps} from './ProgressChart.types';

export const ProgressChart = ({
  id,
  data,
  children,
  strokeColor,
  width,
  height,
  strokeWidth,
  radius,
  layout,
  styles: customStyles = {},
}: ProgressChartProps) => {
  const labelStyles =
    layout === 'vertical' ? styles.verticalLabel : styles.horizontalLabel;

  return (
    <View id={id}>
      <RNProgressChart
        data={data}
        width={width}
        height={height}
        strokeWidth={strokeWidth}
        style={{...styles.chart, ...customStyles}}
        radius={radius}
        chartConfig={{
          color: () => strokeColor,
          backgroundGradientFromOpacity: 0,
          backgroundGradientToOpacity: 0,
        }}
        hideLegend
        withCustomBarColorFromData
      />
      {children && <View style={{...labelStyles, height}}>{children}</View>}
    </View>
  );
};

ProgressChart.defaultProps = {
  width: 200,
  height: 220,
  radius: 60,
  strokeWidth: 16,
};
