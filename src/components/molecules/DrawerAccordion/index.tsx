import {View} from 'react-native';
import {useState} from 'react';
import {ListItem} from '@rneui/base';
import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types';
import {useTheme} from '@rneui/themed';

import {DrawerItem, Icon, Text} from 'components/atoms';
import styles from './DrawerAccordion.styles';

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
  const {theme} = useTheme();

  return (
    <ListItem.Accordion
      containerStyle={styles.container}
      content={
        <View style={styles.content}>
          <Icon
            name={icon.name}
            type={icon.type}
            color={icon.color}
            style={styles.icon}
          />
          <Text style={[styles.label, {color: theme.colors.blue2}]}>
            {label}
          </Text>
        </View>
      }
      isExpanded={expanded}
      onPress={() => setExpanded(prevState => !prevState)}
    >
      {items.map(item => (
        <View key={item.label} style={styles.item}>
          <DrawerItem
            icon={{
              name: item.icon.name,
              type: item.icon.type,
              color: item.icon.color,
            }}
            label={item.label}
            onPress={() => item.onPress(navigation)}
          />
        </View>
      ))}
    </ListItem.Accordion>
  );
};
