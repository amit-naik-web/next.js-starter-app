import { APP } from "./variables";
import { Palette } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

export const getTypography = (palette: Palette): TypographyOptions => {
  return {
    fontFamily: APP.FONT.FONT_FAMILY.PRIMARY,
    h1: {
      fontSize: APP.FONT.FONT_SIZE.H1,
      fontWeight: APP.FONT.FONT_WEIGHT.H1,
      lineHeight: APP.LINE_HEIGHT.H1,
      color: palette.primary.main,
    },
    h2: {
      fontSize: APP.FONT.FONT_SIZE.H2,
      fontWeight: APP.FONT.FONT_WEIGHT.H2,
      lineHeight: APP.LINE_HEIGHT.H2,
      color: palette.primary.main,
    },
    h3: {
      fontSize: APP.FONT.FONT_WEIGHT.H3,
      lineHeight: APP.LINE_HEIGHT.H3,
      letterSpacing: 0.2,
      fontWeight: APP.FONT.FONT_WEIGHT.H3,
      color: palette.primary.main,
    },
    h4: {
      fontSize: APP.FONT.FONT_SIZE.H4,
      lineHeight: APP.LINE_HEIGHT.H4,
      letterSpacing: 0.2,
      fontWeight: APP.FONT.FONT_WEIGHT.H4,
      color: palette.primary.main,
    },
    h5: {
      fontSize: APP.FONT.FONT_SIZE.H5,
      lineHeight: APP.LINE_HEIGHT.H5,
      letterSpacing: 0.1,
      fontWeight: APP.FONT.FONT_WEIGHT.H5,
      color: palette.primary.main,
    },
    h6: {
      fontSize: APP.FONT.FONT_SIZE.H6,
      lineHeight: APP.LINE_HEIGHT.H6,
      fontWeight: APP.FONT.FONT_WEIGHT.H6,
      color: palette.primary.main,
    },
    button: {
      fontWeight: APP.FONT.FONT_WEIGHT.BUTTON,
      letterSpacing: 0,
      fontSize: APP.FONT.FONT_SIZE.BUTTON,
      lineHeight: APP.LINE_HEIGHT.BUTTON,
      color: palette.primary.main,
    },
    subtitle1: {
      color: palette.primary.main,
    },
    caption: {
      fontSize: APP.FONT.FONT_SIZE.CAPTION,
      lineHeight: APP.LINE_HEIGHT.CAPTION,
      letterSpacing: 0,
      fontWeight: APP.FONT.FONT_WEIGHT.CAPTION,
      color: palette.primary.main,
    },
    subtitle2: {
      color: palette.primary.main,
    },
    overline: {
      fontWeight: APP.FONT.FONT_WEIGHT.OVERLINE,
      fontSize: APP.FONT.FONT_SIZE.OVERLINE,
      lineHeight: APP.LINE_HEIGHT.OVERLINE,
      color: palette.primary.main,
    },
  };
};
