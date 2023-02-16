import {Image, Text, View} from 'react-native';

import {
  CommunityDetailsModal,
  ViewMembersButton,
  MemberProgressChart,
} from 'components/molecules';
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

interface HeaderProps {
  icon?: string;
  name: string;
  managerName: string;
}

interface FooterProps {
  description: string;
  totalMembers: number;
  onViewMembers: () => void;
}

const CommunityCardHeader = (props: HeaderProps) => {
  const defaultCommunityIcon = 'https://via.placeholder.com/30.png';

  return (
    <View style={styles.header}>
      <View style={styles.thumbnail}>
        <Image
          style={styles.thumbanil_size}
          source={{
            uri: props.icon ?? defaultCommunityIcon,
          }}
        />
      </View>
      <View>
        <Text style={styles.bold_text}>{props.name}</Text>
        <Text>Manager: {props.managerName}</Text>
      </View>
    </View>
  );
};

const CommunityCardFooter = (props: FooterProps) => {
  return (
    <View style={styles.footer}>
      <View style={styles.horizontal_layout}>
        <ViewMembersButton
          totalMembers={props.totalMembers}
          onPress={props.onViewMembers}
        />
        <CommunityDetailsModal communityDescription={props.description} />
      </View>
    </View>
  );
};

export const CommunityCard = (props: CommunityCardProps) => {
  return (
    <View style={styles.card_template}>
      <CommunityCardHeader
        icon={props.icon}
        name={props.name}
        managerName={props.managerName}
      />

      <MemberProgressChart percentage={Math.random()} />

      <CommunityCardFooter
        description={props.description}
        totalMembers={props.totalMembers}
        onViewMembers={() => props.onViewMembers(props.communityId)}
      />
    </View>
  );
};
