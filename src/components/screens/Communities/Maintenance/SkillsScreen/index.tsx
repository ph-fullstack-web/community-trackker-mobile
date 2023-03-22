import {useEffect} from 'react';
import {Alert} from 'react-native';

import {
  useDeletePeopleSkill,
  useGetPeopleSkills,
  useUpdatePeopleSkill,
} from 'api/hooks';
import {SkillsTemplate} from 'components/templates';
import {MaintenanceDrawerScreens} from 'constants/navigation';
import {Peopleskills} from 'models/business';
import {useMutationProvider} from 'providers';

type SkillsScreenProps =
  MaintenanceDrawerScreenProps<MaintenanceDrawerScreens.Skills>;

export const SkillsScreen = ({}: SkillsScreenProps) => {
  const {
    isLoading,
    data: skills,
    isError,
    error,
    isFetching,
    refetch,
  } = useGetPeopleSkills();
  const {
    mutate: updateSkill,
    isSuccess: isUpdateSuccess,
    isError: isUpdateError,
    isLoading: isUpdating,
  } = useUpdatePeopleSkill();
  const {
    mutate: deleteSkill,
    isSuccess: isDeleteSuccess,
    isError: isDeleteError,
    isLoading: isDeleting,
  } = useDeletePeopleSkill();
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
      Alert.alert('Success', 'Successfully updated skill');
    }

    if (isUpdateError) {
      hideLoader();
      Alert.alert('Error', 'Failed to update skill');
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
      Alert.alert('Success', 'Successfully deleted skill');
    }

    if (isDeleteError) {
      hideLoader();
      Alert.alert('Error', 'Failed to delete skill');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDeleting, isDeleteSuccess, isDeleteError]);

  const handleEdit = (data: Peopleskills) => {
    updateSkill(data);
  };

  const handleDelete = ({peopleskills_id, peopleskills_desc}: Peopleskills) => {
    Alert.alert(
      'Delete Skill?',
      `Are you sure you want to delete ${peopleskills_desc}?`,
      [
        {text: 'Cancel'},
        {
          text: 'Confirm',
          onPress: () => deleteSkill(peopleskills_id),
        },
      ]
    );
  };

  return (
    <SkillsTemplate
      skills={skills}
      isLoading={isLoading || isFetching || isMutationOngoing}
      isError={isError}
      error={error}
      onEdit={handleEdit}
      onDelete={handleDelete}
      refetch={refetch}
    />
  );
};
