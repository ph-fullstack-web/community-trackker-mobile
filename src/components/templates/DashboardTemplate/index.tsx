import {View} from 'react-native';

import {AppContainer, ScreenHeader} from 'components/atoms';
import {AppCard, AppCardObject} from 'components/molecules';
import {EmployeeCard, EmployeeDetailsCard} from 'components/organisms';
import {employeeSet100} from 'mocks/employeeSet100';
import {User} from 'models/business';

import styles from './DashboardTemplate.styles';
import {CecCard} from 'components/organisms/CecCard';

type DashboardTemplateProps = {
  user: User | undefined;
  numColumns: number;
  applications: AppCardObject[];
};

export const DashboardTemplate = (props: DashboardTemplateProps) => {
  const dashboardTitle = `Hi, ${props?.user?.username}`;

  const groupAppCardBySize = (array: any[], size = props?.numColumns) => {
    return array.reduce(
      (acc: any[], curr: object, index: number) =>
        (index % size === 0
          ? acc.push([curr])
          : acc[acc.length - 1].push(curr)) && acc,
      []
    );
  };

  return (
    <AppContainer keyboardShouldPersistTaps="handled">
      <ScreenHeader title={dashboardTitle} />
      {groupAppCardBySize(props?.applications).map(
        (parentItem: AppCardObject[], parentIndex: number) => {
          return (
            <View key={parentIndex} style={styles.appCardContainer}>
              {parentItem.map(
                (childItem: AppCardObject, childIndex: number) => {
                  return (
                    <AppCard
                      key={childIndex}
                      title={childItem.title}
                      icon={childItem.icon}
                      numColumns={props?.numColumns}
                      onPress={childItem.onPress}
                    />
                  );
                }
              )}
            </View>
          );
        }
      )}
      <CecCard />
      <EmployeeDetailsCard employee={employeeSet100[0]} title="My Details" />
      <EmployeeCard />
    </AppContainer>
  );
};
