import { ReactNode, Dispatch, SetStateAction } from "react";
import { Text,View} from "react-native";

import { TextInput } from "components/atoms";

import styles from "./LabeledInputStyles";

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
