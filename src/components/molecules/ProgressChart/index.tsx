import {Text, View, StyleSheet} from 'react-native';
import {ProgressChart as RNProgressChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';

type ProgressChartProps = {
  title: string;
  percentage: number;
};

export const ProgressChart = ({title, percentage}: ProgressChartProps) => {
  const {width} = Dimensions.get('window');
  const data = {
    data: [percentage],
    colors: ['#2f78c4'],
  };

  return (
    <View style={styles.container}>
      <RNProgressChart
        data={data}
        width={350}
        height={220}
        strokeWidth={16}
        style={styles.chart}
        radius={60}
        chartConfig={{
          color: () => '#b6bbc2',
          backgroundGradientFromOpacity: 0,
          backgroundGradientTo: '#eaf1fa',
        }}
        hideLegend={true}
        withCustomBarColorFromData
      />
      <View style={styles.label}>
        <Text style={styles.percentage}>
          {percentage * 100}
          <Text style={styles.percent}>%</Text>
        </Text>
        <Text>Members</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  chart: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#eaf1fa',
  },
  label: {
    color: 'black',
    display: 'flex',
    position: 'absolute',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 220,
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
