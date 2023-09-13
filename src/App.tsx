import React from "react";

import { CoinsTable } from "./components/CoinsTable/CoinsTable";

import { ReactComponent as CoingeckoLogo } from "./assets/coingecko.svg";
import { Wrapper } from "./styles";

export const App: React.FC = () => {
  return (
    <Wrapper>
      <CoingeckoLogo className="coingecko_logo" />
      <CoinsTable />
    </Wrapper>
  );
};
