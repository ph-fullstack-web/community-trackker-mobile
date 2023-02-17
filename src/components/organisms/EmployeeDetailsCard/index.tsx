import {View, Text} from 'react-native';

import {Card} from '../../atoms/Card';
import {Employee} from 'models/business';

import styles from './EmployeeDetailsCard.styles';

type EmployeeDetailsCardProps = {
  employee: Employee | undefined;
  title: string;
};

export const EmployeeDetailsCard = (props: EmployeeDetailsCardProps) => {
  return (
    <Card style={styles.cardContainer}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.valueContainer}>
          <Text>Full Name:</Text>
          <Text style={styles.value}>
            {props?.employee?.lastName}, {props?.employee?.firstName}
          </Text>
        </View>

        <View style={styles.valueContainer}>
          <Text>Email:</Text>
          <Text style={styles.value}>{props?.employee?.csvEmail}</Text>
        </View>

        <View style={styles.valueContainer}>
          <Text>Cognizant ID:</Text>
          <Text style={styles.value}>{props?.employee?.cognizantId}</Text>
        </View>

        <View style={styles.valueContainer}>
          <Text>Title:</Text>
          <Text style={styles.value}>-</Text>
        </View>

        <View style={styles.valueContainer}>
          <Text>Community:</Text>
          <Text style={styles.value}>-</Text>
        </View>
      </View>
    </Card>
  );
};
