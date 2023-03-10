import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {useThemeProvider} from 'providers';
import {Button, ProgressChart, Text} from 'components/atoms';
import {
  CecCardChartProps,
  CecCardProps,
  CecCardRequestDetails,
} from './CecCard.types';
import styles from './CecCard.styles';
import {COLORS, GRADIENT} from 'constants/colors';

export const CecCard = (props: CecCardProps) => {
  const {percentage, fillColor, layout, cecRequests} = props;
  const {mode} = useThemeProvider();

  const data = {
    data: [percentage],
    colors: [fillColor],
  };

  const horizontalProps = {
    height: 170,
    strokeWidth: 15,
    radius: 65,
    width: 170,
  };

  return (
    <View
      style={[
        styles.container,
        styles[`container_${mode}` as keyof typeof undefined],
      ]}
    >
      <View style={styles.card_chart_container}>
        <CecCardChart
          data={data}
          layout={layout}
          layoutSetting={horizontalProps}
          percentage={percentage}
        />
      </View>
      <View
        style={[
          styles.details_wrapper,
          styles[`details_wrapper_${mode}` as keyof typeof undefined],
        ]}
      >
        <CecCardDetails requests={cecRequests} />
        <Button
          title="View Details"
          titleStyle={styles.buttonText}
          buttonStyle={[
            styles.button,
            styles[`button_${mode}` as keyof typeof Button],
          ]}
          containerStyle={styles.buttonContainer}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: GRADIENT[`${mode}_theme` as keyof typeof GRADIENT],
            start: {x: 0, y: 0.5},
            end: {x: 1, y: 0.5},
          }}
          onPress={() => console.log('LGTM')}
        />
      </View>
    </View>
  );
};

export const CecCardChart = (props: CecCardChartProps) => {
  const {data, layoutSetting, layout, percentage} = props;
  const {mode} = useThemeProvider();
  const displayPercentage = parseFloat((percentage * 100).toFixed(2));
  const strokeColor = mode === 'light' ? COLORS.LIGHT_GRAY : COLORS.MEDIUM_GRAY;

  return (
    <View
      style={[
        styles.chart_wrapper,
        styles[`chart_wrapper_${mode}` as keyof typeof undefined],
      ]}
    >
      <ProgressChart
        layout={layout}
        data={data}
        strokeColor={strokeColor}
        {...layoutSetting}
      >
        <View style={styles.text_wrapper}>
          <View
            style={[
              styles.text_container,
              styles[`text_container_${mode}` as keyof typeof undefined],
            ]}
          >
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

export const CecCardDetails = (props: CecCardRequestDetails) => {
  const {requests} = props;
  const {approved, pending, draft, rejected} = requests;

  return (
    <>
      <View style={styles.horizontal_layout}>
        <Text style={styles.bold}>{approved}</Text>
        <Text style={styles.uppercase}> - Approved</Text>
      </View>
      <View style={styles.horizontal_layout}>
        <Text style={styles.bold}>{pending}</Text>
        <Text style={styles.uppercase}> - Pending</Text>
      </View>
      <View style={styles.horizontal_layout}>
        <Text style={styles.bold}>{draft}</Text>
        <Text style={styles.uppercase}> - Draft</Text>
      </View>
      <View style={styles.horizontal_layout}>
        <Text style={styles.bold}>{rejected}</Text>
        <Text style={styles.uppercase}> - Rejected</Text>
      </View>
    </>
  );
};
