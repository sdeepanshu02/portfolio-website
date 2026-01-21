import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@sdeepanshu02",
    icon: Icons.gitHub,
    link: "https://github.com/sdeepanshu02",
  },
  {
    name: "LinkedIn",
    username: "sdeepanshu02",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/sdeepanshu02",
  },
  {
    name: "Twitter",
    username: "@sdeepanshu02",
    icon: Icons.twitter,
    link: "https://twitter.com/sdeepanshu02",
  },
  {
    name: "Gmail",
    username: "deepanshusharma1802",
    icon: Icons.gmail,
    link: "mailto:deepanshusharma1802@gmail.com",
  },
];
