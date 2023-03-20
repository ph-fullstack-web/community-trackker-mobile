import {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';

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
import {groupArrayByColumn} from 'utils/formatter';

import {SkillsTemplateProps} from './SkillsTemplate.types';
import styles from './SkillsTemplate.styles';

export const SkillsTemplate = ({
  skills = [],
  isLoading,
  isError,
  error,
  isFetching,
  numColumns = 1,
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
          ) : displayedSkills.length ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              {groupArrayByColumn(displayedSkills, numColumns).map(
                (parentItem: Peopleskills[], parentIndex: number) => {
                  return (
                    <View key={parentIndex} style={styles.listContainer}>
                      {parentItem.map(
                        (childItem: Peopleskills, childIndex: number) => {
                          return (
                            <SkillCard
                              numColumns={numColumns}
                              key={childIndex}
                              data={childItem}
                              onEdit={onEdit}
                              onDelete={onDelete}
                            />
                          );
                        }
                      )}
                    </View>
                  );
                }
              )}
            </ScrollView>
          ) : (
            <NoResult message="No Skills Found" />
          )}
        </>
      )}
    </AppContainer>
  );
};
