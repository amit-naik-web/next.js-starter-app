// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import theme from "@/styles/theme";
// import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// type TRootLayoutProps = {
//   readonly children: React.ReactNode;
//   params: { locale: string };
// };

// const RootLayout = ({
//   children,
//   params: { locale },
// }: TRootLayoutProps): React.ReactElement => {
//   return (
//     <html lang={locale}>
//       <body className={inter.className}>
//         <AppRouterCacheProvider options={{ enableCssLayer: true }}>
//           <ThemeProvider theme={theme}>
//             {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//             <CssBaseline />
//             {children}
//           </ThemeProvider>
//         </AppRouterCacheProvider>
//       </body>
//     </html>
//   );
// };

// export default RootLayout;

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default function RootLayout({
  children,
  params: { locale },
}: Props): React.ReactElement {
  return <div lang={locale}>{children}</div>;
}
