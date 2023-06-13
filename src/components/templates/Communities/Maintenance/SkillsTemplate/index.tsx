import {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import {AppContainer, ScreenHeader} from 'components/atoms';
import {ErrorMessage, NoResult, Search, Spinner} from 'components/molecules';
import {SkillCard} from 'components/organisms';
import {ScreenTitle} from 'constants/navigation';
import {Peopleskills} from 'models/business';

import {SkillsTemplateProps} from './SkillsTemplate.types';
import styles from './SkillsTemplate.styles';

export const SkillsTemplate = ({
  skills = [],
  isLoading,
  isError,
  error,
  refetch,
  onEdit,
  onDelete,
}: SkillsTemplateProps) => {
  const [displayedSkills, setDisplayedSkills] =
    useState<Peopleskills[]>(skills);

  useEffect(() => {
    if (!isLoading) {
      setDisplayedSkills(skills);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

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
            <Search
              id="search_skill"
              onSearch={handleSearch}
              viewStyle={styles.search}
            />
          ) : (
            <></>
          )}
          {isLoading ? (
            <Spinner />
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={displayedSkills}
              keyExtractor={item => item.peopleskills_id.toString()}
              renderItem={({item}) => (
                <SkillCard data={item} onEdit={onEdit} onDelete={onDelete} />
              )}
              ListEmptyComponent={<NoResult message="No Skills Found" />}
              refreshing={isLoading}
              onRefresh={refetch}
            />
          )}
        </>
      )}
    </AppContainer>
  );
};
