import React, { useEffect, useRef } from "react";
import styles from "./styles/styles.module.scss";
import IcMoon from "./assets/images/moon.svg";
import IcSun from "./assets/images/sun.svg";
import IcGift from "./assets/images/ic-gift.svg";
import IcCloud1 from "./assets/images/ic-cloud1.svg";
import IcCloud2 from "./assets/images/ic-cloud2.svg";
import { useSelector } from "react-redux";
import gsap from "gsap";
import Image from "next/future/image";
import WoshoCharacterLight from "./assets/images/Woshwo-light.gif";
import WoshoCharacterDark from "./assets/images/Woshwo-dark.gif";
import CloudToRight from "../shared/CloudToRight.js";
import { FormattedMessage } from "react-intl";
const Index = () => {
  const { theme } = useSelector((state) => state.theme);
  const iconRef = useRef(null);

  useEffect(() => {
    if (iconRef.current) {
      const tl = gsap.timeline();
      tl.fromTo(
        iconRef.current,
        { x: -200, y: -200, opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        }
      );

      tl.to(iconRef.current, {
        x: 0,
        y: 0,
        rotate: 0,
        duration: 1.4,
        ease: "power2.out",
      });
    }
  }, [theme]);
  const gift1Ref = useRef(null);
  const gift2Ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      gift1Ref.current,
      { x: -100, opacity: 0, rotate: -15 },
      { x: 0, opacity: 1, rotate: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      gift2Ref.current,
      { x: 100, opacity: 0, rotate: 15 },
      {
        x: 0,
        opacity: 1,
        rotate: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      }
    );

    gsap.to(gift1Ref.current, {
      y: -10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1,
    });

    gsap.to(gift2Ref.current, {
      y: -10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1.3,
    });
  }, []);
  useEffect(() => {
    const screenWidth = window.innerWidth;

    gsap.fromTo(
      ".cloud1",
      { x: -200 },
      {
        x: screenWidth,
        duration: 50,
        repeat: -1,
        ease: "linear",
        onRepeat: () => gsap.set(".cloud1", { x: -200 }), // تبدأ من الأول
      }
    );

    gsap.fromTo(
      ".cloud2",
      { x: -300 },
      {
        x: screenWidth + 100,
        duration: 50,
        repeat: -1,
        ease: "linear",
        onRepeat: () => gsap.set(".cloud2", { x: -300 }),
      }
    );
  }, []);

  return (
    <div className={styles.hero}>
      <div className="inner">
        <div className="wrapper">
          {theme === "dark" ? (
            <div ref={iconRef} className="icon-container moon-container">
              <IcMoon />
            </div>
          ) : (
            <div ref={iconRef} className="icon-container sun-container">
              <IcSun />
            </div>
          )}
        </div>
        <div className="gift-1" ref={gift1Ref}>
          <IcGift />
        </div>
        <div className="gift-2" ref={gift2Ref}>
          <IcGift />
        </div>
        <div className="cloud1">
          <IcCloud2 />
        </div>
        <div className="cloud2">
          <IcCloud2 />
        </div>
        <div className="hero-content">
          <div className="inner">
            <div className="character-img">
              <Image
                src={
                  theme === "dark" ? WoshoCharacterDark : WoshoCharacterLight
                }
                alt="character"
              />
              <div className="cloud-wrapper">
                <CloudToRight>
                  <foreignObject x="100" y="100" width="310" height="400">
                    <div className="character-info">
                      <h3 className="name">
                        <FormattedMessage id="name" /> : وشوو
                      </h3>
                      <p className="role">
                        <FormattedMessage id="role" />
                        الشخصية الرئيسية
                      </p>
                      <p className="characterDescription">
                        مرح لطيف كنسيم خفيف. حريص على اسعاد كل صديق. يتمتع
                        بابتسامة ذات بريق
                      </p>
                    </div>
                  </foreignObject>
                </CloudToRight>
              </div>
            </div>
            <div className="text">
              <h1>
                "هل لديك أمنية تحب تحقيقها ؟ دع ووشو يساعدك في تحويلها إلى هدية
                مثالية!"
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
