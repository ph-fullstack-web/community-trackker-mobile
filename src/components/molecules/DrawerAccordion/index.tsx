import {Text, View} from 'react-native';
import {useState} from 'react';
import {Icon, ListItem} from '@rneui/base';
import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types';

import {DrawerItem} from 'components/atoms';
import styles from './DrawerAccordionStyles';

export type DrawerAccordionItem = {
  icon: Icon;
  label: string;
  onPress: (navigation: DrawerNavigationHelpers) => void;
};

export type DrawerAccordionProps = {
  icon: Icon;
  label: string;
  items: DrawerAccordionItem[];
  navigation: DrawerNavigationHelpers;
};

export const DrawerAccordion = ({
  icon,
  items,
  label,
  navigation,
}: DrawerAccordionProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <ListItem.Accordion
      containerStyle={styles.container}
      content={
        <View style={styles.content}>
          <Icon name={icon.name} type={icon.type} style={styles.icon} />
          <Text style={styles.label}>{label}</Text>
        </View>
      }
      isExpanded={expanded}
      onPress={() => setExpanded(prevState => !prevState)}
    >
      {items.map(item => (
        <View key={item.label} style={styles.item}>
          <DrawerItem
            icon={{name: item.icon.name, type: item.icon.type}}
            label={item.label}
            onPress={() => item.onPress(navigation)}
          />
        </View>
      ))}
    </ListItem.Accordion>
  );
};
