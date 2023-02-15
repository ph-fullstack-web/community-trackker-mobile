import {StyleSheet, Text, View} from 'react-native';

type ScreenHeaderProps = {
  title: string;
  subtitle?: string;
};

export const ScreenHeader = (props: ScreenHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.subtitle && <Text style={styles.subtitle}>{props.subtitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    marginRight: 4,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    marginRight: 4,
  },
});
