import {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import {AppContainer, ScreenHeader} from 'components/atoms';
import {
  ErrorMessage,
  NoResult,
  Search,
  SkillCard,
  Spinner,
} from 'components/molecules';
import {ScreenTitle} from 'constants/navigation';
import {Peopleskills} from 'models/business';

import {SkillsTemplateProps} from './SkillsTemplate.types';
import styles from './SkillsTemplate.styles';

export const SkillsTemplate = ({
  skills = [],
  isLoading,
  isError,
  error,
  isFetching,
  refetch,
  onEdit,
  onDelete,
}: SkillsTemplateProps) => {
  const [displayedSkills, setDisplayedSkills] =
    useState<Peopleskills[]>(skills);

  useEffect(() => {
    if (!isFetching) {
      setDisplayedSkills(skills);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

  const handleSearch = (searchText: string) => {
    const filteredList = skills.filter(
      skill => skill.peopleskills_desc.toLowerCase().indexOf(searchText) !== -1
    );
    setDisplayedSkills(() => filteredList);
  };

  return (
    <AppContainer horizontal>
      <ScreenHeader title={ScreenTitle.Skills} />
      {isError ? (
        <ErrorMessage status={error.status} message={error.message} />
      ) : (
        <>
          {skills.length ? (
            <Search onSearch={handleSearch} viewStyle={styles.search} />
          ) : (
            <></>
          )}
          {isLoading || isFetching ? (
            <Spinner />
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={displayedSkills}
              keyExtractor={item => item.peopleskills_id.toString()}
              renderItem={({item, index}) => (
                <SkillCard
                  key={index}
                  data={item}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              )}
              ListEmptyComponent={<NoResult message="No Skills Found" />}
              refreshing={isFetching}
              onRefresh={refetch}
            />
          )}
        </>
      )}
    </AppContainer>
  );
};
