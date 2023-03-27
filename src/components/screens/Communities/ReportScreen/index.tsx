import {useEffect, useState} from 'react';

import {useGetPeopleBySkills, useGetPeopleSkills} from 'api/hooks';
import {ReportTemplate} from 'components/templates';
import {CommunityDrawerScreens} from 'constants/navigation';

type ReportScreenProps =
  CommunityDrawerScreenProps<CommunityDrawerScreens.Report>;

export const ReportScreen = ({}: ReportScreenProps) => {
  const [selectedSkills, setSelectedSkills] = useState<string>('');

  const {isLoading, data = [], isError, error} = useGetPeopleSkills();
  const {
    isLoading: isLoadingPeople,
    isFetching: isFetchingPeople,
    data: people = [],
    isError: isPeopleError,
    error: peopleError,
    refetch: refetchPeople,
  } = useGetPeopleBySkills(selectedSkills);

  useEffect(() => {
    refetchPeople();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSkills]);

  return (
    <ReportTemplate
      skills={data}
      isLoading={isLoading}
      isError={isError}
      error={error}
      setSelectedSkills={setSelectedSkills}
      isLoadingPeople={isLoadingPeople || isFetchingPeople}
      people={people}
      isPeopleError={isPeopleError}
      peopleError={peopleError}
      refetchPeople={refetchPeople}
    />
  );
};
