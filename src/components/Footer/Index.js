import React from "react";
import Styles from "./styles/styles.module.scss";
import { Container } from "react-bootstrap";
import Image from "next/future/image";

import Link from "next/link";
import { footerData } from "./data";
const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <Container>
        <div className="footer-logo">
          <Link href="/">
            <a>
              <Image
                src={footerData?.logo}
                alt="logo"
                layout="fill"
                priority
                fill="true"
              />
            </a>
          </Link>
        </div>
        <ul className="app-sections">
          {footerData?.appSections?.map((item) => (
            <li key={item?.slug}>
              <a href={`#${item?.sectionId}`} className="fs-sm fc-text">
                {item?.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="footer-end">
          <span>
            <ul className="social-icons">
              {footerData?.socialIcons?.map((social, idx) => (
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
          </span>
          <span>
            <p className="fs-md fc-text">جميع الحقوق محفوظة لتطبيق وشوو@2025</p>
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
