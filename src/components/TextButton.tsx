"use client";
import { MouseEventHandler } from "react";
import { Button } from "@mui/material";

type TTextButtonProps = {
  text: string;
  type: "submit" | "button";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
const TextButton = (props: TTextButtonProps): any => {
  const { text, type, ...rest } = props;
  return (
    <Button variant="contained" type={type} {...rest}>
      {text}
    </Button>
  );
};

export default TextButton;
