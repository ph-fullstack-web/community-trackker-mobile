import {Switch as DefaultSwitch, SwitchProps} from '@rneui/themed';
import {COLORS} from 'constants/colors';

export const Switch = (props: SwitchProps) => {
  return <DefaultSwitch {...props} />;
};

Switch.defaultProps = {
  ios_backgroundColor: COLORS.DARK_GRAY,
};
