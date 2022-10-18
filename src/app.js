// @flow
import * as React from 'react'
import DigitalServices from './pages/DigitalServices'

type Props = {
  show: boolean,
}

class App extends React.Component<Props> {
  render(): any {
    return (
      <div>
        <DigitalServices />
      </div>
    )
  }
}
export default App
