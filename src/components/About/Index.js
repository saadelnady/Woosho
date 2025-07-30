import React, { useEffect, useRef } from "react";
import styles from "./styles/styles.module.scss";

import IcGift from "./assets/images/ic-gift.svg";
import { useSelector } from "react-redux";
import gsap from "gsap";
import Image from "next/future/image";
import GroofyLight from "./assets/images/Groofy-light.gif";
import GroofyDark from "./assets/images/Groofy-dark.gif";
import CloudToRight from "../shared/CloudToRight.js";
import { FormattedMessage } from "react-intl";
import { Col, Container, Row } from "react-bootstrap";
const Index = () => {
  const { theme } = useSelector((state) => state.theme);
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
    <div className={styles.about} id="about">
      <div className="about-wrapper">
        <div className="gift-1" ref={gift1Ref}>
          <IcGift />
        </div>
        <Container>
          <div className="about-content">
            <Row>
              <Col xs={12} md={6}>
                <div className="text">
                  <h3>عن تطبيق ووشو</h3>
                  <p>
                    التطبيق الأول في المملكة اللي يساعدك في اختيار الهدية
                    المناسبة لكل شخص والبعد عن كوارث الهدايا العجيبة! من خلال
                    قائمة الامنيات الخاصة بالشخص بمجرد حفظ رقمه تقدر توصل
                    للقائمة بكل سهولة وتعرف احتياجاته وذوقه في الهدايا
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="character-img">
                  <Image
                    src={theme === "dark" ? GroofyDark : GroofyLight}
                    alt="character"
                  />
                  <div className="cloud-wrapper">
                    <CloudToRight>
                      <foreignObject x="100" y="70" width="310" height="400">
                        <div className="character-info">
                          <h3 className="name">
                            <FormattedMessage id="name" /> : شنشون
                          </h3>
                          <p className="role">
                            <FormattedMessage id="role" /> : الشخصية المساعدة
                          </p>
                          <p className="characterDescription">
                            لئيم كذئبٍ في الظلال، ماكٌر كحكايات الخيال، خبيث
                            يتقن فن الجدال، يسعى دائما لاغضاب القلوب بهدايا
                            غريبة لا تناسب الاحوال، متعته إثارة الاستفزاز
                            والاحتيال.{" "}
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
