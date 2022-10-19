// @ flow
import * as React from 'react'
import { RowList, Row, Avatar } from '@telefonica/mistica'

const DigitalServices = (): any => {
  return (
    <div>
      <RowList>
        <Row
          asset={<Avatar size={40} initials="HS" />}
          title="Title"
          description="Description"
          onPress={() => {}}
        />
        <Row
          asset={<Avatar size={40} initials="AL" />}
          title="Title"
          description="Description"
          onPress={() => {}}
        />
        <Row
          asset={
            <Avatar
              size={40}
              initials="ML"
              src="https://i.pravatar.cc/100?img=31"
            />
          }
          title="Title"
          description="Description"
          onPress={() => {}}
        />
        <Row
          asset={<Avatar size={40} initials="AR" />}
          title="Title"
          description="Description"
          onPress={() => {}}
        />
      </RowList>
    </div>
  )
}
export default DigitalServices
