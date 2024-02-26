"use client";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { getTypography } from "./typography";
import Palette from "./palette";

let theme = createTheme({
  typography: (palette) => {
    return getTypography(palette);
  },
  palette: Palette,
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
