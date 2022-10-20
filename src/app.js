// @flow
import * as React from "react";
import DigitalServices from "./pages/DigitalServices";
import Sucess from "./pages/Sucess";

type Props = {
  show: boolean,
};

class App extends React.Component<Props> {
  render(): any {
    return (
      <div>
        <Sucess />
      </div>
    );
  }
}
export default App;
