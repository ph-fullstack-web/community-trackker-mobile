import {Text, View, StyleSheet} from 'react-native';
import {ProgressChart} from 'components/atoms';
import {ProgressChartLayout} from 'components/atoms/ProgressChart/progressChart.types';

type ProgressChartProps = {
  percentage: number;
  color?: string;
  layout?: ProgressChartLayout;
};

export const MemberProgressChart = ({
  percentage,
  color = '#2f78c4',
  layout = 'horizontal',
}: ProgressChartProps) => {
  const data = {
    data: [percentage],
    colors: [color],
  };

  const displayPercentage = parseFloat((percentage * 100).toFixed(2));

  const veticalProps = {
    height: 130,
    strokeWidth: 16,
    radius: 45,
  };

  const horizontalProps = {
    height: 90,
    strokeWidth: 16,
    radius: 20,
    width: 80,
  };

  const sizeProps = layout === 'horizontal' ? horizontalProps : veticalProps;

  return (
    <View>
      <ProgressChart
        layout={layout}
        data={data}
        strokeColor="#b6bbc2"
        backgroundColor="#eaf1fa"
        {...sizeProps}
      >
        <>
          <Text style={styles.percentage}>
            {displayPercentage}
            <Text style={styles.percent}>%</Text>
          </Text>
          <Text>Members</Text>
        </>
      </ProgressChart>
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
  percent: {
    fontSize: 14,
  },
  percentage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
