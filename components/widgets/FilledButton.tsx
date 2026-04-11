import { COLORS } from "@/utils/enum";
import { Button, ButtonProps, SxProps } from "@mui/material";
import React, { ReactNode } from "react";

const FilledButton = ({
  children,
  sx,
  props,
}: {
  children: ReactNode;
  sx?: SxProps;
  props?: ButtonProps;
}) => {
  return (
    <Button sx={{ backgroundColor: COLORS.PRIMARY, ...sx }} {...props}>
      {children}
    </Button>
  );
};

export default FilledButton;
