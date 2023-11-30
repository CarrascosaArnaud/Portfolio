import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const desktop = width >= 900;
  const mobile = width < 900;

  return {
    width,
    handleResize,
    desktop,
    mobile,
    height,
  };
};
