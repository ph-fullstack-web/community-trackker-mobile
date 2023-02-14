import { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "components/atoms";
import { LabeledInput } from "components/molecules";

export const MemberDetailForm = () => {
  return (
    <>
      <SafeAreaView style={{height: '100%', paddingBottom: 60}}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.form_header}>
              <Text>Employee Name</Text>
            </View>
            <View style={{ paddingVertical: 10 }}>
              <DetailForm />
              <View>
                <DetailForm />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

    </>
  )
}

const DetailForm = () => {
  const [idNumber, setIdNumber] = useState('');
  const [email, setEmail] = useState('');
  const [community, setCommunity] = useState('');
  const [manager, setManager] = useState('');

  return (
    <>
      <LabeledInput
        label="Cognizant ID"
        placeholder="00000000"
        value={idNumber}
        onValueChange={setIdNumber}
      />

      <LabeledInput
        label="Email"
        placeholder="yourname@cognizant.com"
        value={email}
        onValueChange={setEmail}
      />

      <LabeledInput
        label="Community"
        placeholder="Community name"
        value={community}
        onValueChange={setCommunity}
        button={
          <View style={styles.community_button}>
            <Button
              title='View Community Info'
              onPress={() => console.log('HELLO')}
            />
          </View>
        }
      />

      <LabeledInput
        label="Manager"
        placeholder="Juan Dela Cruz"
        value={manager}
        onValueChange={setManager}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10
  },
  form_header: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#ddd'
  },
  community_button: {
    marginTop: 3
  }
})