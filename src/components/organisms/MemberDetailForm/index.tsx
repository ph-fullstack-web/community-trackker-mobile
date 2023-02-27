import {useState} from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {useThemeProvider} from 'providers/ThemeProvider';
import {Accordion, Button} from 'components/atoms';
import {LabeledInput} from 'components/molecules';
import {COLORS} from 'constants/colors';
import SkillsForm from '../SkillsForm';

import styles from './MemberDetailForm.styles';

export const MemberDetailForm = () => {
  const {mode} = useThemeProvider();

  return (
    <>
      <View
        style={[
          styles.accordion_container,
          styles[`accordion_container_${mode}` as keyof typeof styles],
        ]}
      >
        <Accordion
          headerLabel="Information"
          headerStyle={[
            styles.form_header,
            styles[`form_header_${mode}` as keyof typeof styles],
          ]}
          expanded={true}
        >
          <DetailForm />
        </Accordion>
      </View>
      <View
        style={[
          styles.accordion_container,
          styles[`accordion_container_${mode}` as keyof typeof styles],
        ]}
      >
        <Accordion
          headerLabel="Skills"
          headerStyle={[
            styles.form_header,
            styles[`form_header_${mode}` as keyof typeof styles],
          ]}
          expanded={false}
        >
          <SkillsForm skills={['Angular', 'ReactJS', 'TypeScript']} />
        </Accordion>
      </View>
    </>
  );
};

const DetailForm = () => {
  const {mode} = useThemeProvider();
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
          titleStyle={[
            styles.button_text,
            styles[`button_text_${mode}` as keyof typeof styles],
          ]}
          containerStyle={styles.community_button_container}
          buttonStyle={styles.community_button_style}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: [COLORS.DARK_PLUM, COLORS.DARK_BLUE, COLORS.MEDIUM_BLUE],
            start: {x: 0, y: 0.5},
            end: {x: 1, y: 0.5},
          }}
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
