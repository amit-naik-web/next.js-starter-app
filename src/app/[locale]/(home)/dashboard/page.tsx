import { useTranslations } from "next-intl";

const Dashboard = (): React.ReactElement => {
  const t = useTranslations("PRIVATE");

  return <h1>{t("DASHBOARD.DASHBOARD_TITLE")}</h1>;
};

export default Dashboard;
