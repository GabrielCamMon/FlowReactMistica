import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeContextProvider, getVivoSkin } from "@telefonica/mistica";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routers/AppRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));

const misticaTheme = {
  skin: getVivoSkin(),
  i18n: { locale: "pt-BR", phoneNumberFormattingRegionCode: "BR" },
};

root.render(
  <React.StrictMode>
    <ThemeContextProvider theme={misticaTheme}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeContextProvider>
  </React.StrictMode>
);
