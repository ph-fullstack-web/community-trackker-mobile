import {View} from 'react-native';

import {AppContainer, Text} from 'components/atoms';
import {ErrorMessage, Spinner} from 'components/molecules';
import {
  AppMenu,
  CecCard,
  SkillBadgeContainer,
  UserDetailsCard,
} from 'components/organisms';
import {COLORS} from 'constants/colors';

import styles from './DashboardTemplate.styles';
import {
  DashboardSection,
  DashboardTemplateProps,
} from './DashboardTemplate.types';

// TODO: to remove once cec related APIs has been integrated
const percentage = 40 / 100;
const fillColor = COLORS.DARK_BLUE;
const layout = 'horizontal';
const cecRequests = {
  approved: 6,
  pending: 9,
  draft: 8,
  rejected: 8,
};

export const DashboardTemplate = ({
  skills = [],
  csv_email = '',
  full_name = '',
  applications,
  isLoading,
  isError,
  error,
}: DashboardTemplateProps) => {
  const sections: DashboardSection[] = [
    {
      title: 'APPLICATIONS',
      content: <AppMenu applications={applications} />,
    },
    {
      title: 'CEC POINTS',
      content: (
        <CecCard
          percentage={percentage}
          fillColor={fillColor}
          layout={layout}
          cecRequests={cecRequests}
        />
      ),
    },
    {
      title: 'SKILLS',
      content: <SkillBadgeContainer skills={skills} />,
    },
  ];

  return (
    <AppContainer style={styles.mainContainer} horizontal={isLoading}>
      {isError ? (
        <ErrorMessage status={error.status} message={error.message} />
      ) : isLoading ? (
        <Spinner />
      ) : (
        <>
          <View style={styles.topContainer}>
            <UserDetailsCard full_name={full_name} csv_email={csv_email} />
          </View>
          <View style={styles.bottomContainer}>
            {sections.map((item, index) => {
              return (
                <View key={index} style={styles.sectionContainer}>
                  <Text style={styles.titleSeparator}>{item.title}</Text>
                  {item.content}
                </View>
              );
            })}
          </View>
        </>
      )}
    </AppContainer>
  );
};
