import React, { useEffect } from "react";
import "../../scss/Carousel/Slide.scss";

export default function Slide({
  innerWidth,
  currentSlide,
  bannerData: { url, title, content },
}) {
  useEffect(() => {
    const bannerList = document.querySelectorAll(".image");
    bannerList.forEach((e) => (e.style.filter = "brightness(50%)"));
    bannerList[currentSlide].style.filter = "brightness(100%)";
  });

  return (
    <div
      className="slide"
      style={{
        width: `${innerWidth >= 1200 ? "1060px" : `${innerWidth - 80}px`}`,
      }}
    >
      <div>
        <div>
          <div className="image">
            <a href="/">
              <img src={url} alt={url}></img>
            </a>
          </div>
          <div className="slideInfo">
            <h2>{title}</h2>
            <h3>{content}</h3>
            <hr className="divider"></hr>
            <a href="/">
              <span className="button-label">
                바로가기
                <span className="button-endIcon">
                  <span className="endIcon">
                    <svg
                      className="SvgIcon_SvgIcon__root__svg__DKYBi"
                      viewBox="0 0 18 18"
                    >
                      <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                    </svg>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
