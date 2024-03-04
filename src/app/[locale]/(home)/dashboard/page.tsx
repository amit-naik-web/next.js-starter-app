import { getServerSession } from "next-auth";
import { Grid } from "@mui/material";

import AuthButton from "@/src/components/AuthButton";

import { Locale } from "@/i18n.config";
import getDictionary from "@/src/lib/dictionary";
import { authOptions } from "@/src/app/api/auth/_options";

export default async function Dashboard({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const { PRIVATE } = await getDictionary(locale);

  type TSession = {
    user: string;
  };
  const session: TSession | null = await getServerSession(authOptions);
  const user = session?.user;
  // console.log("user", user);

  return (
    <Grid sx={{ display: "flex" }}>
      {user && (
        <div>
          <h1>{PRIVATE.DASHBOARD.DASHBOARD_TITLE}</h1>
          <div>
            <AuthButton />
          </div>
        </div>
      )}
    </Grid>
  );
}
