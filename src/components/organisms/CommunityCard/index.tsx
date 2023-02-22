import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from '@rneui/themed';

import {CommunityDetailsModal, MemberProgressChart} from 'components/molecules';
import {Button, Card, Text} from 'components/atoms';
import {COLORS} from 'constants/colors';
import styles from './CommunityCard.styles';

interface CommunityCardProps {
  icon?: string;
  communityId: number;
  name: string;
  description: string;
  managerName: string;
  totalMembers: number;
  percentage: number;
  onViewMembers: (communityId: number) => void;
}

export const CommunityCard = (props: CommunityCardProps) => {
  const {theme} = useTheme();
  return (
    <Card
      style={[
        styles.card_container_template,
        {backgroundColor: theme.colors.grey4},
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
          titleStyle={styles.buttonText}
          buttonStyle={[styles.button, {backgroundColor: theme.colors.primary}]}
          containerStyle={styles.buttonContainer}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: [COLORS.DARK_PLUM, COLORS.DARK_BLUE, COLORS.MEDIUM_BLUE],
            start: {x: 0, y: 0.5},
            end: {x: 1, y: 0.5},
          }}
          onPress={() => props.onViewMembers(props.communityId)}
        />
      </View>
      <View style={styles.card_chart_container}>
        <MemberProgressChart percentage={props.percentage / 100} />
      </View>
    </Card>
  );
};
