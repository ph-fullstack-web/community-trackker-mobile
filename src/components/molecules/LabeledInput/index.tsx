import {Dispatch, SetStateAction} from 'react';
import {View} from 'react-native';

import {Text, TextInput, TextInputProps} from 'components/atoms';
import {useThemeProvider} from 'providers';

import styles from './LabeledInput.styles';

type LabeledInputProps = ComponentWithChildren &
  TextInputProps & {
    id: string;
    label: string;
    placeholder: string;
    value?: string;
    onValueChange: Dispatch<SetStateAction<string>>;
  };

export const LabeledInput = (props: LabeledInputProps) => {
  const {mode} = useThemeProvider();

  return (
    <View style={[styles.fieldSet, styles.horizontal_layout]} id={props.id}>
      <View style={styles.label_width}>
        <Text style={styles.bold_text} type="default">
          {props.label}
        </Text>
      </View>
      <View style={styles.textinput_width}>
        <TextInput
          {...props}
          placeholder={props.placeholder}
          onChangeText={props.onValueChange}
          value={props.value}
          style={[
            styles.textfield,
            styles[`textfield_${mode}` as keyof typeof styles],
          ]}
        />
        {props.children}
      </View>
    </View>
  );
};
