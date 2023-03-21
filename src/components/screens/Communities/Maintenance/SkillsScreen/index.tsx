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

type SkillsScreenProps =
  MaintenanceDrawerScreenProps<MaintenanceDrawerScreens.Skills>;

export const SkillsScreen = ({}: SkillsScreenProps) => {
  const {isLoading, data, isError, error, isFetching, refetch} =
    useGetPeopleSkills();
  const {
    mutate: updateSkill,
    isSuccess: isUpdateSuccess,
    isError: isUpdateError,
  } = useUpdatePeopleSkill();
  const {
    mutate: deleteSkill,
    isSuccess: isDeleteSuccess,
    isError: isDeleteError,
  } = useDeletePeopleSkill();

  useEffect(() => {
    if (isUpdateSuccess) {
      refetch();
      Alert.alert('Sucess', 'Successfully updated skill');
    }
    if (isUpdateError) {
      Alert.alert('Error', 'Failed to update skill');
    }
    if (isDeleteSuccess) {
      refetch();
      Alert.alert('Sucess', 'Successfully deleted skill');
    }
    if (isDeleteError) {
      Alert.alert('Error', 'Failed to delete skill');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdateSuccess, isUpdateError, isDeleteSuccess, isDeleteError]);

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
      skills={data}
      isLoading={isLoading}
      isError={isError}
      error={error}
      isFetching={isFetching}
      onEdit={handleEdit}
      onDelete={handleDelete}
      refetch={refetch}
    />
  );
};
