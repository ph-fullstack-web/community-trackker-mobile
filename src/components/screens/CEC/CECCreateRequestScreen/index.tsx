import {StyleSheet, Text, View} from 'react-native';

import {NativeStackScreenProp} from '../../../../@types/navigation';
import {FAB} from 'components/atoms';

type CECCreateRequestScreenProps = NativeStackScreenProp<'CECCreateRequest'>;

export const CECCreateRequestScreen = ({
  navigation,
}: CECCreateRequestScreenProps) => {
  const handleBackCECRequest = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>CREATE CEC</Text>
      <FAB
        placement="left"
        color="#6AA2DC"
        icon={{name: 'arrow-back', color: '#fff'}}
        onPress={handleBackCECRequest}
      />
      <FAB
        placement="right"
        color="#000048"
        icon={{name: 'save', color: '#fff'}}
        onPress={handleBackCECRequest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
