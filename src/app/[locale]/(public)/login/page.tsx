import { useTranslations } from "next-intl";

const LogInPage = (): React.ReactElement => {
  const t = useTranslations("PUBLIC");
  return <h1>{t("SIGN_IN.TITLE")}</h1>;
};

export default LogInPage;
