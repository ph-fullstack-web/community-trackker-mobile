import {View} from 'react-native';
import {useState} from 'react';
import {ListItem} from '@rneui/base';

import {useThemeProvider} from 'providers';
import {DrawerItem, Icon, Text} from 'components/atoms';
import styles from './DrawerAccordion.styles';
import {COLORS} from 'constants/colors';

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
  const {mode} = useThemeProvider();

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
          <Text
            style={[
              styles.label,
              styles[`label_${mode}` as keyof typeof styles],
            ]}
          >
            {label}
          </Text>
        </View>
      }
      icon={{
        name: 'chevron-down',
        type: 'material-community',
        color: mode === 'light' ? COLORS.MIDNIGHT_BLUE : COLORS.LIGHT_BLUE,
      }}
      isExpanded={expanded}
      onPress={() => setExpanded(prevState => !prevState)}
    >
      {items.map((item, index) => (
        <View key={item.label} style={styles.item}>
          <DrawerItem
            id={`drawerItem${index}`}
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
