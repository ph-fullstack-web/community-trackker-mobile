import {View} from 'react-native';

import {useThemeProvider} from 'providers/ThemeProvider';
import {ProgressChart, Text} from 'components/atoms';
import {ProgressChartLayout} from 'components/atoms/ProgressChart/ProgressChart.types';
import {COLORS} from 'constants/colors';

import styles from './MemberProgressChart.styles';

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
  const {mode} = useThemeProvider();

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
    height: 150,
    strokeWidth: 15,
    radius: 65,
    width: 150,
  };

  const sizeProps = layout === 'horizontal' ? horizontalProps : verticalProps;

  const strokeColor =
    mode === 'light' ? COLORS.LIGHT_GRAY : COLORS.VERY_DARK_GRAY;

  return (
    <View
      style={[
        styles.container,
        styles[`container_${mode}` as keyof typeof undefined],
      ]}
    >
      <ProgressChart
        layout={layout}
        data={data}
        strokeColor={strokeColor}
        {...sizeProps}
      >
        <View style={styles.textWrapper}>
          <View
            style={[
              styles.textContainer,
              styles[`textContainer_${mode}` as keyof typeof undefined],
            ]}
          >
            <Text style={styles.text}>
              {displayPercentage}
              <Text style={styles.percent}>%</Text>
            </Text>
            <Text style={styles.text}>Members</Text>
          </View>
        </View>
      </ProgressChart>
    </View>
  );
};
