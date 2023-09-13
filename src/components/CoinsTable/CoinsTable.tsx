import { useEffect, useState } from "react";

import { coinsColumns } from "./columns";
import { DataGrid } from "@mui/x-data-grid";

import { CircularProgress } from "@mui/material";
import { Coin } from "@types";

import { BrandText, Container } from "./CoinsTable.styles";
import { getCoins } from "src/api/coingecko";

export const CoinsTable = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getCoins();
        setCoins(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) return <CircularProgress />;

  return (
    <Container>
      <BrandText>
        Powered by{" "}
        <a href="https://www.coingecko.com/" target="_blank" rel="noreferrer">
          CoinGecko API
        </a>
      </BrandText>
      <DataGrid
        rows={coins}
        columns={coinsColumns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 25, 50, 100]}
        checkboxSelection
      />
    </Container>
  );
};
