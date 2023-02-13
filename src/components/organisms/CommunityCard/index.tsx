import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {
  CommunityDetailsModal,
  ProgressChart,
  ViewMembersButton,
} from 'components/molecules';

interface CommunityCardProps {
  icon?: string;
  name: string;
  description: string;
  managerName: string;
  totalMembers: number;
  percentage: number;
}

interface HeaderProps {
  icon?: string;
  name: string;
  managerName: string;
}

interface FooterProps {
  description: string;
  totalMembers: number;
}

const CommunityCardHeader = (props: HeaderProps) => {
  return (
    <View style={styles.header}>
      <View style={styles.thumbnail}>
        <Image
          style={{
            width: 30,
            height: 30,
          }}
          source={{
            uri: props.icon ?? 'https://via.placeholder.com/30.png',
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
        <ViewMembersButton totalMembers={props.totalMembers} />
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

      <ProgressChart title="-Chart goes here-" />

      <CommunityCardFooter
        description={props.description}
        totalMembers={props.totalMembers}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bold_text: {
    fontWeight: 'bold',
  },
  card_template: {
    borderColor: '#c5c5c5',
    borderStyle: 'solid',
    borderWidth: 1,
    flex: 1,
    backgroundColor: '#ddd',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  header: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  thumbnail: {
    paddingRight: 20,
  },

  footer: {
    padding: 10,
  },

  horizontal_layout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
