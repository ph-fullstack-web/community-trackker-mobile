import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {CommunityCard} from 'components/organisms';
import {ScreenHeader} from 'components/atoms';

import {ScreenName, ScreenTitle} from 'constants/enums';

import {Community} from 'models/business';

import {useCommunitiesDataProvider} from 'providers/CommunitiesDataProvider';

export const CommunitiesDashboardScreen = () => {
  const {navigate} = useNavigation<any>();
  const {communityList} = useCommunitiesDataProvider();

  console.log(
    '🚀 ~ file: index.tsx:12 ~ CommunitiesDashboardScreen ~ communityList',
    communityList
  );

  const handleViewMembers = (communityId: number) => {
    const communities: Community[] =
      communityList?.filter(
        community => community.communityId === communityId
      ) ?? [];
    navigate(ScreenName.CommunityMembers, {...communities[0]});
  };

  return (
    <>
      <ScreenHeader title={ScreenTitle.Communities} />
      <FlatList
        nestedScrollEnabled
        data={communityList}
        keyExtractor={item => item.communityId.toString()}
        renderItem={({item}) => {
          return <CommunityCard onViewMembers={handleViewMembers} {...item} />;
        }}
      ></FlatList>
    </>
  );
};
