import {useState} from 'react';
import {View} from 'react-native';

import {Accordion, Button} from 'components/atoms';
import {LabeledInput} from 'components/molecules';
import SkillsForm from '../SkillsForm';

import styles from './MemberDetailForm.styles';

export const MemberDetailForm = () => {
  return (
    <View style={styles.accordion_container}>
      <Accordion
        headerLabel="Employee Name"
        headerStyle={styles.form_header}
        expanded={true}
      >
        <DetailForm />
      </Accordion>
      <Accordion
        headerLabel="Skills"
        headerStyle={styles.form_header}
        expanded={false}
      >
        <SkillsForm skills={['React', 'NodeJS', 'Angular']} />
      </Accordion>
    </View>
  );
};

const DetailForm = () => {
  const [idNumber, setIdNumber] = useState('');
  const [email, setEmail] = useState('');
  const [community, setCommunity] = useState('');
  const [manager, setManager] = useState('');

  return (
    <View style={styles.formContainer}>
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
      />

      <View style={styles.community_button}>
        <Button
          title="View Community Info"
          onPress={() => console.log('HELLO')}
        />
      </View>

      <LabeledInput
        label="Manager"
        placeholder="Juan Dela Cruz"
        value={manager}
        onValueChange={setManager}
      />
    </View>
  );
};
