import { forwardRef, useState, useEffect } from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import { BsGithub, BsCloudDrizzleFill } from "react-icons/bs";
import { GoLinkExternal } from "react-icons/go";
import { CgWebsite, CgSupport } from "react-icons/cg";
import { IoMdMusicalNotes } from "react-icons/io"
import { MdInsertPhoto } from "react-icons/md"
import { Container, H1, H2, Highlight, Split } from "../theme/GlobalStyles";
import useIsVisible from "../utils/isVisible";
import Anime from "react-anime";

const Projects = (props: any, ref: any) => {
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

  const config = {
    tiltMaxAngleX: 5,
    tiltMaxAngleY: 5,
    tiltReverse: false,
  };

  return (
    <Container mt="50px" ref={ref} {...props}>
      <H1>
        Notable{" "}
        <Split>
          Projects <Highlight>&</Highlight> Concepts<Highlight>.</Highlight>
        </Split>
      </H1>

      <ProjectsWrap>
        <Anime
          delay={(el: Element, index: number) => 500}
          {...configAnimate}
          autoplay={autoplayState}
        >
          <Tilt {...config}>
            <Project target="_blank" href="https://weather.rahman.works">
              <ProjectPadding>
                <ProjectTop>
                  <GithubIcon>
                    <BsCloudDrizzleFill />
                  </GithubIcon>
                  <H2>Weather App</H2>
                  <ShortDesc>
                    A Simple Weather Application That Shows Exact Weather In Your City.
                  </ShortDesc>
                </ProjectTop>
                <ProjectBottom>
                  <ProjectLangsWrap>
                    <ProjectLang>REACT</ProjectLang>
                    <ProjectLang>TAILWIND CSS</ProjectLang>
                    <ProjectLang>JS</ProjectLang>
                  </ProjectLangsWrap>
                  <ProjectLink>
                    <GoLinkExternal />
                  </ProjectLink>
                </ProjectBottom>
              </ProjectPadding>
            </Project>
          </Tilt>
          <Tilt {...config}>
            <Project
              target="_blank"
              href="https://lyrics.rahman.works"
            >
              <ProjectPadding>
                <ProjectTop>
                  <GithubIcon>
                    <IoMdMusicalNotes />
                  </GithubIcon>
                  <H2>Lyrics Search</H2>
                  <ShortDesc>
                    A Free Website To Search Lyrics For Any Song You Hear.
                  </ShortDesc>
                </ProjectTop>
                <ProjectBottom>
                  <ProjectLangsWrap>
                    <ProjectLang>DJANGO</ProjectLang>
                    <ProjectLang>PYTHON</ProjectLang>
                    <ProjectLang>HTML</ProjectLang>
                  </ProjectLangsWrap>

                  <ProjectLink>
                    <GoLinkExternal />
                  </ProjectLink>
                </ProjectBottom>
              </ProjectPadding>
            </Project>
          </Tilt>
          <Tilt {...config}>
            <Project
              target="_blank"
              href="https://cdn.rahman.works"
            >
              <ProjectPadding>
                <ProjectTop>
                  <GithubIcon>
                    <MdInsertPhoto />
                  </GithubIcon>
                  <H2>CDN</H2>
                  <ShortDesc>
                    A Content Delivery Network To Store My Photo/Media(s) For My Webpages and Web Application. 
                  </ShortDesc>
                </ProjectTop>
                <ProjectBottom>
                  <ProjectLangsWrap>
                    <ProjectLang>EXPRESS</ProjectLang>
                    <ProjectLang>JS</ProjectLang>
                    <ProjectLang>CLOUD</ProjectLang>
                  </ProjectLangsWrap>

                  <ProjectLink>
                    <GoLinkExternal />
                  </ProjectLink>
                </ProjectBottom>
              </ProjectPadding>
            </Project>
          </Tilt>
        </Anime>
      </ProjectsWrap>
      <ProjectsWrap>
        <Anime
          delay={(el: Element, index: number) => 500}
          {...configAnimate}
          autoplay={autoplayState}
        >
          <Tilt {...config}>
            <Project target="_blank" href="https://rahman.works">
              <ProjectPadding>
                <ProjectTop>
                  <GithubIcon>
                    <BsGithub />
                  </GithubIcon>
                  <H2>Portfolio</H2>
                  <ShortDesc>
                    The Webpage You're Currently Viewing.
                  </ShortDesc>
                </ProjectTop>
                <ProjectBottom>
                  <ProjectLangsWrap>
                    <ProjectLang>REACT</ProjectLang>
                    <ProjectLang>TS</ProjectLang>
                    <ProjectLang>HTML</ProjectLang>
                    <ProjectLang>CSS</ProjectLang>
                  </ProjectLangsWrap>
                  <ProjectLink>
                    <GoLinkExternal />
                  </ProjectLink>
                </ProjectBottom>
              </ProjectPadding>
            </Project>
          </Tilt>
          <Tilt {...config}>
            <Project
              target="_blank"
              href="https://github.com/Abdul1810/support-bot-with-buttons"
            >
              <ProjectPadding>
                <ProjectTop>
                  <GithubIcon>
                    <CgSupport />
                  </GithubIcon>
                  <H2>Support Bot With Buttons</H2>
                  <ShortDesc>
                    A Support Bot For Your Server.Easy To Host.
                  </ShortDesc>
                </ProjectTop>
                <ProjectBottom>
                  <ProjectLangsWrap>
                    <ProjectLang>Node-JS</ProjectLang>
                    <ProjectLang>Discord.js</ProjectLang>
                    <ProjectLang>JS</ProjectLang>
                  </ProjectLangsWrap>

                  <ProjectLink>
                    <GoLinkExternal />
                  </ProjectLink>
                </ProjectBottom>
              </ProjectPadding>
            </Project>
          </Tilt>
          <Tilt {...config}>
            <Project
              target="_blank"
              href="https://http.cat/401"
            >
              <ProjectPadding>
                <ProjectTop>
                  <GithubIcon>
                    <CgWebsite />
                  </GithubIcon>
                  <H2>Upcoming Project</H2>
                  <ShortDesc>
                    A Under Development Project For Discord.Coming Soon...
                  </ShortDesc>
                </ProjectTop>
                <ProjectBottom>
                  <ProjectLangsWrap>
                    <ProjectLang>Javascript</ProjectLang>
                  </ProjectLangsWrap>

                  <ProjectLink>
                    <GoLinkExternal />
                  </ProjectLink>
                </ProjectBottom>
              </ProjectPadding>
            </Project>
          </Tilt>
        </Anime>
      </ProjectsWrap>
    </Container>
  );
};

