import {Text} from 'react-native';

type EmployeeCardProps = {
  title: string;
};

export const EmployeeCard = ({title}: EmployeeCardProps) => {
  return <Text>{title}</Text>;
};
