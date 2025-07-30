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
// import IcBallLight from "./LightBall.js";
const Index = () => {
  const bannerRef = useRef(null);

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
  const pathRef = useRef();

  useEffect(() => {
    gsap.to(pathRef.current, {
      strokeDashoffset: -64,
      duration: 1.5,
      repeat: -1,
      ease: "none",
    });
  }, []);

  return (
    <div className={styles.home}>
      <div className="stars" ref={bannerRef}></div>
      <div className="desktopPath">
        <DesktopPath ref={pathRef} />
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