export default forwardRef(Projects);

const ProjectsWrap = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(auto-fill, 350px);
  gap: 40px;
  justify-content: center;

  width: 100%;
  margin-top: 60px;
  @media screen and (max-width: 1350px) {
    margin-top: 50px;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, 300px);
  }
`;

const Project = styled.a`
  width: 350px;
  height: 300px;
  display: flex;

  background-color: ${(props) => props.theme.colors.raisinBlack};
  color: ${({ theme }) => theme.colors.textLight};
  border-radius: 5px;
  @media screen and (max-width: 600px) {
    width: 300px;
    height: 100%;
  }
  :hover {
	@@ -267,50 +148,71 @@ const Project = styled.a`
  }
`;

const ProjectPadding = styled.div`
  padding: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProjectTop = styled.div``;
const ProjectBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
`;

const GithubIcon = styled.div`
  font-size: 50px;
`;

const ShortDesc = styled.div`
  margin-top: 10px;
  line-height: 1.4;
  @media screen and (max-width: 600px) {
    margin: 20px 0;
  }
`;

const ProjectLangsWrap = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  position: relative;
`;

const ProjectLang = styled.div`
  color: ${(props) => props.theme.colors.textDim};
`;

const ProjectLink = styled.div`
  width: 30px;
  height: 30px;
  color: ${(props) => props.theme.colors.primary};
  font-size: 30px;
  margin-top: -10px;
`;
