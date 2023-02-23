import {ScrollView, View} from 'react-native';

import {Text} from 'components/atoms';
import {
  AppCard,
  AppCardObject,
  NoResult,
  SkillBadge,
} from 'components/molecules';
import {UserDetailsCard} from 'components/organisms';
import {PeopleSkill, User} from 'models/business';

import styles from './DashboardTemplate.styles';

type DashboardTemplateProps = {
  user: User | undefined;
  numColumns: number;
  applications: AppCardObject[];
};

type ApplicationsProps = {
  applications: AppCardObject[];
  numColumns?: number;
};

type SkillsProps = {
  user: User | undefined;
};

export type Tab = {
  name: string;
  isActive: boolean;
};

export const DashboardTemplate = (props: DashboardTemplateProps) => {
  const groupAppCardBySize = (array: any[], size = props?.numColumns) => {
    return array.reduce(
      (acc: any[], curr: object, index: number) =>
        (index % size === 0
          ? acc.push([curr])
          : acc[acc.length - 1].push(curr)) && acc,
      []
    );
  };

  const Applications = (props: ApplicationsProps) => {
    return groupAppCardBySize(props?.applications).map(
      (parentItem: AppCardObject[], parentIndex: number) => {
        return (
          <View key={parentIndex} style={styles.row}>
            {parentItem.map((childItem: AppCardObject, childIndex: number) => {
              return (
                <AppCard
                  key={childIndex}
                  title={childItem.title}
                  icon={childItem.icon}
                  numColumns={props?.numColumns}
                  onPress={childItem.onPress}
                />
              );
            })}
          </View>
        );
      }
    );
  };

  const Skills = (props: SkillsProps) => {
    const {user} = props;

    if (user?.skills?.length === 0) {
      return <NoResult message="No Skills Found" />;
    }

    return (
      <View style={styles.row}>
        {user?.skills?.map((item: PeopleSkill, index: number) => {
          return (
            <SkillBadge
              key={index}
              size={75}
              skillId={item.peopleskills_id}
              numColumns={4}
            />
          );
        })}
      </View>
    );
  };

  return (
    <>
      <View style={styles.topContainer}>
        <UserDetailsCard user={props.user} />
      </View>
      <ScrollView style={styles.bottomContainer}>
        <View style={styles.sectionContainer}>
          <Text style={styles.titleSeparator}>APPLICATIONS</Text>
          <Applications applications={props.applications} />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.titleSeparator}>CEC POINTS</Text>
          {/** Insert CEC Progress Chart */}
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.titleSeparator}>SKILLS</Text>
          <Skills user={props.user} />
        </View>
      </ScrollView>
    </>
  );
};
