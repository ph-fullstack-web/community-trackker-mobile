import {ProfileTemplate} from 'components/templates';
import {useGetPerson} from 'api/hooks';

export const ProfileScreen = () => {
  const personId: number = 1;

  const {isLoading, data, isError, error, isFetching} = useGetPerson(personId);

  return (
    <ProfileTemplate
      isLoading={isLoading}
      person={data?.data}
      isError={isError}
      error={error}
      isFetching={isFetching}
    />
  );
};
