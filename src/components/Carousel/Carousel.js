import React, { useCallback, useEffect, useRef, useState } from "react";
import "../../scss/Carousel/Carousel.scss";
import Slide from "./Slide";
import slideData from "./BannerData";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const slideRef = useRef(null);
  const totalSlide = slideData.length;
  const handleWidth = (event) => {
    setInnerWidth(event.target.innerWidth);
  };

  useEffect(() => {
    const timer = setTimeout(nextSlide, 5000);
    window.addEventListener("resize", handleWidth);
    slideRef.current.style.width = `${
      innerWidth < 1200
        ? `${(innerWidth - 80) * 20}px`
        : `${29700 + (innerWidth - 1200) * 27}px`
    }`;
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `${
      innerWidth < 1200
        ? `translate3d(-${(innerWidth - 80) * currentSlide}px, 0px, 0px)`
        : `translate3d(-${
            1076 + 1084 * (currentSlide - 1) - (innerWidth - 1200) / 2
          }px, 0px, 0px)`
    }`;
    return () => {
      window.removeEventListener("resize", handleWidth);
      clearInterval(timer);
    };
  }, [currentSlide, innerWidth]);

  const nextSlide = useCallback(() => {
    if (currentSlide <= totalSlide - 2) {
      setCurrentSlide(currentSlide + 1);
    }
    if (currentSlide === totalSlide - 2) {
      setTimeout(() => {
        slideRef.current.style.transition = "0ms";
        slideRef.current.style.transform = `${
          innerWidth < 1200
            ? `translate3d(-${innerWidth - 80}px, 0px, 0px)`
            : `translate3d(-${1076 - (innerWidth - 1200) / 2}px, 0px, 0px)`
        }`;
        setCurrentSlide(1);
      }, 499);
    }
  }, [currentSlide, totalSlide, innerWidth]);

  const prevSlide = useCallback(() => {
    if (currentSlide >= 1) {
      setCurrentSlide(currentSlide - 1);
    }
    if (currentSlide === 1) {
      setTimeout(() => {
        slideRef.current.style.transition = "0ms";
        slideRef.current.style.transform = `${
          innerWidth < 1200
            ? `translate3d(-${
                (innerWidth - 80) * (totalSlide - 2)
              }px, 0px, 0px)`
            : `translate3d(-${
                1076 + 1084 * (totalSlide - 3) - (innerWidth - 1200) / 2
              }px, 0px, 0px)`
        }`;
        setCurrentSlide(totalSlide - 2);
      }, 499);
    }
  }, [currentSlide, totalSlide, innerWidth]);

  return (
    <main className="Main">
      <div className="TopBanner">
        <div className="slide-container">
          <div className="slide-list">
            <div className="slide-track" ref={slideRef}>
              {slideData.map((e, idx) => (
                <Slide
                  bannerData={e}
                  key={idx}
                  innerWidth={innerWidth}
                  currentSlide={currentSlide}
                />
              ))}
            </div>
          </div>
        </div>
        <button className="nextButton" onClick={nextSlide}>
          <span className="nextIcon">
            <svg
              className="SvgIcon_SvgIcon__root__svg__DKYBi"
              viewBox="0 0 18 18"
            >
              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
            </svg>
          </span>
        </button>
        <button className="prevButton" onClick={prevSlide}>
          <span className="prevIcon">
            <svg
              className="SvgIcon_SvgIcon__root__svg__DKYBi"
              viewBox="0 0 18 18"
            >
              <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
            </svg>
          </span>
        </button>
      </div>
    </main>
  );
}
