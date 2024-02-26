/* eslint-disable max-len */
export const APP = {
  FONT: {
    FONT_FAMILY: {
      PRIMARY: "Roboto-Regular",
      REGULAR:
        "IBM Plex Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
      H1: "PlusJakartaSans-ExtraBold,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
      H2: "PlusJakartaSans-ExtraBold,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
      H3: "PlusJakartaSans-Bold,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
      H4: "PlusJakartaSans-Bold,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
      H5: "PlusJakartaSans-Bold,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
      H6: "IBM Plex Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
      BUTTON:
        "IBM Plex Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
      SUBTITLE1:
        "IBM Plex Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
      BODY1:
        '"IBM Plex Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
      BODY2:
        "IBM Plex Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
      CAPTION:
        "IBM Plex Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
      SUBTITLE2:
        "IBM Plex Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
      OVERLINE:
        "IBM Plex Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
    },
    FONT_COLOR: {
      PRIMARY: "#2ffc21",
      SECONDARY: "",
    },
    FONT_SIZE: {
      H1: "clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)",
      H2: "clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)",
      H3: "2.25rem",
      H4: "1.75rem",
      H5: "1.5rem",
      H6: "1.25rem",
      BUTTON: "0.875rem",
      SUBTITLE1: "1.125rem",
      BODY1: "1rem",
      BODY2: "0.875rem",
      CAPTION: "0.75rem",
      SUBTITLE2: "0.875rem",
      OVERLINE: "0.75rem",
    },
    FONT_WEIGHT: {
      H1: "800",
      H2: "800",
      H3: "400",
      H4: "400",
      H5: "400",
      H6: "500",
      BUTTON: "700",
      SUBTITLE1: "500",
      BODY1: "400",
      BODY2: "400",
      CAPTION: "700",
      SUBTITLE2: "500",
      OVERLINE: "400",
    },
  },
  LINE_HEIGHT: {
    H1: 1.1142857142857143,
    H2: 1.2222222222222223,
    H3: 1.2222222222222223,
    H4: 1.5,
    H5: 1.5,
    H6: 1.5,
    BUTTON: 1.75,
    SUBTITLE1: 1.3333333333333333,
    BODY1: 1.5,
    BODY2: 1.5,
    CAPTION: 1.5,
    SUBTITLE2: 1.57,
    OVERLINE: 2.66,
  },
  PALETTE: {
    MODE: "light" as const,
    PRIMARY: {
      MAIN: "#007FFF",
      LIGHT: "#66B2FF",
      DARK: "#0059B2",
      CONTRAST_TEXT: "#fff",
    },
    DIVIDER: "#E7EBF0",
    COMMON: {
      BLACK: "#1D1D1D",
      WHITE: "#fff",
    },
    TEXT: {
      PRIMARY: "#1A2027",
      SECONDARY: "#3E5060",
      DISABLED: "rgba(0, 0, 0, 0.38)",
    },
    GREY: {
      SHADE_50: "#F3F6F9",
      SHADE_100: "#E7EBF0",
      SHADE_200: "#E0E3E7",
      SHADE_300: "#CDD2D7",
      SHADE_400: "#B2BAC2",
      SHADE_500: "#A0AAB4",
      SHADE_600: "#6F7E8C",
      SHADE_700: "#3E5060",
      SHADE_800: "#2D3843",
      SHADE_900: "#1A2027",
      SHADE_A100: "#f5f5f5",
      SHADE_A200: "#eeeeee",
      SHADE_A400: "#bdbdbd",
      SHADE_A700: "#616161",
    },
    ERROR: {
      MAIN: "#EB0014",
      LIGHT: "#ff99A2",
      DARK: "#C70011",
      CONTRAST_TEXT: "#fff",
    },
    SUCCESS: {
      MAIN: "#1AA251",
      DARK: "#1AA251",
      LIGHT: "#6AE79C",
      CONTRAST_TEXT: "#fff",
    },
    WARNING: {
      MAIN: "#DEA500",
      DARK: "#AB6800",
      LIGHT: "#FFDC48",
      CONTRAST_TEXT: "#fff",
    },
    SECONDARY: {
      MAIN: "#9c27b0",
      DARK: "#7b1fa2",
      LIGHT: "#ba68c8",
      CONTRAST_TEXT: "rgba(0, 0, 0, 0.87)",
    },
    INFO: {
      MAIN: "#0288d1",
      DARK: "#01579b",
      LIGHT: "#03a9f4",
      CONTRAST_TEXT: "#fff",
    },
    CONTRAST_THRESHOLD: 3,
    TONAL_OFFSET: 0.2,
    BACKGROUND: {
      PAPER: "#fff",
      DEFAULT: "#fff",
    },
  },
};
