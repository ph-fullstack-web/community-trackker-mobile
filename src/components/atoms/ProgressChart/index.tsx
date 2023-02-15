import {Text, View, StyleSheet, ViewStyle} from 'react-native';
import {ProgressChart as RNProgressChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
import {Children, ReactNode} from 'react';

type ProgressChartData = {
  labels?: Array<string>;
  colors?: Array<string>;
  data: Array<number>;
};

type ProgressChartProps = {
  title: string;
  data: ProgressChartData;
  strokeColor: string;
  backgroundColor: string;
  width: number;
  height: number;
  radius?: number;
  strokeWidth?: number;
  children?: ReactNode;
  layout: 'vertical' | 'horizontal';
  styles?: Partial<ViewStyle>;
};

export const ProgressChart = ({
  title,
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
    <View style={{...styles.container, backgroundColor}}>
      <RNProgressChart
        data={data}
        width={width}
        height={height}
        strokeWidth={strokeWidth}
        style={{...styles.chart, ...customStyles, backgroundColor}}
        radius={radius}
        chartConfig={{
          color: () => strokeColor,
          backgroundGradientFromOpacity: 0,
          backgroundGradientTo: backgroundColor,
        }}
        hideLegend={true}
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
  backgroundColor: '#eaf1fa',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  chart: {
    // flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  veticalLabel: {
    color: 'black',
    display: 'flex',
    position: 'absolute',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalLabel: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 20,
  },
  percent: {
    fontSize: 16,
  },
  percentage: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
});
