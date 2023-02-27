import {View} from 'react-native';
import {useState} from 'react';
import {ListItem} from '@rneui/base';
import {useTheme} from '@rneui/themed';

import {DrawerItem, Icon, Text} from 'components/atoms';

import styles from './DrawerAccordion.styles';

export type DrawerAccordionItem<T> = {
  icon: Icon;
  label: string;
  onPress: (navigation: T) => void;
};

export type DrawerAccordionProps<T> = {
  icon: Icon;
  label: string;
  items: DrawerAccordionItem<T>[];
  navigation: T;
};

export const DrawerAccordion = <T,>({
  icon,
  items,
  label,
  navigation,
}: DrawerAccordionProps<T>) => {
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
