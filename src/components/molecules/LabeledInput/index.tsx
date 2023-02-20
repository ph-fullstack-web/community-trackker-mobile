import {Dispatch, SetStateAction} from 'react';
import {View} from 'react-native';

import {Text, TextInput} from 'components/atoms';
import styles from './LabeledInput.styles';

interface LabeledInputProps extends ComponentWithChildren {
  label: string;
  placeholder: string;
  value?: string;
  onValueChange: Dispatch<SetStateAction<string>>;
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
          {props.children}
        </View>
      </View>
    </>
  );
};
