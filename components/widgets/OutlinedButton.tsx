import { COLORS } from "@/utils/enum";
import { Button, ButtonProps, SxProps } from "@mui/material";
import React, { ReactNode } from "react";

const OutlinedButton = ({
  sx,
  children,
  props,
}: {
  sx?: SxProps;
  children: ReactNode;
  props?: ButtonProps;
}) => {
  return (
    <Button
      sx={{
        border: "1px solid" + COLORS.PRIMARY,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default OutlinedButton;
