import {useState} from 'react';
import {View} from 'react-native';

import {Button, Card, Text} from 'components/atoms';
import {CommunityDetailsModal, MemberProgressChart} from 'components/molecules';
import {COLORS} from 'constants/colors';
import {CommunityWithMembersPercentage} from 'models/business';
import {useThemeProvider} from 'providers';

import styles from './CommunityCard.styles';

interface CommunityCardProps {
  community: CommunityWithMembersPercentage;
  onViewMembers: () => void;
}

export const CommunityCard = (props: CommunityCardProps) => {
  const {
    community: {
      community_name,
      community_description,
      manager_full_name,
      percentage,
    },
  } = props;
  const {mode} = useThemeProvider();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Card
      id="communityCard"
      style={[
        styles.card_container_template,
        styles[`card_container_template_${mode}` as keyof typeof Card],
      ]}
    >
      <View style={styles.card_details_container}>
        <View style={styles.card_title_container}>
          <Text type="title">{community_name}</Text>
          <Button
            id="btn_communityCard"
            icon={{
              name: 'information',
              type: 'material-community',
              size: 15,
              color:
                mode === 'light' ? COLORS.MIDNIGHT_BLUE : COLORS.LIGHT_BLUE,
            }}
            buttonStyle={styles.info_button}
            onPress={() => setModalVisible(!modalVisible)}
          />
          <CommunityDetailsModal
            id="communityDetailsModal"
            communityDescription={community_description}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        </View>
        <Text type="subtitle">Manager: {manager_full_name}</Text>
        <Button
          id="btn_viewMembers"
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
          gradient
          onPress={props.onViewMembers}
        />
      </View>
      <View style={styles.card_chart_container}>
        <MemberProgressChart
          id="memberProgressChart"
          percentage={percentage / 100}
        />
      </View>
    </Card>
  );
};
