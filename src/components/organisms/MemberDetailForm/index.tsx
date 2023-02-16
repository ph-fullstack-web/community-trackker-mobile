import {useState} from 'react';
import {ScrollView, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Accordion, Button} from 'components/atoms';
import {LabeledInput} from 'components/molecules';
import {COLORS} from 'constants/colors';

import styles from './MemberDetailForm.styles';

export const MemberDetailForm = () => {
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.accordion_container}>
          <Accordion
            headerLabel="Employee Name"
            headerStyle={styles.form_header}
            expanded={true}
          >
            <DetailForm />
          </Accordion>
        </View>
        <View style={styles.accordion_container}>
          <Accordion
            headerLabel="Skills"
            headerStyle={styles.form_header}
            expanded={false}
          >
            <DetailForm />
          </Accordion>
        </View>
      </ScrollView>
    </>
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
        <View style={styles.community_button_empty_container}></View>
        <View style={styles.community_button_view_container}>
          <Button
            title="View Community Info"
            titleStyle={styles.button_text}
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
