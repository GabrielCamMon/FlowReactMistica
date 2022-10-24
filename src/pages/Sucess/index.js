// @ flow
import * as React from "react";
import { SuccessFeedbackScreen, ButtonPrimary } from "@telefonica/mistica";

const Sucess = (): React.Component => {
  return (
    <div>
      <SuccessFeedbackScreen
        title="Deu certo!"
        description="Você cancelou sua assinatura. Seu acesso ainda está disponível e expira ao longo do dia 16/06/22."
        primaryButton={
          <ButtonPrimary onPress={() => {}}>Ok, entendi</ButtonPrimary>
        }
      />
    </div>
  );
};
export default Sucess;
