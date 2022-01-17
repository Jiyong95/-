import React from "react";
import "../../scss/NavigationBar/Menu.scss";

export default function Menu({ data: menuData }) {
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
