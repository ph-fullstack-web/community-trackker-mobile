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
  community = {
    community_id: 0,
    community_name: '',
    community_description: '',
    community_manager: '',
    is_active: false,
    manager: {
      id: 0,
      cognizant_id: '',
      name: '',
      email: '',
      active: false,
    },
  },
  skills = [],
  isLoading,
  isError,
  error,
  communities = [],
  isCommunitiesError,
  communitiesError,
}: ProfileTemplateProp) => {
  const dashboardTitle = full_name && `Hi, ${full_name}`;

  return (
    <AppContainer horizontal={isLoading}>
      <ScreenHeader title={dashboardTitle} />

      {isError || isCommunitiesError ? (
        <ErrorMessage
          status={error.status ?? communitiesError.status}
          message={error.message ?? communitiesError.message}
        />
      ) : (
        <>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <AccordionContainer headerLabel={'Information'} expanded={true}>
                <MemberDetailForm
                  csv_email={csv_email}
                  cognizantid_id={cognizantid_id}
                  community={community}
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
