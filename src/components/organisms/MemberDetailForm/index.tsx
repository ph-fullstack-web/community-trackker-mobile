import { useState } from "react";
import {StyleSheet,Text,View} from "react-native";

import { TextInput } from "components/atoms";

export const MemberDetailForm = () => {
  const [sampleText, setSampleText] = useState('');

  return (
    <>
      <View style={styles.fieldSet}>
        <Text style={styles.bold_text}>Label</Text>
        <TextInput
          placeholder='Sample Text'
          onChangeText={setSampleText}
          value={sampleText}
          style={styles.textfield}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  bold_text: {
    fontWeight: '500'
  },
  fieldSet: {
    padding: 10,
  },
  textfield: {
    borderWidth: 1,
    borderColor: "#bbb",
    borderStyle: "solid",
    paddingHorizontal: 9,
    paddingVertical: 3,
    marginTop: 10
  }
})