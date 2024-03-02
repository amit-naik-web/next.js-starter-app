//

import { Locale } from "@/i18n.config";
import getDictionary from "../../../lib/dictionary";

// import { signIn, signOut, useSession } from "next-auth/react";
import TextButton from "@/src/components/TextButton";
import { Grid } from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/_options";
import { redirect } from "next/navigation";

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  // const t = useTranslations("APP");
  // console.log("locale", locale);
  const { APP } = await getDictionary(locale);

  type Tsession = {
    user: "string";
  };
  const session: Tsession | null = await getServerSession(authOptions);
  // const User = session;

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
          <TextButton text={"Sign In"} type={"submit"} />
        </>
      )}
    </Grid>
  );
}
