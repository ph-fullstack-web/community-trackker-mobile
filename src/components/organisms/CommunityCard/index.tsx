import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {CommunityDetailsModal, MemberProgressChart} from 'components/molecules';
import {Button} from 'components/atoms';
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
  console.log(props.percentage);
  return (
    <View style={styles.card_container_template}>
      <View style={styles.card_details_container}>
        <View style={styles.card_title_container}>
          <Text style={styles.card_title}>{props.name}</Text>
          <CommunityDetailsModal communityDescription={props.description} />
        </View>
        <Text>Manager: {props.managerName}</Text>
        <Button
          title="View Members"
          titleStyle={styles.buttonText}
          buttonStyle={styles.button}
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
        <MemberProgressChart percentage={props.percentage} />
      </View>
    </View>
  );
};
