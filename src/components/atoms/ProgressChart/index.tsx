import {COLORS} from 'constants/colors';
import {View} from 'react-native';
import {ProgressChart as RNProgressChart} from 'react-native-chart-kit';

import styles from './ProgressChart.styles';
import {ProgressChartProps} from './ProgressChart.types';

export const ProgressChart = ({
  data,
  children,
  strokeColor,
  backgroundColor,
  width,
  height,
  strokeWidth,
  radius,
  layout,
  styles: customStyles = {},
}: ProgressChartProps) => {
  const labelStyles =
    layout === 'vertical' ? styles.veticalLabel : styles.horizontalLabel;

  return (
    <View style={{...styles.container}}>
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
          backgroundGradientTo: backgroundColor,
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
  backgroundColor: COLORS.ULTRA_LIGHT_GRAY,
};
