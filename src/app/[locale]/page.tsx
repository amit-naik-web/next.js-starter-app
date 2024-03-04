import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { Grid } from "@mui/material";

import AuthButton from "@/src/components/AuthButton";

import getDictionary from "../../lib/dictionary";
import { Locale } from "@/i18n.config";
import { authOptions } from "../api/auth/_options";

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const { APP } = await getDictionary(locale);

  type TSession = {
    user: string;
  };
  const session: TSession | null = await getServerSession(authOptions);

  return (
    <Grid
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e6e6fa",
        flexDirection: "column",
      }}
    >
      {session && session.user ? (
        <>{redirect("/dashboard")}</>
      ) : (
        <>
          <h1>{APP.APP_NAME}</h1>
          <AuthButton />
        </>
      )}
    </Grid>
  );
}
