import {ButtonWithIcon} from 'components/atoms';

export const HeaderRight = () => {
  return (
    <ButtonWithIcon
      onPress={() => console.log('logging out')}
      name="logout"
      type="material"
    />
  );
};
