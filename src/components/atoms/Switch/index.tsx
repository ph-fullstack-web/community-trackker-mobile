import {
  Switch as DefaultSwitch,
  SwitchProps as DefaultSwitchProps,
} from '@rneui/themed';
import {COLORS} from 'constants/colors';

type SwitchProps = DefaultSwitchProps & {
  id: string;
};

export const Switch = (props: SwitchProps) => {
  return <DefaultSwitch {...props} />;
};

Switch.defaultProps = {
  ios_backgroundColor: COLORS.DARK_GRAY,
};
