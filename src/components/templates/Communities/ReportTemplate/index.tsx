import {FlatList} from 'react-native';
import {AppContainer, ScreenHeader} from 'components/atoms';
import {
  ErrorMessage,
  MultiSearch,
  NoResult,
  Spinner,
} from 'components/molecules';
import {MemberSkillCard} from 'components/organisms';
import {ScreenTitle} from 'constants/navigation';

import {ReportTemplateProp} from './ReportTemplate.types';

export const ReportTemplate = ({
  skills,
  isLoading,
  isError,
  error,
  setSelectedSkills,
  isLoadingPeople,
  people,
  isPeopleError,
  peopleError,
  refetchPeople,
}: ReportTemplateProp) => {
  const handleSearch = (searchText: string) => {
    setSelectedSkills(searchText);
  };

  return (
    <AppContainer horizontal>
      <ScreenHeader title={ScreenTitle.PeopleBySkills} />
      {isError || isPeopleError ? (
        <ErrorMessage
          status={error.status ?? peopleError.status}
          message={error.message ?? peopleError.message}
        />
      ) : isLoading ? (
        <Spinner />
      ) : (
        <>
          <MultiSearch
            id="multiSearch_skill"
            placeholder="Type to select a skill..."
            onSearch={handleSearch}
            dropdownValues={skills}
            labelProp="peopleskills_desc"
            idProp="peopleskills_id"
          />
          {isLoadingPeople ? (
            <Spinner />
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={people}
              renderItem={({item, index}) => (
                <MemberSkillCard key={index} memberDetails={item} />
              )}
              ListEmptyComponent={<NoResult message="No Members Found" />}
              refreshing={isLoadingPeople}
              onRefresh={refetchPeople}
            />
          )}
        </>
      )}
    </AppContainer>
  );
};
