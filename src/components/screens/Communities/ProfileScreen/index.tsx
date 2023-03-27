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
      community={data?.community}
      skills={data?.skills}
      isLoading={
        isLoading || isFetching || isCommunitiesLoading || isCommunitiesFetching
      }
      isError={isError}
      error={error}
      communities={communities}
      isCommunitiesError={isCommunitiesError}
      communitiesError={communitiesError}
    />
  );
};
