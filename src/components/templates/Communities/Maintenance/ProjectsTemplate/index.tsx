import {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import {AppContainer, ScreenHeader} from 'components/atoms';
import {ErrorMessage, NoResult, Search, Spinner} from 'components/molecules';
import {ProjectCard} from 'components/organisms';
import {ScreenTitle} from 'constants/navigation';
import {Project} from 'models/business';

import {ProjectsTemplateProps} from './ProjectsTemplate.types';
import styles from './ProjectsTemplate.styles';

export const ProjectsTemplate = ({
  projects = [],
  isLoading,
  isError,
  error,
  refetch,
  onEdit,
  onDelete,
}: ProjectsTemplateProps) => {
  const [displayedProjects, setDisplayedProjects] =
    useState<Project[]>(projects);

  useEffect(() => {
    if (!isLoading) {
      setDisplayedProjects(projects);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const handleSearch = (searchText: string) => {
    const filteredList = projects.filter(
      ({project, project_code}: Project) =>
        project.toLowerCase().indexOf(searchText) !== -1 ||
        project_code.toLowerCase().indexOf(searchText) !== -1
    );
    setDisplayedProjects(() => filteredList);
  };

  return (
    <AppContainer horizontal>
      <ScreenHeader title={ScreenTitle.Projects} />
      {isError ? (
        <ErrorMessage status={error.status} message={error.message} />
      ) : (
        <>
          {projects.length ? (
            <Search onSearch={handleSearch} viewStyle={styles.search} />
          ) : (
            <></>
          )}
          {isLoading ? (
            <Spinner />
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={displayedProjects}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <ProjectCard data={item} onEdit={onEdit} onDelete={onDelete} />
              )}
              ListEmptyComponent={<NoResult message="No Projects Found" />}
              refreshing={isLoading}
              onRefresh={refetch}
            />
          )}
        </>
      )}
    </AppContainer>
  );
};
