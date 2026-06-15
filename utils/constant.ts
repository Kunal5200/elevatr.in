import client1 from "@/images/clients/client1.png";
import client2 from "@/images/clients/client2.png";
import client3 from "@/images/clients/client3.png";
import client4 from "@/images/clients/client4.png";
import client5 from "@/images/clients/client5.svg";
import client6 from "@/images/clients/client6.png";
import { Cancel, CheckCircle, Instagram, X } from "@mui/icons-material";
import { FaFacebookF } from "react-icons/fa";
import career from "@/images/products/product-breakdown/career-identity.png";
import skillIntelligence from "@/images/products/product-breakdown/skill-intelligence.png";
import opportunityMatching from "@/images/products/product-breakdown/opportunity-matching.png";
import { SkillCardType, WHY_ELEVATR_CARD_PROPS } from "./types";
export const HEADER_LINKS = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Service",
    url: "/service",
  },
  // {
  //   label: "About Us",
  //   url: "/about-us",
  // },
  {
    label: "Contact",
    url: "/contact",
  },
];

export const Clients = [
  {
    img: client1,
  },
  {
    img: client2,
  },
  {
    img: client3,
  },
  {
    img: client4,
  },
  {
    img: client5,
  },
  {
    img: client6,
  },
];

export const SOCIAL_ICONS = [
  {
    icon: FaFacebookF,
  },
  {
    icon: Instagram,
  },
  {
    icon: X,
  },
];

export const SKILLS_CARD_DATA: SkillCardType[] = [
  {
    image: career,
    title: "Career Identity (Live)",
    description: "Your foundation, done right.",
    buttonText: "Build your profile →",
  },
  {
    image: skillIntelligence,
    title: "Skill Intelligence (Rolling Out)",
    description: "Know what to do next.",
    buttonText: "Unlock your skills →",
  },
  {
    image: opportunityMatching,
    title: "Opportunity Matching (Planned)",
    description: "Stop applying blindly.",
    buttonText: "Find your next match →",
  },
  {
    image: career,
    title: "All with the security",
    description: "Learn more about Privacy",
    buttonText: "Learn More",
  },
];

export const WHY_ELEVATR_CARD_DATA: WHY_ELEVATR_CARD_PROPS[] = [
  {
    title: "Others",
    isEven: false,
    data: [
      {
        title: "Focus on jobs",
        icon: Cancel,
      },
      {
        title: "Treats resume as files",
        icon: Cancel,
      },
      {
        title: "leaves you guessing",
        icon: Cancel,
      },
    ],
  },
  {
    title: "Elevatr",
    isEven: true,
    data: [
      {
        title: "Focuses on your entire career journey",
        icon: CheckCircle,
      },
      {
        title: "Treats your profile as data",
        icon: CheckCircle,
      },
      {
        title: "gives you direction",
        icon: CheckCircle,
      },
    ],
  },
];
