import {ScrollView, View} from 'react-native';

import {Text} from 'components/atoms';
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

const percentage = 40 / 100;
const fillColor = COLORS.DARK_BLUE;
const layout = 'horizontal';
const cecRequests = {
  approved: 6,
  pending: 9,
  draft: 8,
  rejected: 8,
};

export const DashboardTemplate = (props: DashboardTemplateProps) => {
  const {user, applications} = props;

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
      content: <SkillBadgeContainer user={user} />,
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <UserDetailsCard user={props.user} />
      </View>
      <ScrollView
        style={styles.bottomContainer}
        showsVerticalScrollIndicator={false}
      >
        {sections.map((item, index) => {
          return (
            <View key={index} style={styles.sectionContainer}>
              <Text style={styles.titleSeparator}>{item.title}</Text>
              {item.content}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
