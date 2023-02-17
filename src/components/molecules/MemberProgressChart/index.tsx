import {View} from 'react-native';

import {ProgressChart} from 'components/atoms';
import {ProgressChartLayout} from 'components/atoms/ProgressChart/ProgressChart.types';
import {COLORS} from 'constants/colors';

type ProgressChartProps = {
  percentage: number;
  color?: string;
  layout?: ProgressChartLayout;
};

export const MemberProgressChart = ({
  percentage,
  color = COLORS.DARK_BLUE,
  layout = 'horizontal',
}: ProgressChartProps) => {
  const data = {
    data: [percentage],
    colors: [color],
  };

  const displayPercentage = parseFloat((percentage * 100).toFixed(2));

  const verticalProps = {
    height: 130,
    strokeWidth: 10,
    radius: 45,
  };

  const horizontalProps = {
    height: 90,
    strokeWidth: 10,
    radius: 28,
    width: 80,
  };

  const sizeProps = layout === 'horizontal' ? horizontalProps : verticalProps;

  return (
    <View>
      <ProgressChart
        layout={layout}
        data={data}
        strokeColor={COLORS.LIGHT_GRAY}
        {...sizeProps}
      >
        {/* <>
          <Text style={styles.percentage}>
            {displayPercentage}
            <Text style={styles.percent}>%</Text>
          </Text>
          <Text>Members</Text>
        </> */}
      </ProgressChart>
    </View>
  );
};
