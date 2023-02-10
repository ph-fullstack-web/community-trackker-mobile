import {StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import {Icon, Tooltip} from '@rneui/base';

const Communities = () => {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Communities</Text>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  text: {
    fontSize: 24,
    marginRight: 4,
  },
  tooltipText: {
    color: 'white',
  },
});

export default Communities;
