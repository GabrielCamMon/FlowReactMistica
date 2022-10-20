// @ flow
import * as React from "react";
import { SuccessFeedbackScreen, ButtonPrimary } from "@telefonica/mistica";

const Sucess = (): React.Component => {
  return (
    <div>
      <SuccessFeedbackScreen
        title="Some title"
        description="Some description text"
        primaryButton={<ButtonPrimary onPress={() => {}}>Action</ButtonPrimary>}
      />
    </div>
  );
};
export default Sucess;
