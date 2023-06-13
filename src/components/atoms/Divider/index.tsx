import {
  Divider as DefaultDivider,
  DividerProps as DefaultDividerProps,
} from '@rneui/base';

type DividerProps = DefaultDividerProps & {
  id: string;
};

export const Divider = (props: DividerProps) => {
  return <DefaultDivider {...props} />;
};
