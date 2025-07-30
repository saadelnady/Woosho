import React from "react";

import Facebook from "./assets/images/ic-facebook.svg";
import Instagram from "./assets/images/ic-instagram.svg";
import Snapchat from "./assets/images/ic-snapchat.svg";
import Twitter from "./assets/images/ic-twitter.svg";
import Logo from "./assets/images/logo.gif";
export const footerData = {
  logo: Logo,
  appSections: [
    {
      id: 1,
      label: "عن تطبيق ووشو",
      sectionId: "about",
    },
    {
      id: 2,
      label: "مميزات تطبيق ووشو",
      sectionId: "features",
    },
    {
      id: 3,
      label: "تحميل تطبيق ووشو",
      sectionId: "download",
    },
    {
      id: 4,
      label: "الشروط و الأحكام",
      sectionId: "terms",
    },
  ],
  socialIcons: [
    { icon: Facebook, link: "https://www.google.com/" },
    { icon: Instagram, link: "https://www.google.com/" },
    { icon: Snapchat, link: "https://www.google.com/" },
    { icon: Twitter, link: "https://www.google.com/" },
  ],
};
