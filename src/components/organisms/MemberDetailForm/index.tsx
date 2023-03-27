import {SetStateAction, useEffect, useState} from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Button} from 'components/atoms';
import {CommunityDetailsModal, LabeledInput} from 'components/molecules';
import {GRADIENT} from 'constants/colors';
import {useThemeProvider} from 'providers';

import styles from './MemberDetailForm.styles';
import {MemberDetailFormProps} from './MemberDetailForm.types';

export const MemberDetailForm = ({
  csv_email,
  cognizantid_id,
  community,
}: MemberDetailFormProps) => {
  const {mode} = useThemeProvider();

  const [form, setForm] = useState({
    cognizantid_id,
    csv_email,
    community_name: community.community_name,
    manager_name: community.manager.name,
  });
  const [modalVisible, setModalVisible] = useState(false);

  // TODO: remove textfields and implement dropdown for community and manager

  useEffect(() => {
    setForm({
      cognizantid_id,
      csv_email,
      community_name: community.community_name,
      manager_name: community.manager.name,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [community]);

  const handleUpdateForm = (key: string, value: SetStateAction<string>) => {
    setForm({...form, [key]: value});
  };

  return (
    <View style={styles.formContainer}>
      <LabeledInput
        label="Cognizant ID"
        placeholder={form.cognizantid_id?.toString() || '00000000'}
        value={form.cognizantid_id?.toString()}
        onValueChange={value => handleUpdateForm('cognizantid_id', value)}
        editable={false}
      />

      <LabeledInput
        label="Email"
        placeholder={form.csv_email || 'yourname@cognizant.com'}
        value={form.csv_email}
        onValueChange={value => handleUpdateForm('csv_email', value)}
        editable={false}
      />

      <LabeledInput
        label="Community"
        placeholder="Community name"
        value={form.community_name}
        onValueChange={value => handleUpdateForm('community_id', value)}
        editable={false}
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
          onPress={() => setModalVisible(!modalVisible)}
        />
      </View>

      <LabeledInput
        label="Manager"
        placeholder="Juan Dela Cruz"
        value={form.manager_name}
        onValueChange={value => handleUpdateForm('manager_name', value)}
        editable={false}
      />
      <CommunityDetailsModal
        communityDescription={community.community_description}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};
