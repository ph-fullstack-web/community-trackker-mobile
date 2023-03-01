import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {useThemeProvider} from 'providers/ThemeProvider';
import {CommunityDetailsModal, MemberProgressChart} from 'components/molecules';
import {Button, Card, Text} from 'components/atoms';
import {GRADIENT} from 'constants/colors';
import styles from './CommunityCard.styles';

interface CommunityCardProps {
  icon?: string;
  communityId: number;
  name: string;
  description: string;
  managerName: string;
  totalMembers: number;
  percentage: number;
  onViewMembers: () => void;
}

export const CommunityCard = (props: CommunityCardProps) => {
  const {mode} = useThemeProvider();

  return (
    <Card
      style={[
        styles.card_container_template,
        styles[`card_container_template_${mode}` as keyof typeof Card],
      ]}
    >
      <View style={styles.card_details_container}>
        <View style={styles.card_title_container}>
          <Text type="title">{props.name}</Text>
          <CommunityDetailsModal communityDescription={props.description} />
        </View>
        <Text type="subtitle">Manager: {props.managerName}</Text>
        <Button
          title="View Members"
          titleStyle={[
            styles.buttonText,
            styles[`buttonText_${mode}` as keyof typeof styles],
          ]}
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
          onPress={props.onViewMembers}
        />
      </View>
      <View style={styles.card_chart_container}>
        <MemberProgressChart percentage={props.percentage / 100} />
      </View>
    </Card>
  );
};
