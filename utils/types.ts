import { StaticImageData } from "next/image";

export interface SkillCardType {
  title: string;
  description: string;
  buttonText: string;
  image: StaticImageData;
}
