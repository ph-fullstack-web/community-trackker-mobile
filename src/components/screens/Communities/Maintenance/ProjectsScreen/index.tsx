import {useEffect} from 'react';
import {Alert} from 'react-native';

import {useDeleteProject, useGetProjects, useUpdateProject} from 'api/hooks';
import {ProjectsTemplate} from 'components/templates';
import {MaintenanceDrawerScreens} from 'constants/navigation';
import {Project} from 'models/business';
import {UpdateProjectRequest} from 'models/requests';
import {useMutationProvider} from 'providers';

type ProjectsScreenProps =
  MaintenanceDrawerScreenProps<MaintenanceDrawerScreens.Projects>;

export const ProjectsScreen = ({}: ProjectsScreenProps) => {
  const {
    isLoading,
    data: projects,
    isError,
    error,
    isFetching,
    refetch,
  } = useGetProjects();
  const {
    mutate: updateProject,
    isSuccess: isUpdateSuccess,
    isError: isUpdateError,
    isLoading: isUpdating,
  } = useUpdateProject();
  const {
    mutate: deleteProject,
    isSuccess: isDeleteSuccess,
    isError: isDeleteError,
    isLoading: isDeleting,
  } = useDeleteProject();
  const {
    isLoading: isMutationOngoing,
    showLoader,
    hideLoader,
  } = useMutationProvider();

  useEffect(() => {
    if (isUpdating) {
      showLoader();
    }

    if (isUpdateSuccess) {
      hideLoader();
      refetch();
      Alert.alert('Success', 'Successfully updated project');
    }

    if (isUpdateError) {
      hideLoader();
      Alert.alert('Error', 'Failed to update project');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdating, isUpdateSuccess, isUpdateError]);

  useEffect(() => {
    if (isDeleting) {
      showLoader();
    }

    if (isDeleteSuccess) {
      hideLoader();
      refetch();
      Alert.alert('Success', 'Successfully deleted project');
    }

    if (isDeleteError) {
      hideLoader();
      Alert.alert('Error', 'Failed to delete project');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDeleting, isDeleteSuccess, isDeleteError]);

  const handleEdit = (data: UpdateProjectRequest) => {
    updateProject(data);
  };

  const handleDelete = ({id, project}: Project) => {
    Alert.alert(
      'Delete Skill?',
      `Are you sure you want to delete ${project}?`,
      [
        {text: 'Cancel'},
        {
          text: 'Confirm',
          onPress: () => deleteProject(id),
        },
      ]
    );
  };
  return (
    <ProjectsTemplate
      projects={projects}
      isLoading={isLoading || isFetching || isMutationOngoing}
      isError={isError}
      error={error}
      onEdit={handleEdit}
      onDelete={handleDelete}
      refetch={refetch}
    />
  );
};
