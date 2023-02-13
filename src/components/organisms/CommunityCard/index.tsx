import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ViewMembersButton} from 'components/molecules';

export type CommunityCardProps = {
  communityImage?: string;
  communityName: string;
  communityDescription: string;
  communityManager: string;
  percentage: number;
  membersCount: number;
};

export type CommunityHeaderProps = {
  communityImage?: string;
  communityName: string;
  communityManager: string;
};

export type CommunityCardFooterProps = {
  membersCount: number;
};

export const CommunityCard = (props: CommunityCardProps) => {
  const {
    communityImage,
    communityName,
    communityDescription,
    communityManager,
    percentage,
    membersCount,
  } = props;

  return (
    <View style={styles.card_template}>
      <CommunityCardHeader
        communityImage={communityImage}
        communityName={communityName}
        communityManager={communityManager}
      />
      <CommunityCardChart />
      <CommunityCardFooter membersCount={membersCount} />
    </View>
  );
};

const CommunityCardHeader = (props: CommunityHeaderProps) => {
  const {communityImage, communityName, communityManager} = props;

  return (
    <View style={styles.header}>
      <View style={styles.thumbnail}>
        <Image
          style={{
            width: 30,
            height: 30,
          }}
          source={{
            uri: communityImage ?? 'https://via.placeholder.com/30.png',
          }}
        />
      </View>
      <View>
        <Text style={styles.bold_text}>{communityName}</Text>
        <Text>Manager: {communityManager}</Text>
      </View>
    </View>
  );
};

const CommunityCardChart = () => {
  return (
    <View>
      <Image
        style={{
          width: '100%',
          height: undefined,
          aspectRatio: '16 / 9',
        }}
        source={{
          uri: 'https://via.placeholder.com/400x160.png',
        }}
      />
    </View>
  );
};

const CommunityCardFooter = (props: CommunityCardFooterProps) => {
  return (
    <View style={styles.footer}>
      <ViewMembersButton placeholderNumber={props.membersCount} />
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
});
