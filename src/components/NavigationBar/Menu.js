import React from "react";
import "../../scss/NavigationBar/Menu.scss";

export default function Menu() {
  const menuData = [
    {
      name: "home",
      text: "홈",
      newFlag: 0,
      betaFlag: 0,
    },
    {
      name: "job",
      text: "채용",
      newFlag: 0,
      betaFlag: 0,
    },
    {
      name: "event",
      text: "이벤트",
      newFlag: 0,
      betaFlag: 0,
    },
    {
      name: "salary",
      text: "직군별 연봉",
      newFlag: 0,
      betaFlag: 0,
    },
    {
      name: "resume",
      text: "이력서",
      newFlag: 0,
      betaFlag: 0,
    },
    {
      name: "community",
      text: "커뮤니티",
      newFlag: 1,
      betaFlag: 0,
    },
    {
      name: "freelancer",
      text: "프리랜서",
      newFlag: 0,
      betaFlag: 0,
    },
    {
      name: "aiScore",
      text: "AI 합격예측",
      newFlag: 0,
      betaFlag: 1,
    },
  ];
  return (
    <ul className="Menu_className">
      {menuData.map(({ name, text, newFlag, betaFlag }) => (
        <li data-attribute-id="gnb" data-gnb-kind={name} key={name}>
          <a href="/">
            {text}
            {newFlag === 1 && (
              <em>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="11"
                  viewBox="0 0 18 11"
                >
                  <g
                    fill="none"
                    fillRule="evenodd"
                    fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                    fontSize="9"
                    fontWeight="500"
                  >
                    <g fill="#36F">
                      <g>
                        <g>
                          <g>
                            <g>
                              <g>
                                <g>
                                  <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                                    <tspan x="0" y="8">
                                      New
                                    </tspan>
                                  </text>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </em>
            )}
            {betaFlag === 1 && (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="11"
                  viewBox="0 0 18 11"
                >
                  <g
                    fill="none"
                    fillRule="evenodd"
                    fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                    fontSize="9"
                    fontWeight="500"
                  >
                    <g fill="#36F">
                      <g>
                        <g>
                          <g>
                            <g>
                              <g>
                                <g>
                                  <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                                    <tspan x="0" y="8">
                                      Beta
                                    </tspan>
                                  </text>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
