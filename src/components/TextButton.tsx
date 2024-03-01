"use client";
import { Button } from "@mui/material";
import { signIn } from "next-auth/react";
import { MouseEventHandler } from "react";

type TTextButtonProps = {
  text: string;
  type: "submit" | "button";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
const TextButton = (props: TTextButtonProps): any => {
  const { text, type } = props;
  return (
    <Button variant="contained" type={type} onClick={() => signIn()}>
      {text}
    </Button>
  );
};

export default TextButton;
