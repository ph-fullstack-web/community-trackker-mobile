import {View} from 'react-native';

import {AppContainer, ScreenHeader} from 'components/atoms';
import {AppCard, AppCardObject} from 'components/molecules';
import {CecCard, EmployeeCard, EmployeeDetailsCard} from 'components/organisms';
import {employeeSet100} from 'mocks/employeeSet100';
import {User} from 'models/business';
import {COLORS} from 'constants/colors';

import styles from './DashboardTemplate.styles';

const percentage = 40 / 100;
const fillColor = COLORS.DARK_BLUE;
const layout = 'horizontal';
const cecRequests = {
  approved: 6,
  pending: 9,
  draft: 8,
  rejected: 8,
};

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
      <CecCard
        percentage={percentage}
        fillColor={fillColor}
        layout={layout}
        cecRequests={cecRequests}
      />
      <EmployeeDetailsCard employee={employeeSet100[0]} title="My Details" />
      <EmployeeCard />
    </AppContainer>
  );
};
