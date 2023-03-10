import {SetStateAction, useState} from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Button} from 'components/atoms';
import {LabeledInput} from 'components/molecules';
import {GRADIENT} from 'constants/colors';
import {useThemeProvider} from 'providers';

import styles from './MemberDetailForm.styles';
import {MemberDetailFormProps} from './MemberDetailForm.types';

export const MemberDetailForm = ({
  csv_email,
  cognizantid_id,
  community_id,
  communities,
}: MemberDetailFormProps) => {
  const {mode} = useThemeProvider();

  const [form, setForm] = useState({
    cognizantid_id,
    community_id,
    csv_email,
    manager_name: '',
    community_name: '',
  });

  // TODO: remove textfields and implement dropdown for community and manager

  const handleUpdateForm = (key: string, value: SetStateAction<string>) => {
    let fields = {[key]: value};
    let community_name: string = form.community_name;
    if (key === 'community_id') {
      const community = communities.find(
        item => item.community_id === community_id
      );
      community_name = community?.community_name ?? '';
      fields = {...fields, community_name};
    }
    setForm({...form, ...fields});
  };

  return (
    <View style={styles.formContainer}>
      <LabeledInput
        label="Cognizant ID"
        placeholder={form.cognizantid_id?.toString() || '00000000'}
        value={form.cognizantid_id?.toString()}
        onValueChange={value => handleUpdateForm('cognizantid_id', value)}
      />

      <LabeledInput
        label="Email"
        placeholder={form.csv_email || 'yourname@cognizant.com'}
        value={form.csv_email}
        onValueChange={value => handleUpdateForm('csv_email', value)}
      />

      <LabeledInput
        label="Community"
        placeholder="Community name"
        value={form.community_name}
        onValueChange={value => handleUpdateForm('community_id', value)}
      />

      <View style={styles.community_button}>
        <Button
          title="View Community Info"
          titleStyle={[
            styles.button_text,
            styles[`button_text_${mode}` as keyof typeof styles],
          ]}
          containerStyle={styles.community_button_container}
          buttonStyle={styles.community_button_style}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: GRADIENT[`${mode}_theme` as keyof typeof GRADIENT],
            start: {x: 0, y: 0.5},
            end: {x: 1, y: 0.5},
          }}
          onPress={() => console.log('HELLO')}
        />
      </View>

      <LabeledInput
        label="Manager"
        placeholder="Juan Dela Cruz"
        value={form.manager_name}
        onValueChange={value => handleUpdateForm('manager_name', value)}
      />
    </View>
  );
};
