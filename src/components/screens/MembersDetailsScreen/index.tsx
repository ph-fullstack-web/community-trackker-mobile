import {ScreenHeader} from "components/atoms";
import {ScreenTitle} from "constants/enums";

import { MemberDetailForm } from "components/organisms";

export const MembersDetailsScreen = () => {
  return (
    <>
      <ScreenHeader title={ScreenTitle.Members} />
      <MemberDetailForm />
    </>
  )
}