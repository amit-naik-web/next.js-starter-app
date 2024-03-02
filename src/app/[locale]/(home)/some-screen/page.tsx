import getDictionary from "@../../../lib/dictionary";
import { Locale } from "@/i18n.config";

export default async function SomeModule({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const { SOME_MODULE } = await getDictionary(locale);
  return <h1>{SOME_MODULE.SOME_MODULE_TITLE}</h1>;
}
