import { ReactNode, useEffect, useState } from "react";
import { Animated, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "components/atoms";
import { LabeledInput } from "components/molecules";

export const MemberDetailForm = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const expandedText = isExpanded ? 'Less' : 'More' 

  return (
    <>
      <SafeAreaView style={{height: '100%', paddingBottom: 60}}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.form_header}>
              <Text>Employee Name</Text>
            </View>
            <View>
              <DetailForm />
              <View style={{ marginTop: 10 }}>

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
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

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
              title='View Community Info'
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
  )
}

interface ExpandableViewProps {
 expanded: boolean
 form: ReactNode
}

const ExpandableView = (props: ExpandableViewProps) => {
  const [height] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(height, {
      toValue: props.expanded ? 300 : 0,
      duration: 150,
      useNativeDriver: false
    }).start();
  }, [props.expanded, height]);

  return (
    <Animated.View
      style={{ height, backgroundColor: "#eee" }}
    >
      {props.form}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10
  },
  form_header: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#ddd'
  },
  community_button: {
    marginTop: 3
  },
  toggle: {
    height: 30,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center"
  },
  toggleText: {
    color: "#fff"
  }
})