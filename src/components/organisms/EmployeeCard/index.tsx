import {Text} from 'components/atoms';

type EmployeeCardProps = {
  title: string;
};

export const EmployeeCard = ({title}: EmployeeCardProps) => {
  return <Text>{title}</Text>;
};
