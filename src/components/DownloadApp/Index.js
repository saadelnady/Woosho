import React, { useEffect, useRef } from "react";
import styles from "./styles/styles.module.scss";
import AppStore from "./assets/images/app-store.png";
import GooglePlay from "./assets/images/google-play.png";
import { useSelector } from "react-redux";
import Image from "next/future/image";
import ShowshayaLight from "./assets/images/Showshaya-light.gif";
import ShowshayaDark from "./assets/images/Showshaya-Dark.gif";
import CloudToRight from "../shared/CloudToRight.js";
import SectionBgLight from "./assets/images/downloadBgLight.png";
import SectionBgDark from "./assets/images/downloadBgDark.png";
import { FormattedMessage } from "react-intl";
import { Col, Container, Row } from "react-bootstrap";
import IcGift from "./assets/images/ic-gift.svg";
import gsap from "gsap";

const Index = () => {
  const { theme } = useSelector((state) => state.theme);
  const gradient =
    theme === "dark"
      ? "linear-gradient(180deg, #07021a 0%, rgba(255, 250, 245, 0) 50%, #07021a 100%)"
      : "linear-gradient(180deg, #fffaf5 0%, rgba(255, 250, 245, 0) 50%, #fff8f1 100%)";

  const bgImage = `url(${
    theme === "dark" ? SectionBgDark.src : SectionBgLight.src
  })`;
  const gift1Ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      gift1Ref.current,
      { x: -100, opacity: 0, rotate: -15 },
      { x: 0, opacity: 1, rotate: 0, duration: 1, ease: "power3.out" }
    );

    gsap.to(gift1Ref.current, {
      y: -10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1,
    });
  }, []);
  return (
    <div className={styles.download} id="download">
      <div
        className="download-wrapper"
        style={{
          background: gradient + ", " + bgImage,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className="gift-1" ref={gift1Ref}>
          <IcGift />
        </div>
        <Container>
          <div className="download-content">
            <Row>
              <Col xs={12} md={6}>
                <div className="text">
                  <h3>حمل التطبيق الان</h3>
                  <p>
                    حمل التطبيق الان واختار الهدية الذكية والمناسبة لأى شخص وفي
                    كل وقت !
                  </p>
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
              </Col>
              <Col xs={12} md={6}>
                <div className="character-img">
                  <Image
                    src={theme === "dark" ? ShowshayaDark : ShowshayaLight}
                    alt="character"
                  />
                  <div className="cloud-wrapper">
                    <CloudToRight>
                      <foreignObject x="100" y="70" width="310" height="400">
                        <div className="character-info">
                          <h3 className="name">
                            <FormattedMessage id="name" /> : شوشايا
                          </h3>
                          <p className="role">
                            <FormattedMessage id="role" /> : الشخصية المساعدة
                          </p>
                          <p className="characterDescription">
                            هادئة كنسيم الفجر، خجولة لطيفة كزهرة بين أوراق
                            الشجر، تخفي أحلامها كنجمة خلف السحر، تكتب يداها في
                            مذكراتها ما يعجز ان ينطق به لسانها.
                          </p>
                        </div>
                      </foreignObject>
                    </CloudToRight>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Index;
