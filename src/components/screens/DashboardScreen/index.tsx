import {ScreenHeader} from 'components/atoms';
import {MemberDetailForm} from 'components/organisms';
import {ScreenTitle} from 'constants/enums';

export const DashboardScreen = () => {
  return (
    <>
      <ScreenHeader title={ScreenTitle.Profile} />
      <MemberDetailForm />
    </>
  );
};
