import { forwardRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Container, H1, H2, Highlight, Split } from "../theme/GlobalStyles";
import useIsVisible from "../utils/isVisible";
import Anime from "react-anime";
import React from "react";

import cpp from "../assets/langsmin/cplusplus.svg"
import java from "../assets/langsmin/java.svg"
import kotlin from "../assets/langsmin/kotlin.svg"
import html5 from "../assets/langsmin/html5.svg"
import css3 from "../assets/langsmin/css3.svg"
import python from "../assets/langsmin/python.svg"
import javascript from "../assets/langsmin/javascript.svg"
import php from "../assets/langsmin/php.svg"
import sql from "../assets/langsmin/mysql.svg"
import shellscript from "../assets/langsmin/bash.svg"

const Languages = (props: any, ref: any) => {
  const [autoplayState, setAutoplayState] = useState(false);

  const isElmVisible = useIsVisible(ref);

  let configAnimate = {
    duartion: 1000,
    translateY: ["5em", 0],
    opacity: [0, 1],
    autoplay: false,
  };

  useEffect(() => {
    if (isElmVisible) {
      setAutoplayState(true);
    }
  }, [isElmVisible]);

  return (
    <Container mt="50px" ref={ref} {...props}>
      <H1>
        Known{" "}
        <Split>
          Languages<Highlight>.</Highlight>
        </Split>
      </H1>
      <LanguagesWrap>
        <Anime
          delay={(el: Element, index: number) => 500}
          {...configAnimate}
          autoplay={autoplayState}
        >
          <Language>
            <LanguagePadding>
              <LanguageTop>
                <GithubIcon>
                  <cpp />
                </GithubIcon>
                <P>C++</P>
              </LanguageTop>
            </LanguagePadding>
          </Language>
          <Language>
            <LanguagePadding>
              <LanguageTop>
                <GithubIcon>
                <java />
                </GithubIcon>
                <P>Java</P>
              </LanguageTop>
            </LanguagePadding>
          </Language>
          <Language>
            <LanguagePadding>
              <LanguageTop>
                <GithubIcon>
                <kotlin />
                </GithubIcon>
                <P>Kotlin</P>
              </LanguageTop>
            </LanguagePadding>
          </Language>
          <Language>
            <LanguagePadding>
              <LanguageTop>
                <GithubIcon>
                <html5 />
                </GithubIcon>
                <P>Html</P>
              </LanguageTop>
            </LanguagePadding>
          </Language>
          <Language>
            <LanguagePadding>
              <LanguageTop>
                <GithubIcon>
                <css3 />
                </GithubIcon>
                <P>Css</P>
              </LanguageTop>
            </LanguagePadding>
          </Language>
          <Language>
            <LanguagePadding>
              <LanguageTop>
                <GithubIcon>
                <python />
                </GithubIcon>
                <P>Python</P>
              </LanguageTop>
            </LanguagePadding>
          </Language>
          <Language>
            <LanguagePadding>
              <LanguageTop>
                <GithubIcon>
                  <javascript />
                </GithubIcon>
                <P>Javascript</P>
              </LanguageTop>
            </LanguagePadding>
          </Language>
          <Language>
            <LanguagePadding>
              <LanguageTop>
                <GithubIcon>
                  <php />
                </GithubIcon>
                <P>Php</P>
              </LanguageTop>
            </LanguagePadding>
          </Language>
          <Language>
            <LanguagePadding>
              <LanguageTop>
                <GithubIcon>
                  <sql />
                </GithubIcon>
                <P>Sql</P>
              </LanguageTop>
            </LanguagePadding>
          </Language>
          <Language>
            <LanguagePadding>
              <LanguageTop>
                <GithubIcon>
                  <shellscript />
                </GithubIcon>
                <P>Shellscript</P>
              </LanguageTop>
            </LanguagePadding>
          </Language>
        </Anime>
      </LanguagesWrap>
    </Container>
  );
};

export default forwardRef(Languages);

const LanguagesWrap = styled.div`
  display: flex;
  grid-template-columns: repeat(auto-fill, 150px);
  gap: 4px;
  justify-content: center;

  width: 100%;
  margin-top: 60px;
  @media screen and (max-width: 1350px) {
    margin-top: 50px;
  }
  @media screen and (max-width: 600px) {
    display: inline-grid;
    grid-template-columns: repeat(auto-fill, 100px);
  }
`;

const Language = styled.a`
  width: 150px;
  height: 150px;
  display: flex;

  background-color: ${(props) => props.theme.colors.raisinBlack};
  color: ${({ theme }) => theme.colors.textLight};
  border-radius: 14px;

  @media screen and (max-width: 600px) {
    width: 100px;
    height: 100%;
  }

  :hover {
    ${H2} {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const LanguagePadding = styled.div`
  margin: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    margin: 25px;
  }
`;

const LanguageTop = styled.div``;

const GithubIcon = styled.div`
  font-size: 50px;

  @media screen and (min-width: 600px) {
    padding-left: 18px;
  }
`;

const P = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
`;
