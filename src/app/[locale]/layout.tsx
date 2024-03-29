import "./globals.css";
import type { Metadata } from "next";
import theme from "@/styles/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Locale } from "@/i18n.config";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "HR Operations",
  description: "HR Operations",
};

type TRootLayoutProps = {
  readonly children: React.ReactNode;
  params: { locale: Locale };
};

const RootLayout = ({
  children,
  params: { locale },
}: TRootLayoutProps): React.ReactElement => {
  return (
    <html lang={locale}>
      <body>
        <Providers>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;

// import { ReactNode } from "react";

// type Props = {
//   children: ReactNode;
//   params: { locale: string };
// };

// export default function RootLayout({
//   children,
//   params: { locale },
// }: Props): React.ReactElement {
//   return <div lang={locale}>{children}</div>;
// }
