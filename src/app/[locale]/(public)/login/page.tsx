import { Locale } from "@/i18n.config";
import getDictionary from "../../../../lib/dictionary";
import TextButton from "@/src/components/TextButton";
import { TextField } from "@mui/material";
// import { signIn } from "next-auth/react";

export default async function LogInPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const { APP } = await getDictionary(locale);

  async function handleFormSubmit(formData: FormData) {
    "use server";

    // const rawFormData = {
    //   email: formData.get("email"),
    //   password: formData.get("password"),
    // };
    // console.log("rawFormData", rawFormData);

    // const result = await signIn();
    //  console.log("result", result);
    // await signIn();
    // authenticate(formData, rawFormData)
    // mutate data
    // revalidate cache
  }

  return (
    <div>
      <form
        action={handleFormSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          padding: "40px",
        }}
      >
        {/* label="email" */}
        <TextField
          variant="standard"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        {/* label="password" */}
        <TextField
          variant="standard"
          name="password"
          placeholder="Password"
          required
        />
        <TextButton type={"submit"} text={APP.SUCCESS} />
      </form>
    </div>
  );
}
