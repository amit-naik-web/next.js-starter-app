import "./globals.css";

import { Locale } from "@/i18n.config";
import getDictionary from "../../../lib/dictionary";

// import { signIn, signOut, useSession } from "next-auth/react";
import TextButton from "@/src/components/TextButton";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/_options";

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  // const t = useTranslations("APP");
  // console.log("locale", locale);
  const { APP } = await getDictionary(locale);
  // const session = await getServerSession(authOptions);
  // const User = session;

  return (
    <main>
      <h1>{APP.APP_NAME}</h1>
      <TextButton text={"Sign In"} type={"submit"} />
    </main>
  );
}
