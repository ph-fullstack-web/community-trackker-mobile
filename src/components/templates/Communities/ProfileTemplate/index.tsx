import {AppContainer, ScreenHeader} from 'components/atoms';
import {ErrorMessage, Spinner} from 'components/molecules';
import {
  AccordionContainer,
  MemberDetailForm,
  SkillsForm,
} from 'components/organisms';

import {ProfileTemplateProp} from './ProfileTemplate.types';

export const ProfileTemplate = ({
  full_name = '',
  csv_email = '',
  cognizantid_id = 0,
  community_id = 0,
  skills = [],
  isLoading,
  isError,
  error,
  isFetching,
  isCommunitiesLoading,
  communities = [],
  isCommunitiesError,
  communitiesError,
  isCommunitiesFetching,
}: ProfileTemplateProp) => {
  const dashboardTitle = full_name && `Hi, ${full_name}`;

  const showSpinner =
    isLoading || isFetching || isCommunitiesLoading || isCommunitiesFetching;

  return (
    <AppContainer horizontal={showSpinner}>
      <ScreenHeader title={dashboardTitle} />

      {isError || isCommunitiesError ? (
        <ErrorMessage
          status={error.status ?? communitiesError.status}
          message={error.message ?? communitiesError.message}
        />
      ) : (
        <>
          {showSpinner ? (
            <Spinner />
          ) : (
            <>
              <AccordionContainer headerLabel={'Information'} expanded={true}>
                <MemberDetailForm
                  csv_email={csv_email}
                  cognizantid_id={cognizantid_id}
                  community_id={community_id}
                  communities={communities}
                />
              </AccordionContainer>
              <AccordionContainer headerLabel={'Skills'} expanded={false}>
                <SkillsForm skills={skills?.map(skill => skill.description)} />
              </AccordionContainer>
            </>
          )}
        </>
      )}
    </AppContainer>
  );
};
