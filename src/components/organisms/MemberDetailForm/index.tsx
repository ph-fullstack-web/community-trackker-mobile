import {useState} from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {useThemeProvider} from 'providers';
import {SkillSet} from 'models/business';
import {Accordion, Button} from 'components/atoms';
import {LabeledInput} from 'components/molecules';
import {GRADIENT} from 'constants/colors';
import SkillsForm from '../SkillsForm';
import styles from './MemberDetailForm.styles';

type MemberDetailFormProps = {
  skills: SkillSet[];
  email: string;
  cognizantId: number;
};

export const MemberDetailForm = ({
  skills,
  email,
  cognizantId,
}: MemberDetailFormProps) => {
  const {mode} = useThemeProvider();

  const skillsList = skills?.map(skill => skill.description);

  return (
    <>
      <View
        style={[
          styles.accordion_container,
          styles[`accordion_container_${mode}` as keyof typeof undefined],
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
          <DetailForm csvemail={email} cognizantId={cognizantId} />
        </Accordion>
      </View>
      <View
        style={[
          styles.accordion_container,
          styles[`accordion_container_${mode}` as keyof typeof undefined],
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
          <SkillsForm skills={skillsList} />
        </Accordion>
      </View>
    </>
  );
};

type DetailFormProps = {
  csvemail: string;
  cognizantId: number;
};

const DetailForm = ({csvemail, cognizantId}: DetailFormProps) => {
  const {mode} = useThemeProvider();
  const [idNumber, setIdNumber] = useState(cognizantId.toString());
  const [email, setEmail] = useState(csvemail);
  const [community, setCommunity] = useState('');
  const [manager, setManager] = useState('');

  return (
    <View style={styles.formContainer}>
      <LabeledInput
        label="Cognizant ID"
        placeholder={idNumber || '00000000'}
        value={idNumber}
        onValueChange={setIdNumber}
      />

      <LabeledInput
        label="Email"
        placeholder={email || 'yourname@cognizant.com'}
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
        value={manager}
        onValueChange={setManager}
      />
    </View>
  );
};
