import { SvgIconComponent } from "@mui/icons-material";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface SkillCardType {
  title: string;
  description: string;
  buttonText: string;
  image: StaticImageData;
}

export interface WHY_ELEVATR_CARD_PROPS {
  isEven: boolean;
  title: string;
  data: {
    title: string;
    icon: SvgIconComponent;
  }[];
}
