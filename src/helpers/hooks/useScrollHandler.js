import { useEffect, useState } from "react";

const useScrollHandler = (target) => {
  const [isTarget, setIsTarget] = useState(false);
  //   handler
  useEffect(() => {
    const handleScroll = () => {
      setIsTarget(window.scrollY > target);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [target]);

  return { isTarget };
};

export default useScrollHandler;
