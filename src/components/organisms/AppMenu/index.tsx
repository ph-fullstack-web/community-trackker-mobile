import {View} from 'react-native';

import {AppCard, AppCardProps} from 'components/molecules';
import styles from './AppMenu.styles';
import {AppMenuProps} from './AppMenu.types';

export const AppMenu = (props: AppMenuProps) => {
  const {applications, numColumns} = props;
  const groupAppCardBySize = (array: any[], size = numColumns) => {
    return array.reduce(
      (acc: any[], curr: object, index: number) =>
        (index % size === 0
          ? acc.push([curr])
          : acc[acc.length - 1].push(curr)) && acc,
      []
    );
  };

  return groupAppCardBySize(applications).map(
    (parentItem: AppCardProps[], parentIndex: number) => {
      return (
        <View key={parentIndex} style={styles.row}>
          {parentItem.map((childItem: AppCardProps, childIndex: number) => {
            return (
              <AppCard
                key={childIndex}
                title={childItem.title}
                icon={childItem.icon}
                numColumns={numColumns}
                onPress={childItem.onPress}
              />
            );
          })}
        </View>
      );
    }
  );
};

AppMenu.defaultProps = {
  numColumns: 3,
};

export * from './AppMenu.types';
