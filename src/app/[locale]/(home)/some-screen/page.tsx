import { useTranslations } from "next-intl";

const Dashboard = (): React.ReactElement => {
  const t = useTranslations("SOME_MODULE");

  return <h1>{t("SOME_MODULE_TITLE")}</h1>;
};

export default Dashboard;
