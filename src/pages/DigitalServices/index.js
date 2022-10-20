// @ flow
import * as React from "react";
import {
  MasterDetailLayout,
  RowList,
  Row,
  NegativeBox,
  Box,
  Stack,
  Title1,
  Text2,
  Text3,
  Text4,
  TextLink,
  ButtonPrimary,
  Circle,
  ButtonLayout,
  ButtonLink,
  ResponsiveLayout,
} from "@telefonica/mistica";

const DigitalServices = (): React.Component => {
  const [selectedItem, setSelectedItem] = React.useState(null);
  const settings = [
    {
      categoryName: "ASSINADOS",
      settings: [
        {
          title: "Globoplay + Canais ao Vivo",
          icon: "./images/globoplay-small.png",
          headline: (
            <span style={{ color: "#FF9900" }}>Ative sua assinatura</span>
          ),
          price: "R$ 49,90/mês",
          instruction: [
            {
              title: "ATIVAÇÃO",
              items: [
                "Clique abaixo no botão ATIVAR ASSINATURA",
                "Faça login com sua conta Globo ou clique em cadastre-se",
                "Pronto! Você ativou o Globoplay na Vivo",
              ],
            },
            {
              title: "ACESSO",
              items: [
                "Baixe o app Globoplay",
                "Acesse o app e faça o login com a conta utilizada durante a ativação",
                "Pronto! Você ativou o Globoplay na Vivo",
              ],
            },
            {
              title: "COMO USAR NA SMART TV",
              items: [
                "Instale o app Globoplay na sua Smart TV",
                "No app faça o login com a sua conta Globo utilizada durante a ativação",
              ],
            },
          ],
        },
        {
          title: "Disney+",
          icon: "./images/disneyplus-small.png",
        },
        {
          title: "Tidal",
          icon: "./images/tidal-small.png",
        },
      ],
    },
    {
      categoryName: "INCLUSOS NO PLANO",
      settings: [
        {
          title: "Netflix",
          icon: "./images/netflix-small.png",
        },
        {
          title: "Spotify",
          icon: "./images/spotfy-small.png",
        },
        {
          title: "NBA",
          icon: "./images/nba-small.png",
        },
        {
          title: "NFL",
          icon: "./images/nfl-small.png",
        },
        {
          title: "History Play",
          icon: "./images/historyplay-small.png",
        },
        {
          title: "GoRead",
          icon: "./images/goread-small.png",
        },
      ],
    },
  ];
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
                          asset={
                            <Circle size={40} backgroundImage={setting.icon} />
                          }
                          onPress={() => {
                            setSelectedItem(setting);
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
              <Box paddingTop={24} paddingBottom={24}>
                <Stack space={16}>
                  <RowList>
                    <Row
                      title={<Text4 medium>{selectedItem.title}</Text4>}
                      asset={
                        <Circle size={40} backgroundImage={selectedItem.icon} />
                      }
                    />

                    <Box paddingX={16} paddingY={32}>
                      <Box>
                        <Text3>
                          <span style={{ fontWeight: "500" }}>
                            {selectedItem.price}
                          </span>
                        </Text3>
                      </Box>
                      <Box>
                        <Text2>
                          <span style={{ fontWeight: "500" }}>
                            Assinatura contratada no plano:
                          </span>
                        </Text2>
                      </Box>
                      <Box>
                        <Text2>
                          <span style={{ fontWeight: "500", color: "#666666" }}>
                            Vivo Controle - (11) 99999-8888
                          </span>
                        </Text2>
                      </Box>
                      <Box>
                        <Text2>
                          <TextLink href="https://example.org">
                            <span
                              style={{ fontWeight: "500", color: "#660099" }}
                            >
                              Ver detalhes da compra
                            </span>
                          </TextLink>
                        </Text2>
                      </Box>
                    </Box>
                  </RowList>

                  {selectedItem.instruction && (
                    <Box paddingX={16} paddingY={16}>
                      <Stack space={16}>
                        <Box>
                          <Text4>Como usar</Text4>
                        </Box>
                        {selectedItem.instruction.map((e) => {
                          return (
                            <Box key={e.title}>
                              <Text2>
                                <span style={{ color: "#595959" }}>
                                  {e.title}
                                </span>
                                <Box paddingX={0} paddingY={16}>
                                  <Stack space={4}>
                                    {e.items.map((e, i) => (
                                      <span key={i}>{`${i}. ${e}`}</span>
                                    ))}
                                  </Stack>
                                </Box>
                              </Text2>
                            </Box>
                          );
                        })}
                      </Stack>
                    </Box>
                  )}
                </Stack>
                <ButtonLayout>
                  <ButtonPrimary
                    style={{ backgroundColor: "#660099" }}
                    submit
                    loadingText="Sending"
                  >
                    Ativar assinatura
                  </ButtonPrimary>
                  <ButtonLink
                    onPress={() => {
                      setSelectedItem(null);
                    }}
                  >
                    <span style={{ color: "#660099" }}>
                      Cancelar assinatura
                    </span>
                  </ButtonLink>
                </ButtonLayout>
              </Box>
            ) : (
              <Text2 regular>Select one of the sections from the sidebar</Text2>
            )
          }
        />
      </Box>
    </ResponsiveLayout>
  );
};
export default DigitalServices;
