import {View} from 'react-native';

import {Card, Text} from 'components/atoms';
import {Employee} from 'models/business';

import styles from './EmployeeDetailsCard.styles';

type EmployeeDetailsCardProps = {
  employee: Employee | undefined;
  title: string;
};

enum CaseType {
  CamelCase = 'CamelCase',
  PascalCase = 'PascalCase',
  SnakeCase = 'SnakeCase',
  KebabCase = 'KebabCase',
}

export const EmployeeDetailsCard = (props: EmployeeDetailsCardProps) => {
  const employeeProps = Object.keys(props?.employee ?? {});

  const generateLabelByKey = (
    key: string,
    caseType: CaseType = CaseType.CamelCase
  ) => {
    const regex = /[A-Z][a-z]+/g;
    const snakeCaseSeparator = '_';
    const kebabCaseSeparator = '-';
    const space = ' ';

    switch (caseType) {
      case CaseType.CamelCase:
        return `${key[0].toUpperCase()}${key.substring(1)}`
          .match(regex)
          ?.join(space);
      case CaseType.PascalCase:
        return key.match(/[A-Z][a-z]+/g)?.join(space);
      case CaseType.SnakeCase:
        return key
          .split(snakeCaseSeparator)
          .map(
            item => `${item[0].toUpperCase()}${item.substring(1).toLowerCase()}`
          )
          .join(space);
      case CaseType.KebabCase:
        return key
          .split(kebabCaseSeparator)
          .map(
            item => `${item[0].toUpperCase()}${item.substring(1).toLowerCase()}`
          )
          .join(space);
    }
  };

  return (
    <Card style={styles.cardContainer}>
      <Text type="title" style={styles.title}>
        {props.title}
      </Text>
      <View style={styles.detailsContainer}>
        {employeeProps.length > 0 &&
          employeeProps.map((item: string) => {
            const value =
              (props?.employee && props?.employee[item as keyof Employee]) ??
              '';
            return (
              <View style={styles.valueContainer} key={item}>
                <Text>{generateLabelByKey(item)}:</Text>
                <Text style={styles.value}>
                  {typeof value === 'boolean' ? (item ? 'Yes' : 'No') : value}
                </Text>
              </View>
            );
          })}
      </View>
    </Card>
  );
};
