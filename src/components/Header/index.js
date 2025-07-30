import React, { useEffect, useState } from "react";
import styles from "./styles/styles.module.scss";
import { Container } from "react-bootstrap";
import Image from "next/future/image";
import Iclogo from "./assets/images/logo.gif";
import BurgerIcon from "./assets/images/burger-icon.svg";
import { headerData } from "./data";
import Link from "next/link";
import { useRouter } from "next/router";
import AppStore from "./assets/images/app-store.png";
import GooglePlay from "./assets/images/google-play.png";
import { parseCookies, setCookie } from "nookies";
import IcCrescent from "./assets/images/ic-crescent.svg";
import IcSun from "./assets/images/ic-sun.svg";
import { useDispatch } from "react-redux";
import { setTheme } from "@/store/actions";
const Index = () => {
  const { locale } = useRouter();
  const [dataTheme, setDataTheme] = useState("light");
  const dispatch = useDispatch();

  useEffect(() => {
    const cookies = parseCookies();
    const savedTheme = cookies["data-theme"] || "light";
    setDataTheme(savedTheme);
    dispatch(setTheme(savedTheme));

    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);
  const toggleDarkMode = () => {
    const newTheme = dataTheme === "light" ? "dark" : "light";
    setDataTheme(newTheme);
    dispatch(setTheme(newTheme));
    document.documentElement.setAttribute("data-theme", newTheme);
    setCookie(null, "data-theme", newTheme, { path: "/" });
  };
  return (
    <div className={styles.header}>
      <Container>
        <div className="inner">
          <div className="burger-icon">
            <BurgerIcon />
          </div>
          <div className="logo">
            <Link href="/">
              <a>
                <Image src={Iclogo} alt="logo" priority layout="fill" />
              </a>
            </Link>
          </div>
          <nav className="nav">
            <ul>
              {headerData.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={`#${item?.link}`}>
                      <a>{item?.title?.[locale]}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="btns">
              <Link href="#">
                <a className="btn ">
                  <Image src={AppStore} />
                </a>
              </Link>
              <Link href="#">
                <a className="btn ">
                  <Image src={GooglePlay} />
                </a>
              </Link>
            </div>
          </nav>
          <div
            className="d-flex align-items-center justify-content-center dark-mode-toggle"
            onClick={toggleDarkMode}
          >
            <div className="toggle-circle d-flex align-items-center justify-content-center">
              <div>
                {dataTheme === "dark" ? (
                  <div className="sunIconWrapper">
                    <IcSun className="sunIcon" />
                  </div>
                ) : (
                  <div className="crescentIconWrapper">
                    <IcCrescent className="crescentIcon" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Index;
