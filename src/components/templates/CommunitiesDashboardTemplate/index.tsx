import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {CommunityCard} from 'components/organisms';
import {AppContainer, ScreenHeader} from 'components/atoms';
import {ScreenTitle, StackScreenName} from 'constants/enums';
import {RootNativeStackParamList} from '../../../@types/navigation';
import {Community} from 'models/business';

type HeaderLeftStackNavigationProp =
  NativeStackNavigationProp<RootNativeStackParamList>;

type CommunitiesDashboardTemplateProp = {
  communityList: Community[] | undefined;
};

export const CommunitiesDashboardTemplate = (
  props: CommunitiesDashboardTemplateProp
) => {
  const {navigate} = useNavigation<HeaderLeftStackNavigationProp>();
  const {communityList} = props;

  const handleViewMembers = (communityId: number) => {
    navigate(StackScreenName.CommunityMembersStack, {communityId});
  };

  return (
    <AppContainer>
      <ScreenHeader title={ScreenTitle.Communities} />
      <FlatList
        nestedScrollEnabled
        data={communityList}
        keyExtractor={item => item.communityId.toString()}
        renderItem={({item}) => {
          return <CommunityCard onViewMembers={handleViewMembers} {...item} />;
        }}
      />
    </AppContainer>
  );
};
