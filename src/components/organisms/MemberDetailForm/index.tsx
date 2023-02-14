import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "components/atoms";
import { LabeledInput } from "components/molecules";

export const MemberDetailForm = () => {
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
  community_button: {
    marginTop: 3
  }
})