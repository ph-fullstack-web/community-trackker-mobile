import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from '@rneui/themed';

import {Button, Card, ProgressChart, Text} from 'components/atoms';
import {CecCardChartProps, CecCardProps} from './CecCard.types';
import styles from './CecCard.styles';
import {COLORS} from 'constants/colors';

export const CecCard = ({
  percentage = 40 / 100,
  fillColor = COLORS.DARK_BLUE,
  layout = 'horizontal',
}: CecCardProps) => {
  const {theme} = useTheme();

  const data = {
    data: [percentage],
    colors: [fillColor],
  };

  const horizontalProps = {
    height: 150,
    strokeWidth: 15,
    radius: 66,
    width: 150,
  };

  return (
    <Card style={[styles.container, {backgroundColor: theme.colors.grey5}]}>
      <View style={styles.card_chart_container}>
        <CecCardChart
          data={data}
          layout={layout}
          layoutSetting={horizontalProps}
          percentage={percentage}
        />
      </View>
      <View style={styles.details_wrapper}>
        <CecCardDetails />
        <Button
          title="View Details"
          titleStyle={styles.buttonText}
          buttonStyle={[styles.button, {backgroundColor: theme.colors.primary}]}
          containerStyle={styles.buttonContainer}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: [COLORS.DARK_PLUM, COLORS.DARK_BLUE, COLORS.MEDIUM_BLUE],
            start: {x: 0, y: 0.5},
            end: {x: 1, y: 0.5},
          }}
          onPress={() => console.log('LGTM')}
        />
      </View>
    </Card>
  );
};

export const CecCardChart = (props: CecCardChartProps) => {
  const {data, layoutSetting, layout, percentage} = props;
  const {theme} = useTheme();
  const displayPercentage = parseFloat((percentage * 100).toFixed(2));

  return (
    <View style={styles.chart_wrapper}>
      <ProgressChart
        layout={layout}
        data={data}
        strokeColor={theme.colors.grey3}
        {...layoutSetting}
      >
        <View style={styles.text_wrapper}>
          <View style={styles.text_container}>
            <Text style={styles.text}>
              {displayPercentage}
              <Text style={styles.percent}> Pts</Text>
            </Text>
          </View>
        </View>
      </ProgressChart>
    </View>
  );
};

export const CecCardDetails = () => {
  return (
    <View>
      <Text>Approved: 6</Text>
      <Text>Pending: 9</Text>
      <Text>Draft: 8</Text>
      <Text>Rejected: 8</Text>
    </View>
  );
};
