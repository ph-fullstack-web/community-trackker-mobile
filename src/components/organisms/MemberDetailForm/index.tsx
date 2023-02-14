import {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Button, ExpandableView} from 'components/atoms';
import {LabeledInput} from 'components/molecules';
import styles from './MemberDetaileFormStyles';

export const MemberDetailForm = () => {
  return (
    <>
      <SafeAreaView style={{height: '100%', paddingBottom: 60}}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.form_header}>
              <Text>Employee Name</Text>
            </View>
            <DetailForm />
            <ExpandableArea />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const ExpandableArea = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const expandedText = isExpanded ? 'Less' : 'More';

  return (
    <>
      <View style={{marginTop: 10}}>
        <TouchableOpacity
          onPress={() => {
            setIsExpanded(!isExpanded);
          }}
          style={styles.toggle}
        >
          <Text style={styles.toggleText}>View {expandedText}</Text>
        </TouchableOpacity>
        <ExpandableView
          expanded={isExpanded}
          form={<DetailForm />}
          height={300}
          bgcolor="#eee"
        />
      </View>
    </>
  );
};

const DetailForm = () => {
  const [idNumber, setIdNumber] = useState('');
  const [email, setEmail] = useState('');
  const [community, setCommunity] = useState('');
  const [manager, setManager] = useState('');

  return (
    <>
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
        button={
          <View style={styles.community_button}>
            <Button
              title="View Community Info"
              onPress={() => console.log('HELLO')}
            />
          </View>
        }
      />

      <LabeledInput
        label="Manager"
        placeholder="Juan Dela Cruz"
        value={manager}
        onValueChange={setManager}
      />
    </>
  );
};
