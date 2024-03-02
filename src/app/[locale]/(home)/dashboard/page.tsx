// import { useTranslations } from "next-intl";

import { Locale } from "@/i18n.config";
import getDictionary from "@../../../lib/dictionary";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/app/api/auth/_options";
import { Grid } from "@mui/material";
// import { redirect } from "next/navigation";

export default async function Dashboard({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  // const t = useTranslations("PRIVATE");

  const { PRIVATE } = await getDictionary(locale);
  const session: any = await getServerSession(authOptions);
  const user = session?.user;
  // console.log("user", user);

  return (
    <Grid sx={{ display: "flex" }}>
      {user && (
        <div>
          <h1>{PRIVATE.DASHBOARD.DASHBOARD_TITLE}</h1>
        </div>
      )}
    </Grid>
  );
}
