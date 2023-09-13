import { grey } from "@mui/material/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 32px;

  position: relative;
`;

export const BrandText = styled.span`
  position: absolute;
  right: 0px;
  top: -16px;
  font-size: 12px;
  line-height: 120%;
  color: ${grey[700]};

  a {
    text-decoration: none;
  }
`;
