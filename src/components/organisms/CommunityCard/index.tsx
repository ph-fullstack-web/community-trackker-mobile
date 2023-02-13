import * as React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  CommunityDetailsModal,
  ProgressChart,
  ViewMembersButton,
} from 'components/molecules';

export const CommunityCard = () => {
  return(
    <View style={styles.card_template}>
      <CommunityCardHeader />

      <ProgressChart title='-Chart goes here-' />
      
      <CommunityCardFooter />
    </View>
  )
}

const CommunityCardHeader = () => {
  return(
    <View style={styles.header}>
      <View style={styles.thumbnail}>
        <Image
          style={{
            width: 30,
            height: 30,
          }}
          source={{
            uri: 'https://via.placeholder.com/30.png',
          }}
        />
      </View>
      <View>
          <Text style={styles.bold_text}>Community Name</Text>
          <Text>Manager: FirstName LastName</Text>
      </View>
    </View>
  )
}

const CommunityCardFooter = () => {
  return(
    <View style={styles.footer}>
      <View style={styles.horizontal_layout} >
        <ViewMembersButton />
        <CommunityDetailsModal />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bold_text: {
    fontWeight: 'bold'
  },
  card_template: {
    borderColor: '#c5c5c5',
    borderStyle: 'solid',
    borderWidth: 1,

    backgroundColor: '#ddd',
    margin: 10,
    shadowColor: "#000",
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
    alignItems: 'center'
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
    justifyContent: 'space-between'
  },
});
