import {AppContainer, ScreenHeader} from 'components/atoms';
import {ErrorMessage, Spinner} from 'components/molecules';
import {MemberDetailForm} from 'components/organisms';
import {User} from 'models/business';

type ProfileTemplateProp = {
  isLoading: boolean;
  person: User;
  isError: boolean;
  error: any;
  isFetching: boolean;
};

export const ProfileTemplate = ({
  isLoading,
  person,
  isError,
  error,
  isFetching,
}: ProfileTemplateProp) => {
  const dashboardTitle = `Hi, ${person?.full_name}`;

  return (
    <AppContainer keyboardShouldPersistTaps="handled">
      <ScreenHeader title={dashboardTitle} />

      {isError ? (
        <ErrorMessage status={error.status} message={error.message} />
      ) : (
        <>
          {isLoading || isFetching ? (
            <Spinner />
          ) : (
            <MemberDetailForm
              skills={person?.skills}
              email={person?.csv_email}
              cognizantId={person?.cognizantid_id}
            />
          )}
        </>
      )}
    </AppContainer>
  );
};
