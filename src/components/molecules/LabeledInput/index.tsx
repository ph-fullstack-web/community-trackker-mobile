import { ReactNode, Dispatch, SetStateAction } from "react";
import {StyleSheet,Text,View} from "react-native";

import { TextInput } from "components/atoms";

interface LabeledInputProps {
  label: string;
  placeholder: string;
  value?: string;
  onValueChange: Dispatch<SetStateAction<string>>;
  button?: ReactNode;
}

export const LabeledInput = (props: LabeledInputProps) => {
  return (
    <>
      <View style={[styles.fieldSet, styles.horizontal_layout]}>
        <View style={styles.label_width}>
          <Text style={styles.bold_text}>{props.label}</Text>
        </View>
        <View style={styles.textinput_width}>
          <TextInput
            placeholder={props.placeholder}
            onChangeText={props.onValueChange}
            value={props.value}
            style={styles.textfield}
          />
          {props.button}
        </View>
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
  horizontal_layout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textfield: {
    borderWidth: 1,
    borderColor: "#bbb",
    borderStyle: "solid",
    paddingHorizontal: 9,
    paddingVertical: 3,
    marginTop: 10
  },
  label_width: {
    width: '30%',
    marginTop: 5
  },
  textinput_width: {
    width: '70%'
  }
})