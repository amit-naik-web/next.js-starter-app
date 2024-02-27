// import "./globals.css";

import { useTranslations } from "next-intl";

const Home = (): React.ReactElement => {
  const t = useTranslations("APP");
  return (
    <main>
      <h1>{t("APP_NAME")}</h1>;
    </main>
  );
};

export default Home;
