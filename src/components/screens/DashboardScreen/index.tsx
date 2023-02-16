import {AppCardObject} from 'components/molecules';
import {DashboardTemplate} from 'components/templates';
import {useUserDataProvider} from 'providers/UserDataProvider';

export const DashboardScreen = () => {
  const {user} = useUserDataProvider();

  const applications: AppCardObject[] = [
    {
      title: 'My Community',
      icon: {
        name: 'people',
        type: 'material',
        size: 50,
        color: 'white',
      },
      onPress: () => console.log('My Community'),
    },
    {
      title: 'CEC Tracker',
      icon: {
        name: 'notebook',
        type: 'simple-line-icon',
        size: 50,
        color: 'white',
      },
      onPress: () => console.log('CEC Tracker'),
    },
    {
      title: 'Skill Tree',
      icon: {
        name: 'account-tree',
        type: 'material',
        size: 50,
        color: 'white',
      },
      onPress: () => console.log('Skill Tree'),
    },
  ];

  return (
    <DashboardTemplate applications={applications} numColumns={3} user={user} />
  );
};
