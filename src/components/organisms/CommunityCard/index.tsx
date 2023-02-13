import * as React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native'

export function CommunityCard() {
  return(
    <View style={styles.card_template}>
      <CommunityCardHeader />
      <CommunityCardChart />
      <CommunityCardFooter />
    </View>
  )
}

function CommunityCardHeader() {
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

function CommunityCardChart() {
  return(
    <View>
      <Image
        style={{
          width: '100%',
          height: undefined,
          aspectRatio: '16 / 9'
        }}
        source={{
          uri: 'https://via.placeholder.com/400x160.png',
        }}
      />
    </View>
  )
}

function CommunityCardFooter() {
  return(
    <View style={styles.footer}>
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
});
