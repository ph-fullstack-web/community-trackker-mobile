import {Button} from 'components/atoms';
import styles from './HeaderRight.styles';

export const HeaderRight = () => {
  return (
    <Button
      buttonStyle={styles.button}
      onPress={() => console.log('logging out')}
      icon={{
        name: 'logout',
        type: 'material',
      }}
    />
  );
};
