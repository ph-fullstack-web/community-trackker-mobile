import {useGetPeopleSkills} from 'api/hooks';
import {SkillsTemplate} from 'components/templates';
import {MaintenanceDrawerScreens} from 'constants/navigation';

type SkillsScreenProps =
  MaintenanceDrawerScreenProps<MaintenanceDrawerScreens.Skills>;

export const SkillsScreen = ({}: SkillsScreenProps) => {
  const {isLoading, data, isError, error, isFetching} = useGetPeopleSkills();

  const handleEdit = (skillId: number) => {
    //TODO: add mutation
    console.log('🚀 ~ file: index.tsx:12 ~ handleEdit ~ skillId:', skillId);
  };

  const handleDelete = (skillId: number) => {
    //TODO: add mutation
    console.log('🚀 ~ file: index.tsx:17 ~ handleDelete ~ skillId:', skillId);
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
    />
  );
};
