import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

type Coin = {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
};

export const App: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order_by: "market_cap_desc",
            },
          }
        );
        setCoins(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={coins}
        columns={[
          { field: "id", headerName: "ID", width: 250 },
          { field: "symbol", headerName: "Symbol", width: 150 },
          { field: "name", headerName: "Name", width: 250 },
          {
            field: "current_price",
            headerName: "Price (USD)",
            width: 200,
            type: "number",
            valueFormatter: ({ value }) => `$${value}`,
          },
          {
            field: "market_cap",
            headerName: "Market Cap",
            width: 200,
            type: "number",
            valueFormatter: ({ value }) => `$${value.toLocaleString()}`,
          },
          {
            field: "market_cap_rank",
            headerName: "Rank",
            width: 100,
            type: "number",
          },
        ]}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
};
