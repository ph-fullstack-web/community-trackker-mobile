import {Text, View, StyleSheet} from 'react-native';
import {ProgressChart as RNProgressChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';

type ProgressChartProps = {
  title: string;
};

export const ProgressChart = ({title}: ProgressChartProps) => {
  const chartConfig = {color: 'red'};
  const {width} = Dimensions.get('window');
  // const {width} =useWindowDimensions();
  // each value represents a goal ring in Progress chart
  const data = {
    // labels: ["Swim"], // optional
    data: [0.4],
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
        <Text>18%</Text>
      </View>
    </View>
  );
  // return <Text>{title}</Text>;
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
});
