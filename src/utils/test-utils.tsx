/*
    Reemplaza el método render de @testing-library/react para envolver 
    a los componentes testeados con todos Providers necesarios
    incluye, el ThemeProvider de styled-components, los estilos globales, etc.

    Uso: 
      En vez de usar el render directamente de @testing-library/react, usar el render que se exporta de este archivo:

      import { render } from 'test-utils'; // el import alias test-utils esta definido en jest.config.js y tsconfig.json
      ...
      const screen = render(<Footer />) // Footer estará envuelto por lo que haya en el Wrapper de este archivo
*/

import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";
import GlobalStyle from "@styles/globalStyles";

const Wrapper: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) => render(ui, { wrapper: Wrapper, ...options });
export { customRender as render };

export * from "@testing-library/react";
