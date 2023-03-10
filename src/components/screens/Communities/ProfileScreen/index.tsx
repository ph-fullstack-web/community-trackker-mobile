import {useGetCommunities, useGetPerson} from 'api/hooks';
import {ProfileTemplate} from 'components/templates';

export const ProfileScreen = () => {
  const personId: number = 1; //TODO: to remove once login module is implemented

  const {isLoading, data, isError, error, isFetching} = useGetPerson(personId);
  const {
    isLoading: isCommunitiesLoading,
    data: communities,
    isError: isCommunitiesError,
    error: communitiesError,
    isFetching: isCommunitiesFetching,
  } = useGetCommunities();

  return (
    <ProfileTemplate
      full_name={data?.full_name}
      csv_email={data?.csv_email}
      cognizantid_id={data?.cognizantid_id}
      community_id={data?.community_id}
      skills={data?.skills}
      isLoading={isLoading}
      isError={isError}
      error={error}
      isFetching={isFetching}
      communities={communities}
      isCommunitiesLoading={isCommunitiesLoading}
      isCommunitiesError={isCommunitiesError}
      communitiesError={communitiesError}
      isCommunitiesFetching={isCommunitiesFetching}
    />
  );
};
