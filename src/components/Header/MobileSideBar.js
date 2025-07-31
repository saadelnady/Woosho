import React from "react";
import IcClose from "./assets/images/ic-close.svg";
import { headerData, socialIcons } from "./data";
import { useRouter } from "next/router";
import Image from "next/future/image";
import AppStore from "./assets/images/app-store.png";
import GooglePlay from "./assets/images/google-play.png";

const MobileSideBar = ({ isSideBarActive, handleSideBaActivation }) => {
  const { locale } = useRouter();
  return (
    <div className={`mobile-sidebar ${isSideBarActive ? "active" : ""}`}>
      <button
        onClick={handleSideBaActivation}
        type="button"
        className="btn close-btn"
      >
        <IcClose />
      </button>

      <ul className="links">
        {headerData?.map((item) => (
          <li key={item?.link}>
            <a href={`#${item?.link}`}>{item?.title?.[locale]}</a>
          </li>
        ))}
      </ul>

      <ul className="social-icons">
        {socialIcons?.map((social, idx) => (
          <li key={idx}>
            <a
              href={`${social.link}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.icon />
            </a>
          </li>
        ))}
      </ul>
      <ul className="download-links">
        <li>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <Image src={AppStore} layout="fill" />
          </a>
        </li>
        <li>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <Image src={GooglePlay} layout="fill" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileSideBar;
