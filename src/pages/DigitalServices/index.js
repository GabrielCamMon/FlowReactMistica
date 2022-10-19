// @ flow
import * as React from 'react'
import {
  MasterDetailLayout,
  RowList,
  Row,
  NegativeBox,
  Box,
  Stack,
  Title1,
  ButtonPrimary,
  Circle,
  Text4,
  Text2,
  Placeholder,
  ResponsiveLayout,
} from '@telefonica/mistica'

const DigitalServices = (): React.Component => {
  const [selectedItem, setSelectedItem] = React.useState(null)
  const settings = [
    {
      categoryName: 'ASSINADOS',
      settings: [
        {
          title: 'Globoplay + Canais ao Vivo',
          icon: (
            <Circle size={40} backgroundImage="./images/globoplay-small.png" />
          ),
          headline: (
            <span style={{ color: '#FF9900' }}>Ative sua assinatura</span>
          ),
        },
        {
          title: 'Disney+',
          icon: (
            <Circle size={40} backgroundImage="./images/disneyplus-small.png" />
          ),
        },
        {
          title: 'Tidal',
          icon: <Circle size={40} backgroundImage="./images/tidal-small.png" />,
        },
      ],
    },
    {
      categoryName: 'INCLUSOS NO PLANO',
      settings: [
        {
          title: 'Netflix',
          icon: (
            <Circle size={40} backgroundImage="./images/netflix-small.png" />
          ),
        },
        {
          title: 'Spotify',
          icon: (
            <Circle size={40} backgroundImage="./images/spotfy-small.png" />
          ),
        },
        {
          title: 'NBA',
          icon: <Circle size={40} backgroundImage="./images/nba-small.png" />,
        },
        {
          title: 'NFL',
          icon: <Circle size={40} backgroundImage="./images/nfl-small.png" />,
        },
        {
          title: 'History Play',
          icon: (
            <Circle
              size={40}
              backgroundImage="./images/historyplay-small.png"
            />
          ),
        },
        {
          title: 'GoRead',
          icon: (
            <Circle size={40} backgroundImage="./images/goread-small.png" />
          ),
        },
      ],
    },
  ]
  return (
    <ResponsiveLayout>
      <Box paddingY={24}>
        <MasterDetailLayout
          isOpen={!!selectedItem}
          master={
            <Stack space={32}>
              {settings.map((category) => (
                <Stack key={category.categoryName} space={8}>
                  <Title1>{category.categoryName}</Title1>
                  <NegativeBox>
                    <RowList>
                      {category.settings.map((setting) => (
                        <Row
                          headline={setting.headline}
                          key={setting.title}
                          title={setting.title}
                          asset={setting.icon}
                          onPress={() => {
                            setSelectedItem(setting.title)
                          }}
                        />
                      ))}
                    </RowList>
                  </NegativeBox>
                </Stack>
              ))}
            </Stack>
          }
          detail={
            selectedItem ? (
              <Stack space={16}>
                <Text4 as="h2" medium>
                  {selectedItem}
                </Text4>
                <Text2 regular>You are inside {selectedItem} section</Text2>
                <Placeholder />
                <ButtonPrimary
                  small
                  onPress={() => {
                    setSelectedItem(null)
                  }}
                >
                  Close
                </ButtonPrimary>
              </Stack>
            ) : (
              <Text2 regular>Select one of the sections from the sidebar</Text2>
            )
          }
        />
      </Box>
    </ResponsiveLayout>
  )
}
export default DigitalServices
