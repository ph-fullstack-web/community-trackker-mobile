import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {AppContainer, ScreenHeader} from 'components/atoms';
import {AppCard, AppCardObject} from 'components/molecules';
import {EmployeeDetailsCard} from 'components/organisms';
import {User} from 'models/business';

import styles from './DashboardTemplate.styles';
import {employeeSet100} from 'mocks/employeeSet100';

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
    <ScrollView keyboardShouldPersistTaps="handled">
      <AppContainer>
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
        <EmployeeDetailsCard
          employee={employeeSet100[0]}
          title={'My Details'}
        />
      </AppContainer>
    </ScrollView>
  );
};
