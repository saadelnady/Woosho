import React, { useRef, useEffect } from "react";
import Hero from "@/components/Hero/Index.js";
import About from "@/components/About/Index.js";
import Features from "@/components/Features/Index.js";
import DownloadApp from "@/components/DownloadApp/Index.js";
import Contact from "@/components/Contact/Index.js";
import Terms from "@/components/Conditions/Index.js";
import Footer from "@/components/Footer/Index";
import { gsap } from "gsap";
import styles from "./styles/styles.module.scss";
import DesktopPath from "./DesktopPath";
import LightBall from "./LightBall.js";
import DarkBall from "./DarkBall.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useSelector } from "react-redux";
import Gift from "./assets/images/gift.png";
import Image from "next/future/image";
import MobilePath from "./MobilePath";

const Index = () => {
  const bannerRef = useRef(null);
  const { theme } = useSelector((state) => state.theme);
  useEffect(() => {
    const banner = bannerRef.current;
    const numberOfStars = 300;
    const appearMin = 0.3;
    const appearMax = 0.8;

    const stars = [];

    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      banner.appendChild(star);
      stars.push(star);
    }

    stars.forEach((star) => {
      const delay = Math.random();
      const duration = appearMin + Math.random() * (appearMax - appearMin);
      gsap.to(star, {
        opacity: 1,
        visibility: "visible",
        duration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay,
      });
    });
  }, []);
  gsap.registerPlugin(MotionPathPlugin);

  const DesktopPathRef = useRef();
  const MobilePathRef = useRef();
  const ballRef = useRef();
  const giftRef = useRef();
  const giftRef2 = useRef();

  // useEffect(() => {
  //   gsap.to(pathRef.current, {
  //     strokeDashoffset: -64,
  //     duration: 1.5,
  //     repeat: -1,
  //     ease: "none",
  //   });
  // }, []);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 769px)").matches;
    const path = isDesktop ? DesktopPathRef.current : MobilePathRef.current;

    // حركة الخط نفسه
    gsap.to(path, {
      strokeDashoffset: -64,
      duration: 1.5,
      repeat: -1,
      ease: "none",
    });

    // حركة الكرة على المسار
    gsap.to(ballRef.current, {
      motionPath: {
        path,
        align: path,
        alignOrigin: [0.5, 0.5],
        autoRotate: false,
      },
      duration: 40,
      repeat: -1,
      ease: "none",
      delay: 3,
    });

    // حركة الهدية الأولى
    gsap.to(giftRef.current, {
      motionPath: {
        path,
        align: path,
        alignOrigin: [0.5, 0.5],
        autoRotate: false,
      },
      duration: 50,
      repeat: -1,
      ease: "none",
      delay: 5,
    });

    // حركة الهدية الثانية
    gsap.to(giftRef2.current, {
      motionPath: {
        path,
        align: path,
        alignOrigin: [0.5, 0.5],
        autoRotate: false,
      },
      duration: 100,
      repeat: -1,
      ease: "none",
      delay: 10,
    });
  }, [theme]);

  return (
    <div className={styles.home}>
      <div className="stars" ref={bannerRef}></div>
      <div className="pathWrapper">
        <DesktopPath ref={DesktopPathRef} />
        <MobilePath ref={MobilePathRef} />
        {theme === "dark" ? (
          <DarkBall ref={ballRef} />
        ) : (
          <LightBall ref={ballRef} />
        )}
        <div className="ic-gift" ref={giftRef}>
          <Image
            src={Gift.src}
            alt="Gift"
            layout="fill"
            width={1920}
            height={1080}
          />
        </div>
        <div className="ic-gift2" ref={giftRef2}>
          <Image
            src={Gift.src}
            alt="Gift"
            layout="fill"
            width={1920}
            height={1080}
          />
        </div>
      </div>

      <Hero />
      <About />
      <Features />
      <DownloadApp />
      <Contact />
      <Terms />
      <Footer />
    </div>
  );
};

export default Index;
