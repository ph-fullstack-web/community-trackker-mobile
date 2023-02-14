import {StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import {Icon, Tooltip} from '@rneui/base';

import {NativeStackScreenProp} from '../../../../@types/navigation';
import {FAB, ScreenHeader} from 'components/atoms';
import {ScreenTitle} from 'constants/enums';

type CECDashboardScreenProps = NativeStackScreenProp<'CECDashboard'>;

export const CECDashboardScreen = ({navigation}: CECDashboardScreenProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleCreateCECRequest = () => {
    navigation.navigate('CECCreateRequest');
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <ScreenHeader title={ScreenTitle.CEC} />
        <Tooltip
          skipAndroidStatusBar
          withOverlay={false}
          visible={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          popover={<Text style={styles.tooltipText}>Insert info here!</Text>}
        >
          <Icon name="info" type="material" />
        </Tooltip>
      </View>
      <FAB
        placement="right"
        color="#000048"
        icon={{name: 'add', color: '#fff'}}
        onPress={handleCreateCECRequest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginRight: 4,
  },
  tooltipText: {
    color: 'white',
  },
});
