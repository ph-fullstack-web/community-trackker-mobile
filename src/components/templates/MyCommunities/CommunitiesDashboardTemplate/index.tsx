import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {AppContainer, ScreenHeader} from 'components/atoms';
import {ScreenTitle, StackScreen} from 'constants/navigation';
import {CommunityCard} from 'components/organisms';
import {Community} from 'models/business';
import {RootNativeStackParamList} from '../../../../@types/navigation';

import styles from './CommunitiesDashboardTemplate.styles';

type CommunitiesDashboardTemplateProp = {
  communityList: Community[] | undefined;
};

export const CommunitiesDashboardTemplate = (
  props: CommunitiesDashboardTemplateProp
) => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootNativeStackParamList>>();
  const {communityList} = props;

  const handleViewMembers = (communityId: number) => {
    navigate(StackScreen.MembersStack, {communityId});
  };

  return (
    <AppContainer>
      <ScreenHeader title={ScreenTitle.Communities} />
      <FlatList
        scrollEnabled={false}
        data={communityList}
        contentContainerStyle={styles.listContentContainer}
        keyExtractor={item => item.communityId.toString()}
        renderItem={({item}) => {
          return <CommunityCard onViewMembers={handleViewMembers} {...item} />;
        }}
      />
    </AppContainer>
  );
};
